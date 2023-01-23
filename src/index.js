import App from './App.js';
import Modal from './components/modal/modal.js';
import './index.css';

const $app = document.querySelector('.app');

new Modal({ $target: $app });
new App({ $target: $app });
