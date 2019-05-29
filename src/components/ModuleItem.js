import React from "react";

const ModuleList = ({ module, key,deleteModule}) => (
    <li className="list-group-item ">
        <a
            href={`/courses/${module.courseId}/modules/${key}/lessons/1/topics/1`}>
            {module.title}
        </a>
        <i onClick={()=>deleteModule(module.id)}  className="fa fa-trash pull-right" />
    </li>
);

export default ModuleList;
