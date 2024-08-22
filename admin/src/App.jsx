
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Users from './pages/Users'
import BookingStatus from './pages/BookingStatus'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout/>} >
          <Route path='/' element={<Users/>} />
          <Route path='/booking-status' element={<BookingStatus/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
