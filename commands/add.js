import chalk from "chalk";
import PersistData from '../config.js'

const config = new PersistData();

export default function add (task) {
    let todosList = config.get('todo-list')

    if (!todosList) {
        todosList = []
    }

    todosList.push({
        text: task,
        done: false
    })

    config.set('todo-list', todosList)

    console.log(
        chalk.green.bold('Task has been added successfully!')
    )
}

