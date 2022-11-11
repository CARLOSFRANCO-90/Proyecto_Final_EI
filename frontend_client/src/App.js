import './App.scss';
// import { Alert, Card, DatePicker } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import projectRoutes from './config/routes';
function App() {
  // const prueba_fecha = (date, dateString) => console.log(date, dateString);
  return (
    <BrowserRouter>
      <Routes>
        {projectRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component/>
              </route.layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
  }

export default App;