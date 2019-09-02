import React, { Component } from 'react'
import axios from 'axios'

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
        let { posts } = this.state
        console.log(posts)

        if (this.state.posts.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className='container' >
                    <ul className='list-group' >
                        {posts.map(post => <li key={post.id} className='list-group-item'>{post.id}. {post.title}</li>)}
                    </ul>
                </div>
            )
        }
    }
}
