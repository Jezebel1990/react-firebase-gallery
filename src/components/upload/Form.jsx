import { Add } from '@mui/icons-material'
import { Fab, Input } from '@mui/material'
import React from 'react';
import { useRef } from 'react';

const Form = () => {
 const fileRef = useRef();
 const handleClick = () => {
    fileRef.current.click();
 };

  return (
    <form>
      <Input type="file" multiple sx={{display:'none'}} inputRef={fileRef} />
      <Fab color="secondary" aria-label='add' onClick={handleClick} >
        <Add fontSize='large'/>
      </Fab>
    </form>
  );
};

export default Form;
