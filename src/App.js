import Deprem from './api/deprem'
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Son 500 Deprem Sırasıyla Listelenmektedir.</h1>
      <hr/>
        <Deprem />
    </div>
  );
}

export default App;
