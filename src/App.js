import Footer from './components/footer';
import Grid from './components/grid';
import Hero from './components/hero';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <Hero/>
      <Grid/>
      <Footer/>
    </div>
  );
}

export default App;
