import { createRoot } from 'react-dom/client';
import React from 'react';
import IMBot from './IMBot.jsx';	// from local code.
// import IMBot from 'intellylabs-bot'	// form local lib

createRoot(document.getElementById('root')).render(<IMBot />);
