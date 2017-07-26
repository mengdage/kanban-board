import React, { Component } from 'react';

class AddTask extends Component {
  addTask() {
    var content = prompt('What\'s the content?');
    console.log(content);
    this.props.addTaskToTheColumn(content);
  }
  render() {
    return(
      <div className="add-task">
        <button onClick={() => this.addTask()} className="add-task-btn">Add a card</button>
      </div>
    );
  }
}

export default AddTask;
