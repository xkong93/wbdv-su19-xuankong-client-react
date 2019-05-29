import React from "react";

const LessonItem = ({ lesson }) => (
  <li className="nav-item">
    <a className="nav-link active" href={`/courses/123/modules/${lesson.moduleId}/lessons/${lesson.id}/topics/1`}>
      {lesson.title}
    </a>
  </li>
)

export default LessonItem;
