import { CommandOptions, OptionType } from 'ts-commands';

export function name(): CommandOptions {
	return {
		key: 'name',
		type: OptionType.string,
		description: 'project name',
	};
}
