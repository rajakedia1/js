import React, { Component } from 'react'
import styles from './dialog.scss'

class DialogState {
    constructor() {
        this.trigger = []
    }
    onTrigger(func) {
        this.trigger.push(func)
    }
    openDialog() {
        this.trigger[0]()
    }

}

export const dialogState = new DialogState;

class Dialog extends Component {

    constructor() {
        super()
        dialogState.onTrigger(this.openDialog.bind(this))
    }

    openDialog(e) {
        console.log("Open Dialog", e)
        this.dialogContainer.classList.add(styles['open'])
    }

    closeDialog(e) {
        console.log("Close Dialog", e)
        this.dialogContainer.classList.remove(styles['open'])
    }

    render() {
        return (
            <div className={styles['container']} ref={container => this.dialogContainer = container}>
                <div className={styles['dialog']}>
                    <div className={styles['header']}>
                        Dialog
                        <button onClick={this.closeDialog.bind(this)}>Close</button>
                    </div>
                    <div className={styles['body']}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialog;