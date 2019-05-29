import React from "react";
import LessonItem from './LessonItem'
export default class LessonTabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lesson: {
        id: "-1",
        moduleId: "1",
        title: "new Lesson"
      },
      lessons : this.props.lessons
    }
    
  }

 createLesson = () => {
    var newId = new Date().getTime();
    this.setState({
      lesson: {
        id: newId,
        moduleId: this.state.lesson.moduleId,
        title: this.state.lesson.title
      }
    });
    this.setState(
      (this.state.lessons = [...this.state.lessons, this.state.lesson])
    );
    console.log(this.state.lessons);
  };


  // titleChange = () => {

  // }
  render(){
    return(
      <ul class="nav nav-tabs">
        <i onClick={this.createLesson} className="ml-2 fa fa-plus fa-1x" />
          {
            this.state.lessons.map(lesson => 
              <LessonItem lesson={lesson} />
            )
          }
      </ul>

    )
  }
}
