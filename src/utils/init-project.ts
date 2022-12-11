import { CommandRunner } from 'ts-script';

/**
 * Create a new git project
 *
 * @param runner Command runner
 * @param name Project name
 */
export function initProject(runner: CommandRunner, name: string): void {
	runner.run('mkdir ' + name, {
		loadingDescription: 'Creating Directory',
	});

	runner.run('git init .', {
		loadingDescription: 'Initializing repository',
		dir: name,
	});
}
