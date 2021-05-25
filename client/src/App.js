import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, IconButton, Modal, Toolbar, AppBar, Typography, Paper, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse, fetchCourses } from './actions/courses'
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const courses = useSelector((state) => state.courses);
  const [open, setOpen ] = React.useState(false);
  const [courseData, setCourseData] = useState({ name: '', periods: [], students: []});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  });
  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const addCourse = (e) => {
    e.preventDefault();
    dispatch(createCourse(courseData));
    handleClose();
  }

  const body = (
  <Paper>
    <div className={classes.modalBody}>
      <TextField name="name" variant="outlined" label="Course Name" fullWidth value={courseData.name} onChange={(e) => setCourseData({...courseData, name: e.target.value})} />
      <Button className={classes.addCourseButton} onClick={addCourse}>Add Course</Button>
    </div>
  </Paper>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
          <Typography variant="h6" align="center" className={classes.title}>
            School App
          </Typography>
      </AppBar>
      <Typography variant="h3" align= "center">Your Courses </Typography>
      <div className={classes.courseList} container>
        {courses.map((course) => (
          <Button key={course._id} variant="contained" size="large" >{course.name}</Button>
        ))}
      </div>
      <Button variant="contained" onClick={handleOpen} size="large">Add a New Course</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
      {body}
      </Modal>
    </div>
  );
}

export default App;
