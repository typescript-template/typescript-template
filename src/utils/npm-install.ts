import { CommandRunner } from 'ts-script';

/**
 * Install npm dependencies
 *
 * @param runner Command runner
 */
export function npmInstall(runner: CommandRunner): void {
	try {
		runner.run('npm i', {
			loadingDescription: 'Installing npm dependencies',
		});
	}
	catch (e) {
		runner.log.error(
			'Unable to install npm dependencies. ' +
				'Please check your connection and manually run `npm i`.'
		);

		return;
	}

	try {
		runner.run('npm update', {
			loadingDescription: 'Updating npm dependencies',
		});
	}
	catch (e) {
		runner.log.error(
			'Unable to update npm dependencies. ' +
				'Please check your connection and manually run `npm update`.'
		);

		return;
	}

	try {
		runner.run('npm audit fix', {
			loadingDescription: 'Auditing npm dependencies',
		});
	}
	catch (e) {
		runner.log.error(
			'Unable to automatically audit npm dependencies. ' +
				'Please check your connection and run `npm audit fix`.'
		);

		return;
	}
}
