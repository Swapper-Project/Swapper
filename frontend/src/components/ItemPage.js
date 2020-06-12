import React, { Component } from 'react'
var id = null;

class ItemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {id: -1}
    }

    componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        this.setState({id: params.get('id')})
    }

    render() {
        return (
            <div>
                <h1>Item page reached for item with ID: {this.state.id}</h1>
            </div>
        )
    }
}

export default ItemPage;

