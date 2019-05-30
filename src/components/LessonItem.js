import React from "react";

const LessonItem = ({ lesson,deleteLesson,params}) => (
  <li className="nav-item">
    <a className="nav-link active" href={`/courses/123/modules/${lesson.moduleId}/lessons/${lesson.id}/topics/1`}>
      {lesson.title}
    </a>
    <i  onClick={()=>deleteLesson(lesson.id)} className="fa fa-trash pull-right" />
    <i className="fa fa-pencil pull-right" aria-hidden="true"></i>

  </li>
)

export default LessonItem;
