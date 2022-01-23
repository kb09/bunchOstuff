import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    // Form Radius ::
    backgroundColor:'#e4e4e4',
    // borderRadius:'10px 100px / 120px;', ///////
    // borderRadius:'50px / 50px 10px ;', ///////

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
    marginRight:10,
    color:'#694E4E',
    fontWeight: 'bold',
    backgroundColor:'#eac949',
    boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)', /////////////
    opacity:0.8,
    border: "1px solid #694E4E",


  },
  buttonClear: {
    marginRight:30,
    color:'#694E4E',
    fontWeight: 'bold',
    backgroundColor:'#ae942e',
    boxShadow:'0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)', //#9c8433
    opacity:0.8,
    border: "1px solid #694E4E",
  },

}));