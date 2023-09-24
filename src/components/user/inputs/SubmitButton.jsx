import { Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import React from 'react'

const SubmitButton = () => {
  return (
  <Button variant="contained" endIcon={<Send />} type="submit">
    Enviar
  </Button>
  )
}

export default SubmitButton;
