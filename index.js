#! /usr/bin/env node
import { program } from 'commander'
import list from './commands/list.js'
import add from './commands/add.js'

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)

program
    .command('add <task>')
    .description('Add a new TODO task')
    .action(add)

program.parse()
