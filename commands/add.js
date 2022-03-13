import Conf from "conf";
import chalk from "chalk";

const config = new Conf();

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

