import React, { Component } from 'react'

export default class Book extends Component {

    state = {
        isEditable: false
    }

    changeKeyHandler = (event) => {
        if (event.key === 'Enter') {
            this.setState({
                isEditable: false
            })
        }
    }


    render() {

        let output = this.state.isEditable ? (
            <input
                type="text"
                placeholder="Enter A Name"
                value={this.props.book.name}
                onChange={e =>
                    this.props.changeHandler(e.target.value, this.props.book.id)
                }
                onKeyPress={this.changeKeyHandler.bind(this)}
            />
        ) : (
                <p>{this.props.book.name}</p>
            )


        return (
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {output}
                        <p>
                            <span className="badge badge-primary badge-pill">
                                {this.props.book.price}
                            </span>
                        </p>
                        <p>
                            <span className="mx-3" onClick={() => this.setState({ isEditable: true })} >
                                <i className="fas fa-edit"></i>
                            </span>

                            <span onClick={() => this.props.deleteHandle(this.props.book.id)} >
                                <i className="fas fa-trash-alt"></i>
                            </span>

                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}
