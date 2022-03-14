import chalk from "chalk";
import PersistData from '../config.js'

const config = new PersistData();

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

