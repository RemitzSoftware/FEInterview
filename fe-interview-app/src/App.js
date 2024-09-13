import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ClientsReport from './components/ClientsReport';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <ClientsReport />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
