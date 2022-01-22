import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor:'#e4e4e4',
    borderRadius:'10px 100px / 120px;', ///////

  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    
  },
  buttonSubmit: {
    marginTop:10,
    marginBottom: 10,
    marginLeft:10,
    color:'black',
    backgroundColor:'#0fb856',
    boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)', /////////////
    opacity:0.8,


  },
  buttonClear: {
    marginLeft:50,
    color:'black',
    backgroundColor:'#e33540',
    boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)', /////////////
    opacity:0.8,

  },

}));