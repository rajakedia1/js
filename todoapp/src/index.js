import { createHeader } from "./header/header";
import { createElement, updateNode } from "./utils/utils";
import './index.scss';

(function mainLayout() {
    updateNode('main', createElement('div', ['container'], createHeader()))
})()