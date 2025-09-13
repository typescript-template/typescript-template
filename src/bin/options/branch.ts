import { CommandOptions, OptionType } from 'ts-commands';

export function branch(): CommandOptions {
	return {
		key: 'branch',
		type: OptionType.string,
		description: 'remote template branch to use',
	};
}
