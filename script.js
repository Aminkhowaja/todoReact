import React from 'react';
import ReactDOM from 'react-dom';
import { ToDo } from './components/ToDo';

var taskList = ['Task', 'Task1'];

var tasks = localStorage.getItem('storedTasks');
if(tasks)
{
    taskList = JSON.parse(tasks);
}

ReactDOM.render(
    <ToDo tasks={taskList} />,
    document.getElementById('todo')
);
