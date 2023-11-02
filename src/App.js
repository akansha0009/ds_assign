import { Provider } from 'react-redux';
import './App.css';
import Users from './component/Users';
import store from './redux/store';

function App() {
  return (
    <Provider store= {store}>
    <div className="App">
      <h1>Demo Project</h1>
      <Users />
    </div>
    </Provider>
  );
}

export default App;
