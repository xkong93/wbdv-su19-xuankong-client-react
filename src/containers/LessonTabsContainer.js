import React from 'react'
import LessonTabsComponent from '../components/LessonTabsComponent'
export default class LessonTabsContainer
    extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lessons: props.lessons
        }
    }
    // componentDidUpdate(newProps, oldProps) {
    //     console.log(newProps, oldProps)
    // }
    render() {
        return(
            <div>
                <LessonTabsComponent lessons={this.state.lessons}/>
            </div>
        )
    }
}