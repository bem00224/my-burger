import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/pages/login/LoginPage';
import ErrorPage from './components/pages/error/ErrorPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' exact element ={<LoginPage />} />
      <Route path='*' element = {<ErrorPage/> } />
    </Routes>
    </>
  );
}

export default App;
