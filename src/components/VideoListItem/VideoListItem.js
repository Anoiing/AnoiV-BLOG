import React from 'react';
import moment from 'moment';
import { Grid, Embed, Header, Icon, Rating } from 'semantic-ui-react';

export default class VideoListItem extends React.Component {

  componentDidMount() {
    // const videoHtml = window.top.document.getElementById('myFrame').contentWindow;

    // console.log(window.frames['myFrame'].contents);
  }
  
  getValue() {
    let ofrm1 = document.getElementById('frame1').document;
    if (ofrm1 == undefined) {
      ofrm1 = document.getElementById('frame1').contentWindow.document;
      let ff = ofrm1.getElementById('link3');
      alert('firefox/chrome取值结果为:' + ff);
    }
    else {
      let ie = document.frames['frame1'].document.getElementById('link3').value;
      alert('ie取值结果为:' + ie);
    }
  }

  render() {
    const embVideo = this.props.embVideo ? this.props.embVideo :
      { id: '', placeholder: '', source: '', name: '', author: '', time: '', watched: '', stars: 0 };
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
            icon="video play"
            className="videoPlayer"
          />
          <iframe ref='my' id='frame1' name='myFrame' frameborder="1" src='http://player.youku.com/embed/XMjk0NTM2NDczNg==' frameborder="0" height="0" width="0"></iframe>
          {/* <embed src='http://player.youku.com/player.php/sid/XMjg4NjQ5NzY5Ng==/v.swf' allowFullScreen='true' quality='high' width='100%' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed> */}
        </Grid.Column>
        <Grid.Column computer={8} mobile={16} className="videoItemText">
          <Header as='h5' content={embVideo.name} subheader={`By ${embVideo.author}`} />
          {showTime && <Header as='h6'>
            <Icon name='calendar' size="mini" />
            <Header.Content>{moment(embVideo.time).format('DD/MM/YYYY')}</Header.Content>
          </Header>}
          {showWatched && <Header as='h6'>
            <Icon name='play circle outline' size="mini" />
            <Header.Content>{embVideo.watched} 次播放</Header.Content>
          </Header>}
          {showStars && <Rating icon='star' defaultRating={embVideo.stars} maxRating={5} size='mini' disabled />}
          <Grid>
            <Grid.Column computer={9} mobile={2}>
            </Grid.Column>
            <Grid.Column computer={7} mobile={2}>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    )
  }
}

