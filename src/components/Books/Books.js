import React, { Component } from 'react'
import Book from '../Book/Book';

export default class Books extends Component {
    render() {
        return (
            <div>
                {this.props.books.map((book, i) => {
                    return (
                        <Book
                            book={book} key={i}
                            deleteHandle={this.props.deleteHandle}
                            changeHandler={this.props.changeHandler}
                        />
                    )
                })}
            </div>
        )
    }
}
