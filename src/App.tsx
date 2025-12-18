import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from "./routing"; // Make sure this import path is correct
import NavbarComponent from './components/layout/navbar/NavbarComponent';

function App() {
  return (
    <>
      <Router>
        <NavbarComponent/>
        <Routes>
          {routes.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              element={route.element} 
            />
          ))}
        </Routes>
      </Router>
    </>
  )
}

export default App