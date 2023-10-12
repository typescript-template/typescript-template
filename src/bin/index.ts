#! /usr/bin/env node

import { registerCommands } from 'ts-commands';
import { commands } from './commands';

registerCommands({
	name: 'tstemplate',
	commands: commands,
});
