import React from 'react'

const Test = (props) => {
    console.log(props)
    const { match, location } = props
    console.log(match)
    console.log(location)
    return (
        <div>
            <h1>Post Id: {match.params.postId}</h1>
            <h2>Path Name: {location.pathname}</h2>
        </div>
    )
}

export default Test
