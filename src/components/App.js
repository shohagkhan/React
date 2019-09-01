import React, { Component } from 'react'
import Books from './Books/Books';

export default class App extends Component {

  state = {
    books: [
      { name: 'Javascript', price: 100, id: 1 },
      { name: 'React', price: 200, id: 2 },
      { name: 'Angular', price: 300, id: 3 }
    ]
  }

  deleteHandle = (id) => {
    let newBook = this.state.books.filter(book => book.id !== id)
    this.setState({
      books: newBook
    })
  }

  changeHandler = (name, id) => {
    let newBook = this.state.books.map(book => {
      if (id === book.id) {

        return {
          ...book,
          name: name
        }

      }
      return book

    })
    this.setState({
      books: newBook
    })
  }

  render() {
    return (
      <div>
        <Books
          books={this.state.books}
          deleteHandle={this.deleteHandle.bind(this)}
          changeHandler={this.changeHandler.bind(this)} />
      </div>
    )
  }
}

