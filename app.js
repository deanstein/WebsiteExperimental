import Header from './ui-modules/header.js';
//import Footer from './user.js';

const appContainer = document.createElement('div');
appContainer.id = 'appContainer';
appContainer.className = 'appContainer'
window.document.body.appendChild(appContainer);

let header = new Header('Test', 'Test');
appContainer.appendChild(header.element);

// let footer = new Footer();
// document.appendChild(footer);