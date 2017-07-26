import React, { Component } from 'react';
import TaskList from './TaskList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      tasks: []
    };
  }

  componentDidMount() {
    this.setState({
      tasks: data
    });
  }

  addTask(columnName, content) {
    const newTask = {
      id: Math.random().toString(36).substr(-4),
      content: content,
      column: columnName
    };
    const newTasks = Array.from(this.state.tasks);
    newTasks.push(newTask);
    this.setState({
      tasks: newTasks
    });
    console.log(`add task (${columnName} ${content}) successfully!`);
  }

  moveTo(newColumnName, taskId) {
    if(!newColumnName) {
      return;
    }
    
    const newTasks = Array.from(this.state.tasks);
    newTasks.forEach(task => {
      if(task.id === taskId) {
        task.column = newColumnName;
      }
    });

    this.setState({
      tasks: newTasks
    });
  }

  render() {
    return (
      <div className="app">
        <TaskList name="Column1"
          moveLeft={(taskId)=>this.moveTo('', taskId)}
          moveRight={(taskId)=>this.moveTo('Column2', taskId)}
          addTask={(columnName, content) => this.addTask(columnName, content)}
          tasks={this.state.tasks.filter(task => task.column === 'Column1')}
        />
        <TaskList name="Column2"
          moveLeft={(taskId)=>this.moveTo('Column1', taskId)}
          moveRight={(taskId)=>this.moveTo('Column3', taskId)}
          addTask={(columnName, content) => this.addTask(columnName, content)}
          tasks={this.state.tasks.filter(task => task.column === 'Column2')}
        />
        <TaskList name="Column3"
          moveLeft={(taskId)=>this.moveTo('Column2', taskId)}
          moveRight={(taskId)=>this.moveTo('Column4', taskId)}
          addTask={(columnName, content) => this.addTask(columnName, content)}
          tasks={this.state.tasks.filter(task => task.column === 'Column3')}
        />
        <TaskList name="Column4"
          moveLeft={(taskId)=>this.moveTo('Column3', taskId)}
          moveRight={(taskId)=>this.moveTo('', taskId)}
          addTask={(columnName, content) => this.addTask(columnName, content)}
          tasks={this.state.tasks.filter(task => task.column === 'Column4')}
        />
      </div>
    );
  }
}

const data =[
  {
    id: '0001',
    content: 'taks1',
    column: 'Column1'
  },
  {
    id: '0002',
    content: 'taks2',
    column: 'Column1'
  },
  {
    id: '0003',
    content: 'taks3',
    column: 'Column2'
  },
  {
    id: '0004',
    content: 'taks4',
    column: 'Column2'
  },
  {
    id: '0005',
    content: 'taks5',
    column: 'Column3'
  },
  {
    id: '0006',
    content: 'taks6',
    column: 'Column3'
  },
  {
    id: '0007',
    content: 'taks7',
    column: 'Column4'
  },
  {
    id: '0008',
    content: 'taks8',
    column: 'Column4'
  }
]

export default App;
