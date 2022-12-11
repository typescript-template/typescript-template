#! /usr/bin/env node

import Yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { commands } from './commands';

console.log('TypeScript Template');

async function index() {
	const yarg = Yargs(hideBin(process.argv));

	for (const cmd of commands) {
		cmd(yarg);
	}

	await yarg.parse();
}

index()
	.then()
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
