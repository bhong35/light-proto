import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { App } from './App';

const indexJSX = (
    <StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </StrictMode>
);

const container = document.getElementById('root');
if (container == null) throw new Error('Failed to find the root element');

createRoot(container).render(indexJSX);