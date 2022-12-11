import { CommandRunner } from 'ts-script';

/**
 * Install npm dependencies
 *
 * @param runner Command runner
 */
export function npmInstall(runner: CommandRunner): void {
	runner.run('npm i && npm update && npm audit fix', {
		loadingDescription: 'Installing npm dependencies',
	});
}
