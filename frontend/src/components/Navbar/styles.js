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
    backgroundColor:'#fdfff7',
    
  },
  heading: {
    color: '#6173ea',
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
    color: '#6173ea',
  },
  userName:{
    color: '#6173ea',
  }
}));