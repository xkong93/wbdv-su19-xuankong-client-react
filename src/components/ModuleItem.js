import React from "react";

const ModuleList = ({ module,deleteModule, params}) => (
<li className={`list-group-item ${module.id == params.moduleId? 'active' : ''}`}>
        <a  style={{"color": module.id == params.moduleId? 'white' : 'black'}}
            href={`/courses/${module.courseId}/modules/${module.id}/lessons/1/topics/1`}>
            {module.title}
        </a>
        <i onClick={()=>deleteModule(module.id)}  className="fa fa-trash pull-right" />
        <i className="fa fa-pencil pull-right" aria-hidden="true"></i>
    </li>
);

export default ModuleList;
