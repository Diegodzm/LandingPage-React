import Navbar from './components/Navbar';
import './App.css';
import WarmWelcome from './components/WarmWelcome';
import CardTitle from './components/CardTitle';
import Copyright from './components/Copyright';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <WarmWelcome />
        <div className='row mt-3 mb-3'>
          <div className='col-3'><CardTitle /></div>
          <div className='col-3 '><CardTitle /></div>
          <div className='col-3 '><CardTitle /></div>
          <div className='col-3 '><CardTitle /></div>
        </div>
      </div>

      <Copyright/>
    </div>

  )
}

export default App;
