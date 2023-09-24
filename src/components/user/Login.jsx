import { Button, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import EmailField from "./inputs/EmailField";
import PasswordField from './inputs/PasswordField';
import SubmitButton from './inputs/SubmitButton';
import { Google } from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
 const emailRef = useRef();
 const passwordRef = useRef();
 const confirmPasswordRef = useRef();

 const [isRegister, setIsRegister] = useState(false);
 const {modal, setModal, signUp, login, loginWithGoogle, setAlert, setLoading} = useAuth();


 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  if (isRegister) {
    const confirmPassword = confirmPasswordRef.current.value;
    try {
      if (password !== confirmPassword) {
        throw new Error("Tente outra Senha!");
      }
      await signUp(email, password);
      setModal({ ...modal, isOpen: false });
    } catch (error) {
      setAlert({
        isAlert: true,
        severity: 'error',
        message: error.message,
        timeout: 5000,
        location: 'modal',
      });
      console.log(error);
    }
  } else {
    try {
      await login(email, password);
      setModal({ ...modal, isOpen: false });
    } catch (error) {
      setAlert({
        isAlert: true,
        severity: 'error',
        message: error.message,
        timeout: 5000,
        location: 'modal',
      });
      console.log(error);
    }
  }
  setLoading(false);
};

const handleGoogleLogin = async () => {
  try {
    await loginWithGoogle();
    setModal({ ...modal, isOpen: false });
  } catch (error) {
    setAlert({
      isAlert: true,
      severity: 'error',
      message: error.message,
      timeout: 5000,
      location: 'modal',
    });
    console.log(error);
  }
};


 useEffect(()=>{
  if(isRegister){
   setModal({...modal, title: 'Register'});
  }else{
    setModal({...modal, title: 'Login'});

  }
 }, [isRegister]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
            <DialogContentText>
                Entre com seu email e senha:
            </DialogContentText>
            <EmailField  {...{ emailRef}}/>
            <PasswordField  {...{ passwordRef }}/>
            {isRegister && (
              <PasswordField 
              {...{
               passwordRef: confirmPasswordRef,
               id: 'confirmPassword',
               label: 'Confirmar a Senha',
              }}
              />
            )}
        </DialogContent>
        <DialogActions sx={{justifyContent:"space-between", px:"19px"}}>
          <Button size="small">Esqueceu a Senha?</Button>
          <SubmitButton />
        </DialogActions>
      </form>
      <DialogActions sx={{justifyContent:'left', p:'5px 24px'}}>
        {isRegister
        ? 'Você já tem uma conta? Entrar agora'
        : "Não tem uma conta? Criar uma conta"}
        <Button onClick={()=> setIsRegister(!isRegister)}>
          {isRegister ? 'Login' : 'Register'}
        </Button>
<DialogActions sx={{justifyContent:"center", py:"24px"}}>
   <Button
   variant='outlined'
   startIcon={<Google />}
   onClick={handleGoogleLogin}
   >
    Entrar com Google
   </Button>
</DialogActions>

      </DialogActions>
    </>
  )
}

export default Login;
