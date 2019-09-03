import React, { Component } from 'react'
const initialState = {
    name: '',
    email: '',
    password: '',
    bio: '',
    country: '',
    gender: '',
    skills: []
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
        if (event.target.type === 'checkbox') {

            if (event.target.checked) {
                this.setState({
                    // Q. Why Full State Called Here?
                    ...this.state,
                    skills: this.state.skills.concat(event.target.value)
                })
            } else {
                this.setState({
                    ...this.state,
                    skills: this.state.skills.filter(skill => skill !== event.target.value)
                })
            }


        } else {
            this.setState({
                // Q. Why Third Bracket?
                [event.target.name]: event.target.value
            })
            console.log(event.target.value)

        }
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.myForm.current.reset()
        this.setState({
            ...initialState,
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
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select className="form-control" name="country" id="country" onChange={this.changeHandler}>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Australia">Australia</option>
                    </select>
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <label htmlFor="gender1">Male</label>
                        <input type="radio" className="form-check-label" name="gender" id="gender1" value="Male" onChange={this.changeHandler} />
                    </div>
                    <div className="form-check form-check-inline">
                        <label htmlFor="gender2">Female</label>
                        <input type="radio" className="form-check-label" name="gender" id="gender2" value="Female" onChange={this.changeHandler} />
                    </div>
                    <div className="form-check form-check-inline">
                        <label htmlFor="gender3">Others</label>
                        <input type="radio" className="form-check-label" name="gender" id="gender3" value="Others" onChange={this.changeHandler} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="HTML" name="skills" value="HTML" onChange={this.changeHandler} />
                        <label className="custom-control-label" htmlFor="HTML">HTML</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="CSS" name="skills" value="CSS" onChange={this.changeHandler} />
                        <label className="custom-control-label" htmlFor="CSS">CSS</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="JavaScript" name="skills" value="JavaScript" onChange={this.changeHandler} />
                        <label className="custom-control-label" htmlFor="JavaScript">JavaScript</label>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form >
        )
    }
}
