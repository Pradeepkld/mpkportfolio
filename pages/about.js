import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends React.Component {
  render() {
    return (
      <BaseLayout
        title="Pradeep Matam - Learn More About Me"
        {...this.props.auth}
      >
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">
                  Feel free to read short description about me.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>
                  My name is Pradeep Matam and I am an experienced software
                  engineer and freelance developer.{' '}
                </p>
                <p>
                  I have a Bachelor's degree in Computer Science Engineering and
                  several years of experience working on a wide range of Web
                  technologies and worked on projects developed using ASP.NET,
                  ASP.NET Core, C#, React, Angular, Python, Django, Machine
                  Learning throughout my career.
                </p>
                <p>
                  Throughout my career, I have acquired advanced technical
                  knowledge and the ability to explain programming topics
                  clearly and in detail to a broad audience. I invite you to
                  take my course, where I have put a lot of effort to explain
                  web and software engineering concepts in a detailed, hands-on
                  and understandable way.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
