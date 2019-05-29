import React from 'react'
import ModuleListContainer from '../containers/ModuleListContainer'
import LessonTabsContainer from '../containers/LessonTabsContainer'

const CourseEditorComponent = ({course, modules, lessons}) =>
<div>
    <div className="row">
        <div className="col-3">
            <ModuleListContainer
                course={course}
                modules={modules}/>
        </div>
        <div className="col-9">
            <LessonTabsContainer
                course={course}
                lessons={lessons}/>
        </div>
    </div>
</div>

export default CourseEditorComponent;  