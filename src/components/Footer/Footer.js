import React from 'react';
import { Container, Grid, Header, Divider, Label } from 'semantic-ui-react';

export default class Footer extends React.Component {

  render() {
    return (
      <div className="footer marTop">
        <Container>
          <Grid>
            <Grid.Column computer={8} mobile={2}>
              <Header as='h2'>
                <Header.Content className="footText marTop">Anoi灬V少's BLOG</Header.Content>
              </Header>
              <Container>Never missed any post published in our site. Subscribe to our daly newsletter now.</Container>
            
            </Grid.Column>
            <Grid.Column computer={8} mobile={2}>
              <Header as='h3'>
                <Header.Content className="footText marTop">TAGS</Header.Content>
              </Header>
              <Container>
                <Label.Group color='white'>
                  <Label basic>前端</Label>
                  <Label basic>ES6</Label>
                  <Label basic>JavaScript</Label>
                  <Label basic>资源</Label>
                  <Label basic>React</Label>
                  <Label basic>Webpack</Label>
              </Label.Group></Container>
            </Grid.Column>
          </Grid>
        </Container>
        <Divider />
        <Container text className="footCrt">
          Copyright © 2017 All rights reserved.
        </Container>
      </div>
    );
  }
}
