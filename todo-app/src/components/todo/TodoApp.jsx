import React, {Component} from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: ''
        }
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handlerChange}/>
                Password: <input type="password" name={this.state.password} onChange={this.handlerChange}/>
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp