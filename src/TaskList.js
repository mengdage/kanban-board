import React, { Component } from 'react';
import AddTask from './AddTask'
import Task from './Task';

class TaskList extends Component {
  render() {
    const tasks = this.props.tasks.map(task => (
      <li key={task.id}>
        <Task
          moveLeft={this.props.moveLeft}
          moveRight={this.props.moveRight}
          task={task}/>
      </li>
    ));
    return(
      <div className="task-list-container">
        <h2 className={"task-list-header "+this.props.name.toLowerCase()}>{this.props.name}</h2>
        <ul className="task-list">
          {tasks}
        </ul>
        <AddTask addTaskToTheColumn={(content) => this.props.addTask(this.props.name, content)}/>
      </div>

    );
  }
}

export default TaskList;
