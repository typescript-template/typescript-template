import { CommandRunner } from 'ts-script';

export default async function pack() {
	const cmd = new CommandRunner();

	cmd.run('npm run script -- pack', {
		loadingDescription: 'Packing',
		finishedDescription: 'Packed',
	});

	cmd.run('cd dist/src && npm i -g .', {
		loadingDescription: 'Installing',
		finishedDescription: 'Installed',
	});
}
