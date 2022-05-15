import { useState, useCallback } from 'react';
import NewsList from './components/NewList';
import Categories from './components/Categories';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import React from 'react';
// const App = () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback((category) => setCategory(category), []);

//   return (
//     <>
//       <Categories category={category} onSelect={onSelect}></Categories>
//       <NewsList category={category}></NewsList>
//     </>
//   );
// };

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
