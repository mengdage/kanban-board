import React, { Component } from 'react';

class Task extends Component {
  render() {
    return(
      <div className="task-item">
        <div
          onClick={this.props.moveLeft(this.props.task.id)}
        className="task-item-move left">L</div>
        <div className="task-item-content">{this.props.task.content}</div>
        <div
          onClick={this.props.moveRight(this.props.task.id)}
        className="task-item-move right">R</div>
      </div>
    );
  }
}

export default Task;
