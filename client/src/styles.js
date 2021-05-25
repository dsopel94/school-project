import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  title: {
    margin: 10,
  },
  modalBody: {
    width:400,
    border: '2px solid #000',
    position: 'absolute',
    top: '40%',
    left: '40%',
    backgroundColor: theme.palette.background.paper,
    padding: '1%',
  },
  addCourseButton: {
    padding: '1%',
    backgroundColor: 'green'
  },
}));
