
//components
import Header from './Components/Header/Header';
import Home from './Components/home/Home';
import DetailView from './Components/details/DetailView';
import Cart from './Components/cart/Cart';
import DataProvider from './context/DataProvider';

import { Box } from '@mui/material';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider >
      <BrowserRouter>
        <Header />
        <Box style= {{ marginTop: 65 }}>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<DetailView/>} />
          <Route path='/cart' element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
