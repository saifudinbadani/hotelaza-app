import "./App.css";
import { HomePage } from './components/Homepage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App home-page-body bg-clr">
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;
