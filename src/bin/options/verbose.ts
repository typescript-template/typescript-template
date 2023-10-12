import { CommandOptions, OptionType } from 'ts-commands';

export function verbose(): CommandOptions {
	return {
		key: 'verbose',
		alias: 'v',
		type: OptionType.boolean,
		description: 'Run with verbose logging',
	};
}
