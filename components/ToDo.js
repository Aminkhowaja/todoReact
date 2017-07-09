import React from 'react';
import {NewTask} from './NewTask';
import {AppList} from './AppList';

export class ToDo extends React.Component {
    constructor(props) {
        super();
        this.state = {tasks: props.tasks};
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

updateList(text) {
    var updatedtasks = this.state.tasks;
    updatedtasks.push(text);
    this.setState({tasks: updatedtasks});
    this.updateLocalStorage(updatedtasks);
}

removeTask(text) {
    var updatedtasks = this.state.tasks;
    updatedtasks.splice(updatedtasks.indexOf(text), 1);
    this.setState({tasks: updatedtasks});
    this.updateLocalStorage(updatedtasks);
}

updateLocalStorage(updatedtasks) {
    console.log('Task Updated');
    localStorage.setItem('storedTasks', JSON.stringify(updatedtasks));
}

    render() {
        return (
            <div>
            <NewTask updateList = {this.updateList}/>
            <AppList tasks={this.state.tasks} remove = {this.removeTask} />
            </div>
    );
    }
}