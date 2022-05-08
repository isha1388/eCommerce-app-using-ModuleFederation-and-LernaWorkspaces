import React from 'react';
import TextField, {TextFieldProps} from '@mui/material/TextField';

const MuiTextField = (props: TextFieldProps): JSX.Element => {
  return <TextField {...props} />
}

export default MuiTextField;