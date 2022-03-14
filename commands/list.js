import chalk from "chalk";
import PersistData from '../config.js'

const config = new PersistData();

export default function list () {
    const todoList = config.get('todo-list')
    if (todoList && todoList.length) {
        console.log(
            chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')
        )
        todoList.forEach((task, index) => {
            if (task.done) {
                console.log(
                    chalk.greenBright(`${index+1}. ${task.text}`)
                )
            } else {
                console.log(
                    chalk.yellowBright(`${index+1}. ${task.text}`)
                )
            }
        })
    } else {
        console.log(
            chalk.red.bold('You don\'t have any tasks yet.')
        )
    }
}

