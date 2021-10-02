import React ,{useState}from "react";
import { Card} from "@mui/material";
import useStyles from './Formstyles';
import { TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
const SpinnerData =  [
    {
      value: '1',
      label: '1',
    },
    {
      value: 'EUR',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
      value: '4',
      label: '4',
    },
  ];
  
function Form() {
    const [Item, changeItem] = React.useState('1');
    const classes = useStyles();
    return ( 
    <div className={classes.CenterFlex}>
       <Card sx={{width:'700px',backgroundColor:'whitesmoke',borderRadius:'20px',padding:'20px',border:'2px solid cornflowerblue'}}>
        <div>
        <TextField 
          sx={{width:'60%',marginLeft:'125px'}}
          required
          id="outlined-select-currency"
          select
          label="Select"
          value={Item}
          helperText="Add any thing you want"//edit this as per requirement
        >
          {SpinnerData.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField sx={{marginLeft:'125px',marginTop:'30px',width:'60%'}}id="outlined-basic" label="input 1" variant="outlined" required/>
        <TextField sx={{marginLeft:'125px',width:'60%',marginTop:'30px'}}id="outlined-basic" label="input 2" variant="outlined" required/>
        <TextField sx={{marginLeft:'125px',width:'60%',marginTop:'30px'}}id="outlined-basic" label="input 3" variant="outlined"  required/>
        <TextField sx={{marginLeft:'125px',width:'60%',marginTop:'30px'}}id="outlined-basic" label="" variant="outlined" type={'file'} required/>
        <div className={classes.CenterFlex}>
        <Button variant={'contained'} sx={{margin:'15px'}} color={'primary'} type={'submit'}>Upload</Button>
        <Button variant={'outlined'} sx={{margin:'15px'}} color={'primary'}>clear</Button>
        </div>
        
        </div>
        
    </Card>
    </div>
   
        
    );
}

export default Form;