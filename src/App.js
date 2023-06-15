import './App.css';
import { Header } from './components/header/Header';
import { FirstSection } from './components/firstSection/FirstSection';
import { Testimonial } from './components/testimonial/Testimonial';
import { Projects } from './components/projects/Projects';
import { Footer } from './components/footer/Footer';
import 'aos/dist/aos.css';


function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <Testimonial />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
