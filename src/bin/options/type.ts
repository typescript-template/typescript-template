import { CommandOptions, OptionType } from 'ts-commands';

import { templateKeys } from '../../templates';

export function type(): CommandOptions {
	return {
		key: 'type',
		type: OptionType.string,
		choices: templateKeys,
		description: 'template type',
		default: 'base',
	};
}
