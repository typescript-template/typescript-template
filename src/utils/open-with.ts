import { CommandRunner } from 'ts-script';

/**
 * Open project with specified command
 *
 * @param runner Command runner
 * @param cmd Open command
 */
export function openWith(runner: CommandRunner, cmd: string): void {
	runner.run(cmd + ' .', {
		loadingDescription: 'Opening project',
	});
}
