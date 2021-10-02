import React from "react";
import { Avatar, Card, IconButton, Link, Typography } from "@mui/material";
import useStyles from './styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ReplyIcon from '@mui/icons-material/Reply';
import ShareIcon from '@mui/icons-material/Share';


const ComBox = () =>{
    const classes = useStyles();
    return(
        <div className={classes.CenterFlex}>
            <Card sx={{width:"800px",color:'whitesmoke' ,borderRadius:'20px'}}>
                <div className={classes.SpaceFlex}>
                <Avatar sx={{width:'50px',height:'50px',margin:"10px"}} src="" alt="profile_img"/>
                <Link underline={"hover"} sx={{marginRight:'600px',fontSize:'17px',color:'blue'}} >{`profile_name  ${"  .12h"}`}</Link>
                </div>
                <div className={classes.CenterFlex}>
                <Typography variant={'p'} sx={{fontSize:'17px',color:'black',padding:'20px'}} >
                Congratulations Al!
                  Keep up the great work!
                </Typography>
                </div>
                <div className={classes.CenterFlex}>
                    <IconButton sx={{marginRight:'20px',color:'blue'}}><ArrowUpwardIcon/>{2}</IconButton>
                    <IconButton sx={{marginRight:'20px',color:'blue'}}><ArrowDownwardIcon/></IconButton>
                    <IconButton sx={{marginRight:'20px',color:'blue'}}><ReplyIcon/></IconButton>
                    <IconButton sx={{marginRight:'20px',color:'blue'}}><ShareIcon/></IconButton>

                </div>
           
             </Card>
        </div>
             
            
    );

}
export default ComBox;