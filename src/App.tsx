import { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { StatsSection } from './components/StatsSection/StatsSection';
import { Features } from './components/Features/Features';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { Footer } from './components/Footer/Footer';
import './index.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <div className="reveal active">
          <Hero />
        </div>
        <div className="reveal">
          <StatsSection />
        </div>
        <div className="reveal">
          <Features />
        </div>
        <div className="reveal"><HowItWorks /></div>
      </main>
      <div className="reveal"><Footer /></div>
    </div>
  );
}

export default App;
