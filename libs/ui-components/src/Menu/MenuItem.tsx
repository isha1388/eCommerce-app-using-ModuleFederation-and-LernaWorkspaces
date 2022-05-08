import React from 'react';
import MenuItem, {MenuItemProps} from '@mui/material/MenuItem';

const MuiMenuItem = (props: MenuItemProps): JSX.Element => {
  return <MenuItem {...props} />
}

export default MuiMenuItem;