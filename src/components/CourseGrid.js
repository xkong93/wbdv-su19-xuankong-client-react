import React from "react"
import CourseCard from "./CourseCard";


const CourseList = ({courses}) => 

    <div className="container">
        <div className="row">
        {

            courses.map(course =>
            <div className='col-xs-1 col-md-4 col-lg-2'>
            <CourseCard key={course.id} course = {course}/>
            </div>
            )
        }
        </div>
    </div>


export default CourseList