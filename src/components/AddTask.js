import React, { Component } from 'react';

class AddTask extends Component {

      state = {
            value: '',
            checked: false,
            date: new Date().toISOString().slice(0, 10),
      }

      handleSubmit = () => {
            const { value, checked, date } = this.state;
            const add = this.props.add(value, checked, date);
            if (add) {
                  this.setState({
                        value: '',
                        checked: false,
                        date: new Date().toISOString().slice(0, 10),
                  })
            }
      }

      handleText = (e) => {
            this.setState({
                  value: e.target.value,
            })
      }

      handleDate = (e) => {
            this.setState({
                  date: e.target.value,
            })
      }

      handleCheck = (e) => {
            this.setState({
                  checked: e.target.checked,
            })
      }
      render() {

            return (
                  <div className="form">
                        <p><input type="text" placeholder="Enter the task name" value={this.state.value} onChange={this.handleText} />
                              <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheck} />
                              <label htmlFor="important">Priority</label></p>

                        <p> <label htmlFor="date">Until when:</label>
                              <input type="date" id="date" value={this.state.date} min="2019-08-05" max="2030-12-31" onChange={this.handleDate} /></p >
                        <p><button onClick={this.handleSubmit}>Add Task</button></p>


                  </div >
            );
      }
}

export default AddTask;