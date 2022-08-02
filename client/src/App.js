import {Button} from 'antd'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register  from './pages/Register';
import Login from './pages/Login'
import {Toaster} from 'react-hot-toast'
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Home />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
