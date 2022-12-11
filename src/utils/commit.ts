import { CommandRunner } from 'ts-script';

/**
 * Add and commit current changes
 *
 * @param runner Command runner
 * @param message Commit message
 */
export function commit(runner: CommandRunner, message: string): void {
	runner.run(`git add . && git commit -m "${message}"`, {
		loadingDescription: 'Committing changes',
	});
}
