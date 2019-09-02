import React, { Component } from 'react'
const initialState = {
    name: '',
    email: '',
    password: '',
    bio: ''
}
export default class PostForm extends Component {
    constructor(props) {
        super(props)
        this.myForm = React.createRef()
    }
    state = {
        ...initialState
    }
    changeHandler = (event) => {
        this.setState({
            // Q. Why Third Bracket
            [event.target.name]: event.target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.myForm.current.reset()
        this.setState({
            ...initialState,
            // email: "test@gmail.com" I just create it only for test perpose
        })
    }
    render() {
        return (
            <form ref={this.myForm} onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Enter Your Name</label>
                    <input className="form-control" type="text" placeholder="Enter Name" name="name" id="name" value={this.state.name} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Enter Your email</label>
                    <input className="form-control" type="email" placeholder="Enter email" name="email" id="email" value={this.state.email} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Enter Your password</label>
                    <input className="form-control" type="text" placeholder="Enter password" name="password" id="password" value={this.state.password} onChange={this.changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Enter Your bio</label>
                    <textarea className="form-control" type="text" placeholder="Enter bio" name="bio" id="bio" value={this.state.bio} onChange={this.changeHandler} />
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        )
    }
}
