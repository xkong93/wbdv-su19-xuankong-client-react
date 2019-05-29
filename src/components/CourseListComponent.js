import React from 'react'
import CourseRow from './CourseRow'
//take array of coursese
const CourseListComponent = ({courses}) =>
    
// return following thing but no need to add return (). single element 
    <div className="container">
            {
                courses.map(course =>
                    <CourseRow key ={course.id} course={course}/>
                 )
            }
            
    </div>

export default CourseListComponent