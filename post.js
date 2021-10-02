import React from "react";
import { Button, Card, IconButton, Link, Typography } from "@mui/material";
import useStyles from './postStyle';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { TextField } from "@mui/material";
import ComBox from "./ComBox";



const Post = () =>{
    const classes = useStyles();
return(
    <>
    <div className={classes.CenterFlex}>
        <Card sx={{width:"800px",color:'whitesmoke' ,borderRadius:'10px'}}>
            <div className={classes.SpaceFlex}>
        <div className={classes.Logo_left}>
          <IconButton sx={{marginLeft:'12px',color:'blue'}}><ArrowUpwardIcon/>{2}</IconButton>
          <IconButton sx={{marginLeft:'0px',color:'blue'}}><ArrowDownwardIcon/></IconButton>
          </div>
          <div className={classes.Head_text}>
              <Link>{`${"category__"}  ${"PostedBy__"} ${"time__"}`}</Link>
          </div>
          
        </div>
        <div className={classes.CenterFlex}>
          <Typography variant={'h5'} sx={{fontSize:'17px',color:'black',padding:'20px',marginTop:'-100px'}} >
          Thank you for helping me reach one million sign ups: Use code OCT2021FREE to sign up for the "Automate the Boring Stuff with Python" online course.
                </Typography>
          </div>
          <div className={classes.CenterFlex}>
          <Typography variant={'p'} sx={{fontSize:'17px',color:'black',padding:'20px',marginTop:'-30px'}} >
          Thank you for helping me reach one million sign ups: Use code OCT2021FREE to sign up for the "Automate the Boring Stuff with Python" online course.
                </Typography>
          </div>
          <Button variant={'contained'} color={'primary'} sx={{width:'100px',height:'20px',fontSize:'10px',marginLeft:'10px'}}>Resources</Button>
          <div className={classes.CenterFlex}>
          <Typography variant={'p'} sx={{fontSize:'17px',color:'black',padding:'20px',marginTop:'10px'}} >
          Whoa.
            I 'd like to thank everyone on Reddit and all the folks who have taken my course or read my programming books. I'm completely floored by the response I've gotten to this course. It's incredible and I feel so fortunate for being able to have such a large impact. As I write this, there are 999,866 folks who have signed up for my beginner programming course, so it looks like today, October 1st, 2021, will the day when I reach 1,000,000 sign ups. The vast majority of these are free sign ups. According to my metrics, only about 8% or so of students finish the course (about average for online courses).Thank you.
            s programming experience, but the second half is useful for experienced programmers who want to learn about various third-party Python modules
          </Typography>
          </div>
          <div className={classes.CenterFlex}>
          <Button sx={{marginRight:'10px'}} startIcon={<ChatBubbleIcon/>}> {`comments ${33}` }</Button>
          <Button sx={{marginRight:'10px'}} startIcon={<ShareIcon/>}> {`share`}</Button>
          <Button sx={{marginRight:'10px'}} startIcon={<BookmarkIcon/>}> {`save`}</Button>
          </div>
          <div className={classes.CenterFlex}>
          <TextField sx={{margin:'10px',width:'60%'}}id="outlined-basic" label="Log in or sign up to leave a comment" variant="outlined" />
          <Button variant={'contained'} color={'primary'}>Sign Up</Button>
          <Button variant={'outlined'} sx={{margin:'5px'}} color={'primary'}>Log In</Button>
          </div>
        </Card>
    </div>
    <ComBox/>
    <ComBox/>
    <ComBox/>
    <ComBox/></>
    
   
);
}
export default Post;