import React from "react";

const CourseRow = ({course}) => {

  return (
    <div className="row border justify-content-between">
      <div className="col-6">{course.title}</div>
      <div className="d-none d-sm-block col-2 text-center">{course.onwer}</div>
      <div className="d-none d-sm-block col-2 text-center">
        {course.ModifiedDate}
      </div>
      <div className="col-2 text-right">X</div>
    </div>
  );
};

export default CourseRow;
