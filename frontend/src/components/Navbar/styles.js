import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    marginBottom:'20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    // backgroundColor:'#cacee7',
    backgroundColor:'#292826',
    boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)', /////////////
    // borderBottom:'solid',
    // color:'red',
    opacity:'0.9'
  },
  heading: {
    color: '#4167f9',
    textDecoration: 'none',
    // border:'solid',
    marginLeft: '65px',

  },
  image: {
    marginLeft: '65px',
    // border:'solid',
    width: '200px',
    height:'100px',
    
  },
  logo: {
    marginLeft: '65px',
    // border:'solid',
    width: '280px',
    height:'100px',
    
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: '#f9d341', 
    marginLeft:'68px',
    },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  logout:{
    marginRight:'30px',
    color: '#4167f9',
    boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)', /////////////

    
  },
  
}));