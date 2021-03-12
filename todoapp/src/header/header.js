import { createElement, T } from "../utils/utils";
import styles from './header.scss';

export function createHeader() {
    return createElement('div', [styles['nav']], [
        createElement('div', [styles['title'], styles['tag']], T('Flipkart')),
        createElement('div', [styles['right'], styles['tag']], [
            createElement('div', [styles['user']], T('User')),
            createElement('div', [styles['button']], T('Logout'))
        ]),
    ])
}
