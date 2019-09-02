import React, { Component } from 'react'
import axios from 'axios'
import PostForm from './form/PostForm';
export default class App extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        // let { posts } = this.state
        if (this.state.posts.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='container' >
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2">
                            <PostForm />
                        </div>
                    </div>
                </div>
            )
        }
    }
}