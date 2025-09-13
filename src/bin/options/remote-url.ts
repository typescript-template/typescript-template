import { CommandOptions, OptionType } from 'ts-commands';

export function remoteUrl(): CommandOptions {
	return {
		key: 'remote',
		type: OptionType.string,
		description: 'template remote url/path',
	};
}
