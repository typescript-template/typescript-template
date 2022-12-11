import { CommandRunner } from 'ts-script';
import { baseUrl, Template, templates } from '../templates';

/**
 * Merge template from remote
 *
 * @param runner Command runner
 * @param type Template type
 */
export function mergeTemplate(runner: CommandRunner, type: Template): void {
	const remote = 'template-' + type;
	const url = templates[type] ?? baseUrl + type;

	try {
		runner.run(`git remote add ${remote} ${url}`, {
			loadingDescription: 'Adding template',
		});
	}
	catch (e) {
		runner.log.warn('Adding remote failed, may already exist');
	}

	runner.run(`git fetch ${remote} master`, {
		loadingDescription: 'Fetching',
	});

	runner.run(`git pull ${remote} master --allow-unrelated`, {
		loadingDescription: 'Pulling',
	});

	runner.run(`git remote remove ${remote}`, {
		loadingDescription: 'Cleaning up',
	});
}
