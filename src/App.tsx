import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NavbarPhone from './components/NavbarPhone';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Tecnologias from './pages/Tecnologias';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import { ThemeProvider } from "./components/theme-provider";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      delay: 100,
      easing: 'ease-in-out-quart',
    });
    
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Home />
      <Servicos />
      <Tecnologias />
      <Projetos />
      <Contato />
      <NavbarPhone />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
