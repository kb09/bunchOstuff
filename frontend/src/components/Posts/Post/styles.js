import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: '100px',
    paddingTop: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',//////ask
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
    
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '0px',
    height: '100%',
    position: 'relative',
    border:'solid',
    width:'100%',
    backgroundColor: '#e4e6f3',
    // backgroundColor: 'transparent',

  },
  overlay: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: { // text field
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px', 
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});