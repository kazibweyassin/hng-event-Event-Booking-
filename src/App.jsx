import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { TicketForm } from './components/TicketForm';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <TicketForm />
    </BrowserRouter>
  );
}

export default App;
