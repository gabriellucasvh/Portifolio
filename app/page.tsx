"use client"

import { useEffect } from 'react';
import './globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import Inicio from '@/src/components/Inicio';
import Servicos from '@/src/components/Servicos';
import Tecnologias from '@/src/components/Tecnologias';
import Projetos from '@/src/components/Projetos';
import Contato from '@/src/components/Contato';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      delay: 100,
      easing: 'ease-in-out-quart',
    });

  }, []);

  return (
    <div className='bg-gradient-to-b from-blue-950/90 via-black to-blue-950/90 font-sans text-white'>
      <Navbar />
      <Inicio />
      <Servicos />
      <Tecnologias />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;