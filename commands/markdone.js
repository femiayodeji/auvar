import Conf from "conf";
import chalk from "chalk";

const config = new Conf();

export default function markDone ({tasks}) {
    let todosList = config.get('todo-list')

    if (todosList) {
        todosList = todosList.map((task, index) => {
            if (tasks) {
                if (tasks.indexOf((index+1).toString()) !== -1) {
                    task.done = true
                }
            } else {
                task.done = true
            }
            return task
        });

        config.set('todo-list', todosList)
    }

    console.log(
        chalk.green.bold('Tasks have been marked as done successfully')
    )
}

