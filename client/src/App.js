import {
	ThemeProvider,
	CssBaseline,
	createTheme
} from '@mui/material';

import Footer from './components/Footer';

import AppLayout from './pages/AppLayout';

import { Toaster } from 'react-hot-toast';
import { theme } from './settings';

function App() {
	return (
		<ThemeProvider theme={createTheme(theme)}>
			<CssBaseline />
			<Toaster />
			
			<AppLayout />
			<Footer />

		</ThemeProvider>
	);
}

export default App;
