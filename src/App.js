import Deprem from './api/deprem'
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>Son 500 Deprem Sırasıyla Listelenmektedir.</h1>
      <h2>Not: En yeni depremden, en eski depreme doğru sıralanmıştır.</h2>
      <hr />
        <Deprem />
    </div>
  );
}

export default App;
