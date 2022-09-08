import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Error from './components/Error/Error';
import Layout from './components/Layout/Layout';
import MainPage from './pages/main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
