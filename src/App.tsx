import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import { UserProvider } from './contexts/userContext';

const App = () => {
  
  return (
    <CookiesProvider>
      <UserProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </UserProvider>
    </CookiesProvider>
  );
}

export default App;