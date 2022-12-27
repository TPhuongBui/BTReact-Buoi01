import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className='mainBody container mt-5'>
                <h1>A warm welcome!</h1>
                <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                <button className='btn btn-primary btn-lg'>Call to action</button>
            </div>
        )
    }
}
