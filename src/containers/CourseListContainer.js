import React from 'react'
import CourseListComponent from '../components/CourseListComponent'
import CourseService from '../services/CourseService'
import NavBarAndTableHead from '../components/NavBarAndTableHead';
import CourseGrid from '../components/CourseGrid'
export default class CourseListContainer extends React.Component {
    constructor(props) {
        super(props)
        
        //new an obj 
        this.courseService = CourseService.getInstance()
        this.state = {
            courses: this.courseService.findAllCourses(),
            click:false,
        }
    }

    swtichView(){

        if (this.state.click){
            return (
                <CourseGrid courses={this.state.courses}/>
            )
        }else{
            return(
            <CourseListComponent courses={this.state.courses}/>
            )   
        }

    }

    render() {

        return (
            <div>
            <NavBarAndTableHead />
            {this.swtichView()}
            </div>        
)
    }
}