import React from 'react';
import Nav from "./components/Nav";
import ImagesList from "./components/imagesList/ImagesList";
import Upload from "./components/upload/Upload";
import { Container } from "@mui/material";
import AuthContext from './context/AuthContext';
import Modal from './components/Modal';
import Loading from './components/Loading';
import MainNotification from './components/MainNotification';

function App() {
 
  return (
  <Container maxWidth="lg" sx={{ textAlign: 'center', mt: '3rem' }}> 
  <AuthContext>
    <Loading />
    <Modal />
    <MainNotification />
    <Nav />
    <Upload />
    <ImagesList />
  </AuthContext>
   </Container>
  );
}

export default App;
