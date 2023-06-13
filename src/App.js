import './App.css';
import { Header } from './components/header/Header';
import { FirstSection } from './components/firstSection/FirstSection';
import { Testimonial } from './components/testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <Testimonial />
    </div>
  );
}

export default App;
