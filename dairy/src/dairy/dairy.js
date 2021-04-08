import React, { Component } from 'react'
import storageUtils from '../utils/storage'
import Entry from './entry'


class Dairy extends Component {

    constructor(props) {
        super(props)
        const {year, month} = props.match.params;
        this.state = {
            currentYear: year,
            currentMonth: month
        }
    }

    render() {
        return this.props.entries.map((entry, index) => <Entry entry={entry} key={index} filter={this.state}/>)
    }
}

export default Dairy;