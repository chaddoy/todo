import React from 'react';

class AddTask extends React.Component {
  state = {
    taskName: '',
  };

  onTaskChange = (item) => {
    this.setState({
      taskName: item.target.value
    });
  }

  render () {
    return (
      <div>
        <label htmlFor="add-task">Task</label>
        <input type="What do you need to do?" id="add-task" onChange={this.onTaskChange} />
        <br/>
        <button onClick={() => this.props.onSaveItem(this.state.taskName)}>Save Item</button>
      </div>
    )
  }
}

export default AddTask;