import React from 'react'

const Home = (props) => {
    return (
        <div>
            <h2>I am Home</h2>
            <p>This page was created by {props.name}</p>
        </div>
    )
}

export default Home
