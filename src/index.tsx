/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App.tsx';
import 'solid-devtools';
import './index.css';

const root = document.getElementById('root');

render(() => {
    return <App />;
}, root!);
