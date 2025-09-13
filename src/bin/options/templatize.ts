import { CommandOptions, OptionType } from 'ts-commands';

export function templatize(): CommandOptions {
	return {
		key: 'templatize',
		type: OptionType.boolean,
		description: 'create a template',
	};
}
