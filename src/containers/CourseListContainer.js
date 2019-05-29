import React from "react";
import CourseListComponent from "../components/CourseListComponent";
import CourseService from "../services/CourseService";
import NavBarAndTableHead from "../components/NavBarAndTableHeader";
import CourseGrid from "../components/CourseGrid";
export default class CourseListContainer extends React.Component {
  constructor(props) {
    super(props);

    //new an obj
    this.courseService = CourseService.getInstance();
    this.state = {
      courses: this.courseService.findAllCourses(),
      toggle: false,
    };
    this.onclickChangeView = this.onclickChangeView.bind(this);
  }

 onclickChangeView(){
    this.setState({
        toggle: !this.state.toggle
    })
 }

  render() {
    return (
      <div>
        <NavBarAndTableHead changeView={this.onclickChangeView}/>
        {this.state.toggle ? <CourseGrid courses={this.state.courses} />: <CourseListComponent courses={this.state.courses} /> }
      </div>
    );
  }
}
