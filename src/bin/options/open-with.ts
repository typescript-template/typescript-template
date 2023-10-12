import { CommandOptions, OptionType } from 'ts-commands';

export function openWith(): CommandOptions {
	return {
		key: 'open-with',
		type: OptionType.string,
		description: 'open project with command (e.g. "code")',
	};
}
