import React, { PureComponent } from 'react'
import styles from './dairy.scss'

class Entry extends PureComponent {

        render() {
            if(this.props.filter) {
                const {currentMonth, currentYear} = this.props.filter;
                const entryYear = new Date(this.props.entry.date).getFullYear()
                const entryMonth = new Date(this.props.entry.date).getMonth()
                if(currentMonth && parseInt(currentMonth) !== entryMonth + 1) {
                    return null;
                }
                if(currentYear && parseInt(currentYear) !== entryYear) {
                    return null;
                }
            }

            return (
                <div className={styles['entry']}>
                    <div className={styles['title']}>
                        {this.props.entry.title}
                    </div>
                    <div className={styles['date']}>
                        {this.props.entry.date}
                    </div>
                </div>
            )
        }

}

export default Entry;