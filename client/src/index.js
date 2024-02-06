import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider} from '@chakra-ui/react'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>   
    </React.StrictMode>
);

reportWebVitals();
