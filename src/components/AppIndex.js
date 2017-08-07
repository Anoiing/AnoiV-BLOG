import React from 'react';
import { Container, Segment, Grid } from 'semantic-ui-react';
import MenuBar from './MenuBar/MenuBar';
import FocusPic from './FocusPic/FocusPic';

export default class AppIndex extends React.Component {

  render() {
    const att1 = {
      showThumbs: false, showStatus: false, autoPlay: true, showArrows: true,
      emulateTouch: true, infiniteLoop: true, useKeyboardArrows: true, dynamicHeight: true
    }
    const att2 = { showThumbs: false, showStatus: false, autoPlay: true, showArrows: false,
      emulateTouch: true, infiniteLoop: true, useKeyboardArrows: true, dynamicHeight: true }
    const picArr1 = ['1.jpg', '2.jpg', '3.jpg'];
    const picArr2 = ['1-1.jpg', '2-2.jpg', '3-3.jpg'];
    
    return (
      <div>
        <MenuBar />
        <Container>
          <Segment className="mar_top">
            <Grid>
              <Grid.Column computer={10} mobile={16}>
                 <FocusPic att={att1} picArr={picArr1} />
              </Grid.Column>
              <Grid.Column computer={6} mobile={16}>
                <FocusPic att={att2} picArr={picArr2} />
                <div className="banner_pic">
                  <img src="./images/banner.jpg" alt="" />
                </div>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}
