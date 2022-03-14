#! /usr/bin/env node
import { program } from 'commander'
import list from './commands/list.js'
import add from './commands/add.js'
import markDone from './commands/markdone.js'
import remove from './commands/remove.js'

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)

program
    .command('add <task>')
    .description('Add a new TODO task')
    .action(add)

program
    .command('mark-done')
    .description('Mark todos done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone)
    
program
    .command('remove')
    .description('Remove todos')
    .option('-t, --tasks <tasks...>', 'The tasks to remove. If not specified, all tasks will be remove.')
    .action(remove)
    
program.parse()
