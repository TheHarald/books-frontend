import React from 'react';
import { Routes } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components'
import BookPage from './pages/BookPage/BookPage';
import MainPage from './pages/MainPage/MainPage';

const StyledApp = styled.div`
  display: flex;
  max-width: 1200px;
  padding: 20px;
`

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {

  return (
    <BrowserRouter>
      <StyledAppContainer>
        <StyledApp>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/books/:id' element={<BookPage />} />
          </Routes>
        </StyledApp>
      </StyledAppContainer>
    </BrowserRouter>
  );
}

export default App;
