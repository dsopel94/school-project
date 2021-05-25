import express from 'express';
import mongoose from 'mongoose';

import Course from '../models/Course.js'

export const createCourse = async ( req, res ) => {
  const course = req.body;
  const newCourse = new Course(course)
  try {
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch(error) {
    res.status(409).json({ message: error.message})
  }
}

export const fetchCourses = async (req, res ) => {
  try {
    const courses = await Course.find();

    console.log(courses);

    res.status(200).json(courses);
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
