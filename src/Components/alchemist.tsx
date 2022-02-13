import React, { Component } from 'react'

interface AlchemistProps {
    name: string;
}

interface AlchemistState {
    name: string;
}

export default class Alchemist extends Component<AlchemistProps, AlchemistState> {
    render() {
        return (
            <div>
                <h1>What can I brew for you?</h1>
                <div>
                    {this.props.name}
                </div>
            </div>
        )
    }
}