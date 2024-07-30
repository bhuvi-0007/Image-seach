import React from 'react';
import { Button as MUIButton } from '@mui/material';

const Button = ({ children, ...props }) => (
  <MUIButton {...props}>
    {children}
  </MUIButton>
);

export default Button;
