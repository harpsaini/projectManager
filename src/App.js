
import ToDo from './Components/ToDo.js';
import './App.css';
import InProgress from './Components/InProgress'
import Completed from './Components/Completed.js'
 
function App() {
  return (
    <div className="App">
      <header>
        <h1>Project Manager</h1>
      </header>
      <main className='mainscreen'>   
        {
          <ToDo/>
        }
        {
          <InProgress/>
        }
        {
          <Completed/>
        }
      </main>
    </div>
  )
}

export default App;
