import { replaceInFileSync } from 'replace-in-file';
import { CommandRunner } from 'ts-script';

/**
 * Replace placeholder variables in a project
 *
 * @param runner Command runner
 * @param key Placeholder key
 * @param val Replacement value
 */
export function replacePlaceholder(
	runner: CommandRunner,
	key: string,
	val: string
): void {
	runner.run(
		() => {
			replaceInFileSync({
				files: runner.dir + '/**/*',
				glob: { dot: false },
				from: new RegExp('{{' + key + '}}', 'g'),
				to: val,
			});
		},
		{
			loadingDescription: 'Replacing ' + key.replace(/-/g, ' '),
		}
	);
}
