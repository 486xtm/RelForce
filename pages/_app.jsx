import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import DefaultLayout from '../components/layout/DefaultLayout';
import UseScrollToTop from '../hooks/useScrollToTop';
import '@fontsource/open-sans';
import '@fontsource/orbitron';

// Import Open Sans font

function MyApp({ Component, pageProps }) {
	return (
		<AnimatePresence>
			<div className={`transition duration-300`}>
				<DefaultLayout>
					<Component {...pageProps} />
				</DefaultLayout>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default MyApp;