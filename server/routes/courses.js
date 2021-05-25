import express from 'express';
import { createCourse, fetchCourses } from '../controllers/courses.js';

const router = express.Router();

router.post('/', createCourse);
router.get('/', fetchCourses);

export default router;
