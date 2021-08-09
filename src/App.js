import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ClosingHistory from './Pages/ClosingHistory';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MainPage } />
        <Route path="history" component={ ClosingHistory }/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
