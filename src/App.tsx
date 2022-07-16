import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Layout from './pages/Layout';

const App:React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:name" element={<DetailPage />} />
        </Route>
      </Routes>
  );
};

export default App;
