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
export function update(yargs) {
	return yargs
		.command(
			'update [type]',
			'update current project',
			(yargs) => {
				return yargs.positional(...options.type());
			},
			(argv: Args) => {
				const cmd = new CommandRunner({
					log: new Log({
						level: argv.verbose ? LogLevel.debug : LogLevel.info,
						shouldWriteTimestamp: argv.verbose,
					}),
					verbose: argv.verbose,
				});

				const type = argv.type;

				// Merge the template
				utils.mergeTemplate(cmd, type, true);
			}
		)
		.option(...options.verbose());
}
