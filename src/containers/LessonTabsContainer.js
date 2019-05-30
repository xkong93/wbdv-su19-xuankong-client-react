import React from 'react'
import LessonTabsComponent from '../components/LessonTabsComponent'
import TopicPillsComponent from '../components/TopicPillComponent'
export default class LessonTabsContainer
    extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lessons: props.lessons,
            topics:props.topics
        }
    }
    // componentDidUpdate(newProps, oldProps) {
    //     console.log(newProps, oldProps)
    // }
    
    render() {
        console.log(this.state.topics);
        return(
            <div>
                <LessonTabsComponent lessons={this.state.lessons}/>
                <TopicPillsComponent topics={this.state.topics}/>
            </div>
        )
    }
}