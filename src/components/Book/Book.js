import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {this.props.book.name}
                        <p>
                            <span className="badge badge-primary badge-pill">
                                {this.props.book.price}
                            </span>
                        </p>
                        <p>
                            <span className="mx-3">
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
