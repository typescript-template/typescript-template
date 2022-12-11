import { templateKeys } from '../../templates';

export function type() {
	return [
		'type',
		{
			choices: templateKeys,
			description: 'template type',
			default: 'base',
		},
	];
}
