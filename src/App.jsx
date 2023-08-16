import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free'
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Skills } from './Components/Skills/Skills';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
<>
<Home/>
<About/>
<Skills/>
<Portfolio/>
<Footer/>
</>

  );
}

export default App;
