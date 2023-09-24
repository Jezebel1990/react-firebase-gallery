import { Send } from '@mui/icons-material';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { deleteUser } from 'firebase/auth';
import { useAuth } from '../../../context/AuthContext';
import deleteUserFiles from '../../../firebase/deleteUserFiles';

const DeleteAccount = () => {
  const { currentUser, setLoading, setAlert, setModal, modal } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await deleteUserFiles('gallery', currentUser);
      await deleteUser(currentUser);
      setModal({ ...modal, isOpen: false });
      setAlert({
        isAlert: true,
        severity: 'success',
        message: 'Your account has been deleted',
        timeout: 8000,
        location: 'main',
      });
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
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogContent dividers>
        <DialogContentText>
        Tem certeza de que deseja excluir sua conta? Esta ação irá excluir
          todos os seus arquivos e registros.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" endIcon={<Send />} type="submit">
          Confirmar
        </Button>
      </DialogActions>
    </form>
  );
};

export default DeleteAccount;