import {Button} from 'antd'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register  from './pages/Register';
import Login from './pages/Login'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
