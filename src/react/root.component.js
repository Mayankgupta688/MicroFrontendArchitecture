import React from 'react'
import e from '../event-bus'

export default class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      employee: null
    }

    this.messageHandler = this.messageHandler.bind(this)
  }

  componentDidMount() {
    e.on('received', this.messageHandler)
  }

  componentWillUnmount() {
    e.off('received', this.messageHandler)
  }

  messageHandler(message) {
    this.setState({
      employee: message.employee
    })
  }

  sendMessage() {
    e.emit('message', { text: 'Hello from React 👋' })
  }

  render() {

    if(this.state.employee != null) {
      var selectedEmployee = this.state.employee;
      return (
        <div>
          <h1>Employee Name: {selectedEmployee.name}</h1>
          <div>Employee Identification: {selectedEmployee.id}</div>
        </div>
      )
    } else {
      return (
        <h1>Employee Not Selected</h1>
      )
    }
  }
}
