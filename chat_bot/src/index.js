import { createRoot } from 'react-dom/client';
import React from 'react';
import IMBot from './IMBot.jsx';	// from local code.
import { Bounce, ToastContainer } from 'react-toastify';
// import IMBot from 'intellylabs-bot'	// form local lib
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(<>
	<ToastContainer position="bottom-right" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick
		rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce} />
	<IMBot />
</>);
