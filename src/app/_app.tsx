'use client'; 
import ThemeToggleButton from './component/ThemeToogleButton';
import { ThemeProvider } from './context/theme-context'; 
import Navbar from './component/ThemeToogleButton';

// Define a type for the pageProps, here we use Record<string, unknown> as a placeholder
type AppProps = {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>; // You can refine this further if you know the exact structure
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navbar />
      <ThemeToggleButton />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
