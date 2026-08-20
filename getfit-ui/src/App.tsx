import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginPage from '@/pages/loginpage'
import RegisterPage from '@/pages/registerpage'
import Home from '@/pages/homepage'
import {Meal} from '@/pages/mealpage'
import {Drink} from '@/pages/drinkpage'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />        
        <Route path="/meals" element={<Meal />} />
        <Route path="/drinks" element={<Drink />} /> 
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
