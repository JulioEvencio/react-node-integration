import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';

import Home from './pages/home/Home';
import News from './pages/noticia/News';
import NotFound from './components/notfound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/news/:slug' element={<News />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App