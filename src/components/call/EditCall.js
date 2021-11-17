import React, { Component } from 'react';
import axios from 'axios';

class EditCall extends Component {
  state = {
    topic: this.props.theCalltoEdit.topic, 
    date: this.props.theCalltoEdit.date,
    amountOfTime: this.props.theCalltoEdit.amountOfTime
  }
  
  handleFormSubmit = (event) => {
    const topic = this.state.topic;
    const date = this.state.date;
    const amountOfTime = this.state.amountOfTime;

    event.preventDefault();

    axios.put(`${process.env.REACT_APP_API_URL}/edit-call/${this.props.theCalltoEdit?._id}`, { topic, date, amountOfTime }, { withCredentials: true })
    .then( () => {
      // Use the passed down api call to render the updated call data
        this.props.refreshCallList();   
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
}

  render(){
    return (
      <div>
        <hr />
        <h3>Edit Form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Topic:</label>
          <input type="text" name="topic" value={this.state.topic} onChange={e => this.handleChange(e)} />
          <label>Date:</label>
          <input type="date" name="date" value={this.state.date} onChange={e => this.handleChange(e)} />
          <label>amountOfTime:</label>
          <input type="number" name="amountOfTime" value={this.state.amountOfTime} onChange={e => this.handleChange(e)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditCall;