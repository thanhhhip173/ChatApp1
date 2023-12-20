import './App.css';
import Login from './components/Login';
import { Route, BrowserRouter } from 'react-router-dom';
import ChatRoom from './components/ChatRoom';
import AuthProvider from './Context/AuthProvider';
import { Switch } from 'antd';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route component={Login} />
          <Route component={ChatRoom} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
  
}

export default App;
