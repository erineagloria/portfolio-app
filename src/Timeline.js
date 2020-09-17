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
                        iconStyle={{ background: '#88304e', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">WHO AM I?</h3>
                        <p>
                        I am an emerging Full-Stack Software Developer. At my core, I am a highly motivated problem solver. I enjoy working in Ruby, Python, and front-end frameworks such as React.js.<br/><br/>I hope to create a kind, welcoming, and safe space for all my peers. I love working with passionate and hard-working people, bouncing ideas off one another, and getting our creative juices flowing. 
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(136,48,78)' }}
                        iconStyle={{ background: '#88304e', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">MY STORY</h3>
                        <p>I am a Sales and Events Manager transitioning into Software Development.<br/><br/>
                        Having nine years of experience in the hospitality industry I learned to be highly adaptable and work in a fast-paced environment, resourceful problem-solving skills and experience with technical tools and event software. No matter how much you plan, expect mistakes, and always look for solutions, all whilst being mindful of the client’s budget and delivering a memorable experience.<br/><br/>I gained an understanding of how to manage a team and work with clients in a stressful environment, communicate with empathy, and maintain a calm presence.<br/><br/>I’d like to apply my customer service experience and the soft skills I’ve developed in a role where I can create innovative software that will improve customer relationships, and positively impact a customer’s experience with a business.
                        </p>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(136,48,78)' }}
                        iconStyle={{ background: '#88304e', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">WHAT DO I BELIEVE IN?</h3>
                        <p>
                        Health is the greatest wealth <br/>
                        Always Something Approach vs. All or Nothing Approach<br/>
                        Reflect - Acknowledge - Move <br/>
                        Creating safe and inclusive spaces <br/>
                        Empowering women with confidence, knowledge and support to pursue a career in tech<br/>
                        </p>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(136,48,78)' }}
                        iconStyle={{ background: '#88304e', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">WHAT INTERESTS ME?</h3>
                        <p>
                        Accessibility on the Web<br/>
                        Event-Driven Architecture<br/>
                        Python<br/>
                        SQL<br/>
                        Ruby on Rails<br/>
                        Elixir<br/>
                        Tech Tools for Small Businesses<br/>
                        CRM and Event Management Software
                        </p>

                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        )
    }
}
 