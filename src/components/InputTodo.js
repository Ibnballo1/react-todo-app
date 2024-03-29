import React, { Component } from 'react'

export default class InputTodo extends Component {
  state = {
    title: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: ""
      })
    } else {
      alert("Please write item");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          onChange={this.onChange}
          className="input-text"
          placeholder="Add Todo..."
          name="title"
          value={this.state.title}
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
