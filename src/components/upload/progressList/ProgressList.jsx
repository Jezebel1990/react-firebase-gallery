import React from 'react';
import ProgressItem from './ProgressItem';
import { ImageList } from '@mui/material';

const ProgressList = ({ files}) => {
  return (
   <ImageList rowHeight={200} cols={4}>
    {files.map((file, index) => (
    <ProgressItem file={file} key={index} />
    ))}
   </ImageList>
  );
};

export default ProgressList
