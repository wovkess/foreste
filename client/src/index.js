import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StyleColorMode from './App'
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, ColorModeScript, Icon } from '@chakra-ui/react'
import theme from './theme'
import Ico from './App'


const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>   
    </React.StrictMode>

);

reportWebVitals();
