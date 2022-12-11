import path from 'path';
import { CommandRunner } from 'ts-script';
import { Log } from 'ts-tiny-log';
import { LogLevel } from 'ts-tiny-log/levels';

import { Template } from '../../templates';
import * as utils from '../../utils';
import * as options from '../options';

interface Args {
	type: Template;
	name: string;
	openWith: string;
	org: string;
	verbose: boolean;
}

/**
 * Create a new project
 */
export function create(yargs) {
	return yargs
		.command(
			'create [type] [name]',
			'create a new project',
			(yargs) => {
				return yargs
					.positional(...options.type())
					.positional(...options.name());
			},
			(argv: Args) => {
				const cmd = new CommandRunner({
					log: new Log({
						level: argv.verbose ? LogLevel.debug : LogLevel.info,
						shouldWriteTimestamp: argv.verbose,
					}),
					verbose: argv.verbose,
				});

				const name = argv.name;
				const org = argv.org ?? argv.name;
				const type = argv.type;

				// Create project folder
				utils.initProject(cmd, name);

				// "cd" into project
				cmd.dir = path.join(cmd.dir, name);

				// Merge the template
				utils.mergeTemplate(cmd, type);

				// Replace placeholders
				utils.replacePlaceholder(cmd, 'project-name', name);
				utils.replacePlaceholder(cmd, 'project-org', org);

				// Install npm dependencies
				utils.npmInstall(cmd);

				// Commit changes
				utils.commit(
					cmd,
					`Project created using TypeScript Template (${type})`
				);

				// Open project!
				if (argv.openWith) {
					utils.openWith(cmd, argv.openWith);
				}
			}
		)
		.option(...options.org())
		.option(...options.verbose())
		.option(...options.openWith());
}
