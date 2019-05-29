import React from "react";
import './styles/CourseRow.style.client.css'
const CourseRow = ({course}) => {

  return (
    <div className="row border justify-content-between">
      <div className="col-6"><a href={`/courses/${course.id}/modules/1/lessons/1/topics/1`}> {course.title}</a></div>
      <div className="d-none d-sm-block col-2 text-left">{course.owner}</div>
      <div className="d-none d-sm-block col-2 text-center">
        {course.ModifiedDate}
      </div>
      <div className="col-2 text-right">X</div>
    </div>
  );
};

export default CourseRow;
