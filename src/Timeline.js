import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css'

export default class Timeline extends Component {
    
    render() {
        return (
            <div className="timeline">
                
                <VerticalTimeline >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="June 2020 - September 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon="H"
                    >
                        <h3 className="vertical-timeline-element-title">ABOUT ME</h3>
                        <h4 className="vertical-timeline-element-subtitle">Melbourne, Australia</h4>
                        <p>
                        I'm an aspiring Full-Stack Software Developer.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2018 - 2020"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon="H"
                    >
                        <h3 className="vertical-timeline-element-title">WORK</h3>
                        <h4 className="vertical-timeline-element-subtitle">Melbourne, Australia</h4>
                        <p>I have a background in event management and sales. Having worked for The Big Group for the last six years I have been fortunate enough to be part of a team that's created f%!$ off AMAZING parties and events! </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2008 - 2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon="H"
                    >
                        <h3 className="vertical-timeline-element-title">SCHOOL</h3>
                        <h4 className="vertical-timeline-element-subtitle">Toronto, Canada & Melbourne, Australia</h4>
                        <p>
                        
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2006 - 2008"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon="H"
                    >
                        <h3 className="vertical-timeline-element-title">HOBBIES</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                        User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2002 - 2006"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon="H"
                    >
                        <h3 className="vertical-timeline-element-title">INTERESTS</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                        <p>
                        Creative Direction, Visual Design
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        )
    }
}
 