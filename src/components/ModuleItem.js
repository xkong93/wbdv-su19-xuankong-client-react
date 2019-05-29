import React from "react";

const ModuleList = ({ module, key}) => (
    <li className="list-group-item ">
        <a
            href={`/courses/${module.courseId}/modules/${key}/lessons/1/topics/1`}>
            {module.title}
        </a>
        <i className="fa fa-trash pull-right" />
    </li>
);

export default ModuleList;
