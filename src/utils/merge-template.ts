import { CommandRunner } from 'ts-script';
import { baseUrl, Template, templates } from '../templates';

/**
 * Merge template from remote
 *
 * @param runner Command runner
 * @param type Template type
 * @param isExistingProject (Optional) Pass true for existing projects
 */
export function mergeTemplate(options: {
	runner: CommandRunner;
	type: Template;
	isExistingProject?: boolean;
	branch: string;
	remoteUrl?: string;
}): void {
	let remoteName: string;
	let url: string;
	let branch: string = options.branch;
	const type = options.type;
	const runner = options.runner;
	const isExistingProject = !!options.isExistingProject;
	const remoteUrl = options.remoteUrl;

	if (options.remoteUrl) {
		remoteName = 'template-' + type.replace(/[^a-zA-Z0-9]+/g, '_');
		url = remoteUrl;
	}
	else {
		remoteName = 'template-' + type;

		if (!(type in templates)) {
			throw new Error(`Template type "${type}" does not exist`);
		}

		url = baseUrl + type;
	}

	if (!branch) {
		branch = templates[type]?.branch || 'master';
	}

	try {
		runner.run(`git remote add ${remoteName} ${url}`, {
			loadingDescription: 'Adding template',
		});
	}
	catch (e) {
		runner.log.warn('Adding remote failed, may already exist');
	}

	runner.run(`git fetch ${remoteName} ${branch}`, {
		loadingDescription: 'Fetching',
	});

	if (isExistingProject) {
		runner.run(`git merge ${remoteName}/${branch} --allow-unrelated`, {
			loadingDescription: 'Merging',
		});
	}
	else {
		runner.run(`git pull ${remoteName} ${branch} --allow-unrelated`, {
			loadingDescription: 'Pulling',
		});
	}

	runner.run(`git remote remove ${remoteName}`, {
		loadingDescription: 'Cleaning up',
	});
}
