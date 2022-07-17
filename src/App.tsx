import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Layout from './pages/Layout';
import Page404 from './pages/Page404';

const App:React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:name" element={<DetailPage />} />
          <Route path="/404" element={<Page404 />} />
        </Route>
      </Routes>
  );
};

export default App;
