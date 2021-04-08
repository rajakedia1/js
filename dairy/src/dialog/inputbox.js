import React, { Component } from 'react'
import storageUtils from '../utils/storage';
import styles from './inputbox.scss'

class InputBox extends Component {
    constructor(props) {
        super(props)
    }

    addEntry() {
        const title = this.titleRef.value;
        const date = this.dateRef.value;
        storageUtils.addEntries({title, date})
        this.props.addEntry()
    }

    render() {
        return (
            <div className={styles['input-body']}>
                <div className={styles['input']}>
                    <input type={'text'} placeholder={'Enter Title'} ref={titleRef => this.titleRef = titleRef}></input>
                    <input type={'date'} ref={dateRef => this.dateRef = dateRef}></input>
                    <button onClick={this.addEntry.bind(this)}>Add</button>
                </div>
            </div>
        )
    }

}

export default InputBox