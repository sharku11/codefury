
import { makeStyles } from "@mui/styles";


export default makeStyles(() =>({
    CenterFlex : {
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
    },
    SpaceFlex : {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
    },
    Logo_left : {
     display:'flex',
     alignItems:'center',
     width:'50px',
     height:'150px',
     flexDirection:'column',
     marginLeft:'-300px'
    },
    Head_text:{
        marginTop:'-100px',
        marginLeft:'-400px'
    }

}))