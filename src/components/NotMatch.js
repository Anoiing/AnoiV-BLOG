import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class NotMatch extends React.Component {

  render() {
    return (
      <div className="ntm-bg">
        <Container textAlign='center'>
          <div className="ntm-404">
            <h1 className="cssc60362a3a19e8e" >404</h1>
            <h3 className="cssc60362a3a19e8e" >ooops, something goes wrong！</h3>
          </div>
          <div className="ntm-ret">
            <Link to="/AnoiV-BLOG/"><Button color='linkedin' fluid>
              <Icon name='home' /> 返回首页
            </Button></Link>
          </div>
          <span className="ntm-span">© 2017 Cool 404 Page Widget. All rights reserved</span>
        </Container>
      </div>
    );
  }
}
