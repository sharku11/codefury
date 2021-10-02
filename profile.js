import Share from "@mui/icons-material/Share";
import { Avatar, Card, Icon, IconButton, Link } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import useStyles from './profilestyle';

function Profile() {
    const classes = useStyles();
    return ( <div className={classes.CenterFlex}>
         <Card sx={{width:"600px",color:'whitesmoke' ,borderRadius:'10px',border:'3px solid cornflowerblue'}}>
         <div className={classes.SpaceFlex}>
         <Avatar sx={{margin:'10px' ,width:'80px',height:'80px',border:'3px solid cornflowerblue'}} src="" alt="profile_img"/>
         <Typography variant={'h5'} sx={{color:'cornflowerblue',padding:'20px',marginRight:'300px',fontWeight:'600'}} >
          {"Profile_Name"}
        </Typography>
         </div>
         <Typography variant={'h6'} sx={{marginLeft:'170px',color:'black',padding:'5px',marginBottom:'10px'}} >
          {"Courses I'am Intrested In"}
        </Typography>
        <div className={classes.CenterFlex}>
        <Typography variant={'h6'} sx={{color:'black',padding:'10px',marginRight:'30px',backgroundColor:'cornflowerblue',borderRadius:'5px'}} >
          {"Udemy"}
        </Typography> <Typography variant={'h6'} sx={{color:'black',padding:'10px 5px',marginRight:'30px',backgroundColor:'cornflowerblue',borderRadius:'5px'}} >
          {"Coursera"}
        </Typography>
        <Typography variant={'h6'} sx={{color:'black',padding:'10px',marginRight:'30px',backgroundColor:'cornflowerblue',borderRadius:'5px'}} >
          {"intrested course"}
        </Typography>
        </div>
        <div className={classes.CenterFlex}>
            <Link sx={{fontSize:'18px',padding:'10px',marginRight:'100px'}} underline={'hover'} href={'#'}>Instagram</Link>
            <IconButton sx={{color:"cornflowerblue"}}><Share/></IconButton>
        </div>
        
         
         </Card>
    </div>
       
     );
}

export default Profile;