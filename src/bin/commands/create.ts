import path from 'path';
import { CommandRunner } from 'ts-script';
import { Log } from 'ts-tiny-log';
import { LogLevel } from 'ts-tiny-log/levels';

import { Template } from '../../templates';
import * as utils from '../../utils';
import * as options from '../options';
import { Command, CommandOptions } from 'ts-commands';

interface Args {
	type: Template;
	name: string;
	branch: string;
	openWith: string;
	org: string;
	verbose: boolean;
}

/**
 * Create a new project
 */
export class CreateCommand extends Command {
	signature = 'create [type] [name]';
	description = 'Create a new project';

	positional: CommandOptions[] = [options.type(), options.name()];

	options: CommandOptions[] = [
		options.branch(),
		options.org(),
		options.verbose(),
		options.openWith(),
	];

	async handle(argv: Args): Promise<void> {
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
		const branch = argv.branch ?? 'master';

		// Create project folder
		utils.initProject(cmd, name);

		// "cd" into project
		cmd.dir = path.join(cmd.dir, name);

		// Merge the template
		utils.mergeTemplate({ runner: cmd, type, branch });

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
}
