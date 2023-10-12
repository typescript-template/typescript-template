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
	openWith: string;
	org: string;
	verbose: boolean;
}

/**
 * Create a new project
 */
export class UpdateCommand extends Command {
	signature = 'update [type]';
	description = 'Update current project';

	positional: CommandOptions[] = [options.type()];
	options: CommandOptions[] = [options.verbose()];

	async handle(argv: any): Promise<void> {
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
}
