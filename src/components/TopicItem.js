import React from "react";

const TopicItem = ({ topic,deleteTopic }) => (
  <li className="nav-item">
    <a className="nav-link active" href={`/courses/123/modules/${topic.moduleId}/lessons/${topic.lessonId}/topics/${topic.id}`}>
      {topic.title}
    </a>
    <i  onClick={()=>deleteTopic(topic.id)} className="fa fa-trash pull-right" />
    <i className="fa fa-pencil pull-right" aria-hidden="true"></i>
  </li>
)

export default TopicItem;
