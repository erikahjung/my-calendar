import React from 'react';
import { createRoot } from 'react-dom/client';
import { Calendar } from './components/Calendar.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Calendar/>);