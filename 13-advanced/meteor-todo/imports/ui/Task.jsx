import React, { Component } from 'react';

import { Tasks } from '../api/tasks';

export default class Task extends Component {
  toggleComplete() {
    Tasks.update(this.props.task._id, {
      $set: { complete: !this.props.task.complete }
    });
  }

  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  }

  render() {
    const taskClassName = this.props.task.complete ? 'checked' : '';
    return (
      <li className={ taskClassName }>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>
        <input
          type="checkbox"
          readOnly
          checked={!! this.props.task.complete}
          onClick={this.toggleComplete.bind(this)}
        />
        <span className="text">
          {this.props.task.text}
        </span>
      </li>
    );
  }
}
