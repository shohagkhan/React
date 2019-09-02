import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        bio: '',

    }

    changeHandler = () => {
        
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Enter You Name</label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="name" id="name"
                        value={this.state.name}
                        onChange={this.changeHandler}
                    />
                </div>
            </form>
        )
    }
}
