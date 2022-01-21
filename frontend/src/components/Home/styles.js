import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    backgroundColor:'#beacad',
    borderRadius:'10px', ///////
    marginTop:'60px',


    
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton:{
    boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)', /////////////
    color:'#000',
    backgroundColor:'#dcc1c1',


  },
  pages:{
    marginTop:'20px',
    marginBottom:'20px',
    backgroundColor:'#e4e6f3',
    padding:'10px',
  },

}));