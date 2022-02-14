import React, { Component } from 'react'
import data from '../data.json'

interface AlchemistProps {
    name: string;
}

interface AlchemistState {
    name: string;
}

export default class Alchemist extends Component<AlchemistProps, AlchemistState> {
    render() {
        console.log(data);
        return (
            <div>
                <h1>What can I brew for you?</h1>
                <div>
                    {this.props.name}
                </div>
                <ul>
                    {data.map(item =>
                        <li>
                            <div>
                                {item.name}
                            </div>
                            <div>
                                {item.email}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}