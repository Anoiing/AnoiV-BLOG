import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default class Divider extends React.Component {

  render() {
    const titles = this.props.titles;
    const leftWidth = Number(this.props.leftWidth);
    const titlesWidth = Number(this.props.titlesWidth);
    const lineColor = this.props.lineColor;
    const lineStyle = this.props.lineStyle;
    return (
      <div className="divi_container">
        <Grid>
          <Grid.Column computer={leftWidth} mobile={leftWidth}>
            {lineStyle === 'sigleCrude' ?
              <hr color={lineColor} className="sigleCrude"/> :
              <div className="tripleThin">
                <hr color={lineColor} />
                <hr color={lineColor} />
                <hr color={lineColor} />
              </div>
             }
          </Grid.Column>
          <Grid.Column computer={titlesWidth} mobile={titlesWidth} className="cl_lr_padd">
            <Header as='h3'>{titles}</Header>
          </Grid.Column>
          <Grid.Column computer={16 - leftWidth - titlesWidth} mobile={16 - leftWidth - titlesWidth}>
            {lineStyle === 'sigleCrude' ?
              <hr color={lineColor} className="sigleCrude" /> :
              <div className="tripleThin">
                <hr color={lineColor} />
                <hr color={lineColor} />
                <hr color={lineColor} />
              </div>
            }
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
