import './App.css';
import Deprem from './api/deprem'

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Son 500 Deprem Sırasıyla Listelenmektedir.</h1>
      <hr/>
        <Deprem />
    </div>
  );
}

export default App;
