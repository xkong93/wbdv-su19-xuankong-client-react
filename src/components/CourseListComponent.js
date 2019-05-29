import React from 'react'
import CourseRow from './CourseRow'
//take array of coursese
const CourseListComponent = ({courses}) =>
    
// return following thing but no need to add return (). single element 
    <div className="container">
        {/* <h2>Course List {courses.length}</h2> */}
            {
                courses.map(course =>
                    <CourseRow key ={course.id} course={course}/>
                 )
            }
            
    </div>

export default CourseListComponent