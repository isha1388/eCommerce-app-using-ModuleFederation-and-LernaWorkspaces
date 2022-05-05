import React from 'react';
import Card, {CardProps} from '@mui/material/Card';

const MuiCard = (props: CardProps): JSX.Element => {
  return <Card {...props} />
}

export default MuiCard;