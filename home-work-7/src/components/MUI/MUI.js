import React from 'react'
import { Button, dividerClasses } from '@mui/material'

const MUI = () => {
 
  return (
    <div>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
    </div>
      
    
  );
}

 

export default MUI