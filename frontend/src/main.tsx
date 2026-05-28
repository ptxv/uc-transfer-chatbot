import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './App.tsx';
import ChatPage from './chatPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/chat" element={<ChatPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
