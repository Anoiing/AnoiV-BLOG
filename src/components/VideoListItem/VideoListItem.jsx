import React from 'react';
import moment from 'moment';
import { Grid, Embed, Header, Icon, Rating } from 'semantic-ui-react';

export default class VideoListItem extends React.Component {

  render() {
    const embVideo = this.props.embVideo ? this.props.embVideo :
      {
        id: '', placeholder: '', source: '', name: '', author: '', time: '', watched: '', stars: 0,
      };
    const showTime = this.props.showTime !== undefined ? this.props.showTime : true;
    const showWatched = this.props.showWatched !== undefined ? this.props.showWatched : true;
    const showStars = this.props.showStars !== undefined ? Number(this.props.showStars) : false;
    return (
      <Grid className="videoItem">
        <Grid.Column computer={8} mobile={16} className="videoItemCont">
          <Embed
            id={embVideo.id}
            placeholder={embVideo.placeholder}
            source={embVideo.source}
            icon="icon-media-play-outline"
            className="videoPlayer"
          />
        </Grid.Column>
        <Grid.Column computer={8} mobile={16} className="videoItemText">
          <Header as="h5" content={embVideo.name} subheader={`By ${embVideo.author}`} />
          {showTime && <Header as="h6">
            <Icon className="icon-calendar2" size="mini" />
            <Header.Content>{moment(embVideo.time).format('DD/MM/YYYY')}</Header.Content>
                       </Header>}
          {showWatched && <Header as="h6">
            <Icon className="icon-play2" size="mini" />
            <Header.Content>{embVideo.watched} 次播放</Header.Content>
                          </Header>}
          {showStars && <Rating icon="star" defaultRating={embVideo.stars} maxRating={5} size="mini" disabled />}
          <Grid>
            <Grid.Column computer={9} mobile={2}>
            </Grid.Column>
            <Grid.Column computer={7} mobile={2}>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}

