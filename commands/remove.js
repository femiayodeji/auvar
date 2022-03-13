import Conf from "conf";
import chalk from "chalk";

const config = new Conf();

export default function remove({tasks}) {
    let todosList = config.get('todo-list')
    const count = todosList.length;

    if (todosList && tasks) {
        todosList = todosList.filter((task, index) => {
            return !tasks.includes((index+1).toString());
        });
        config.set('todo-list', todosList)
    }

    if(todosList.length < count){
        console.log(
            chalk.green.bold('Tasks have been removed')
        )           
    }
}

