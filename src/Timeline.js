import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'

export default class Timeline extends Component {
    
    render() {
        return (
            <div className="timeline">
                
                <VerticalTimeline className="timeline">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(136,48,78)' }}
                        date="June 2020 - September 2020"
                        iconStyle={{ background: '#88304e', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">ABOUT ME</h3>
                        <h4 className="vertical-timeline-element-subtitle">Melbourne, Australia</h4>
                        <p>
                        Throughout my experience in the events and hospitality industry, I have witnessed first hand the power and the importance of having strong customer relationship management tools. My search for more efficient systems ignited my interest in software development and ultimately set in motion my career change into software engineering. Combining my events experience, my human-centered approach, my growth mindset, and the skills I have acquired throughout my coding journey my goal is to contribute to making purpose-driven user-friendly software.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(136,48,78)' }}
                        date="2018 - 2020"
                        iconStyle={{ background: '#88304e', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">WORK</h3>
                        <h4 className="vertical-timeline-element-subtitle">Melbourne, Australia</h4>
                        <p>I have a background in event management and sales. Having worked for The Big Group for the last six years I have been fortunate enough to be part of a team that's created f%!$ off AMAZING parties and events! </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(136,48,78)' }}
                        date="2008 - 2010"
                        iconStyle={{ background: '#88304e', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">SCHOOL</h3>
                        <h4 className="vertical-timeline-element-subtitle">Toronto, Canada & Melbourne, Australia</h4>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima deserunt inventore consectetur magnam, recusandae quod aut animi nostrum sapiente numquam, accusantium mollitia dolorum omnis repellendus autem suscipit laborum sequi. Sunt!
                        </p>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(136,48,78)' }}
                        date="2006 - 2008"
                        iconStyle={{ background: '#88304e', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">HOBBIES</h3>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima deserunt inventore consectetur magnam, recusandae quod aut animi nostrum sapiente numquam, accusantium mollitia dolorum omnis repellendus autem suscipit laborum sequi. Sunt!
                        </p>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(136,48,78)' }}
                        date="2002 - 2006"
                        iconStyle={{ background: '#88304e', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">INTERESTS</h3>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima deserunt inventore consectetur magnam, recusandae quod aut animi nostrum sapiente numquam, accusantium mollitia dolorum omnis repellendus autem suscipit laborum sequi. Sunt!
                        </p>

                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        )
    }
}
 