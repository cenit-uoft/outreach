import './styles.css';
import { AppProps } from 'next/app';
import { BibProvider } from '@/contexts/BibContext';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css';                
import 'primeicons/primeicons.css'; 

// This default export is required in a new `pages/_app.tsx` file.
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <BibProvider>
            <Component {...pageProps} />
        </BibProvider>

    );
}
