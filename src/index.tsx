import * as React from 'react';
import {App} from './components/App';
import ReactDOM = require("react-dom");

const root: HTMLDivElement = document.getElementById('container') as HTMLDivElement;

const renderApp: () => void = () => {
    ReactDOM.render(<App />, root);
}

renderApp();