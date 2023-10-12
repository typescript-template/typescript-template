import { CommandOptions, OptionType } from 'ts-commands';

export function org(): CommandOptions {
	return {
		key: 'org',
		type: OptionType.string,
		description: 'organization name',
	};
}
