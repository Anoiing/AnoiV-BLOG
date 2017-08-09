import React from 'react';
import moment from 'moment';
import { Container, Segment, Grid, Embed, Header, Icon, Search, Label, Tab } from 'semantic-ui-react';
import MenuBar from './MenuBar/MenuBar';
import FocusPic from './FocusPic/FocusPic';
import DividerTitle from './DividerTitle/DividerTitle';
import VideoListItem from './VideoListItem/VideoListItem';

export default class AppIndex extends React.Component {
  constructor(props) {
    super(props);
    moment.locale('zh-CN');
    this.state = {
      time: moment()
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ time: moment() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval();
  }


  render() {
    const att1 = {
      showThumbs: false, showStatus: false, autoPlay: true, showArrows: true,
      emulateTouch: true, infiniteLoop: true, useKeyboardArrows: true, dynamicHeight: true
    }
    const att2 = {
      showThumbs: false, showStatus: false, autoPlay: true, showArrows: false,
      emulateTouch: true, infiniteLoop: true, useKeyboardArrows: true, dynamicHeight: true
    }
    const picArr1 = ['1.jpg', '2.jpg', '3.jpg'];
    const picArr2 = ['1-1.jpg', '2-2.jpg', '3-3.jpg'];
    const panes = [
      {
        menuItem: { key: 'hot', icon: 'fire', content: '热门播放' }, render: () =>
          <Tab.Pane attached>
            <VideoListItem embVideo={{ id: 'J7UwSVsiwzI', placeholder: './images/videoList01.jpg', source: 'youtube', name: 'Space Cats — Magic Fly', author: 'Enjoyker', time: '2015-10-07', watched: '184,561' }} />
            <VideoListItem embVideo={{ id: 'a5JySIRcPFs', placeholder: './images/videoList02.jpg', source: 'youtube', name: 'Singing Cats', author: 'Joaquim Nielsen', time: '2009-10-15', watched: '6,228,347' }} />
            <VideoListItem embVideo={{ id: 'gJscrxxl_Bg', placeholder: './images/videoList03.jpg', source: 'youtube', name: 'Shia LaBeouf - Just Do it! (Auto-tuned)', author: 'Enjoyker', time: '2015-6-10', watched: '6,228,391' }} />
          </Tab.Pane>
      },
      {
        menuItem: { key: 'popular', icon: 'thumbs up', content: '流行' }, render: () =>
          <Tab.Pane attached>
            <VideoListItem embVideo={{ id: 'a5JySIRcPFs', placeholder: './images/videoList02.jpg', source: 'youtube', name: 'Singing Cats', author: 'Joaquim Nielsen', time: '2009-10-15', watched: '6,228,347' }} />
            <VideoListItem embVideo={{ id: 'J7UwSVsiwzI', placeholder: './images/videoList01.jpg', source: 'youtube', name: 'Space Cats — Magic Fly', author: 'Enjoyker', time: '2015-10-07', watched: '184,561' }} />
            <VideoListItem embVideo={{ id: 'gJscrxxl_Bg', placeholder: './images/videoList03.jpg', source: 'youtube', name: 'Shia LaBeouf - Just Do it! (Auto-tuned)', author: 'Enjoyker', time: '2015-6-10', watched: '6,228,391' }} />
          </Tab.Pane>
      },
      {
        menuItem: { key: 'guess', icon: 'gift', content: '猜你想看' }, render: () =>
          <Tab.Pane attached>
            <VideoListItem embVideo={{ id: 'gJscrxxl_Bg', placeholder: './images/videoList03.jpg', source: 'youtube', name: 'Shia LaBeouf - Just Do it! (Auto-tuned)', author: 'Enjoyker', time: '2015-6-10', watched: '6,228,391' }} />
            <VideoListItem embVideo={{ id: 'J7UwSVsiwzI', placeholder: './images/videoList01.jpg', source: 'youtube', name: 'Space Cats — Magic Fly', author: 'Enjoyker', time: '2015-10-07', watched: '184,561' }} />
            <VideoListItem embVideo={{ id: 'a5JySIRcPFs', placeholder: './images/videoList02.jpg', source: 'youtube', name: 'Singing Cats', author: 'Joaquim Nielsen', time: '2009-10-15', watched: '6,228,347' }} />
          </Tab.Pane>
      }
    ];

    return (
      <div>
        <MenuBar />
        <Container>
          <Segment className="marTop">
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
        <Container>
          <Grid>
            {/* 左测列（大屏视频） */}
            <Grid.Column computer={7} mobile={16}>
              <Segment className="marTop">
                <Embed
                  id='125292332'
                  placeholder='./images/vimeo_placehoder.jpg'
                  source='vimeo'
                />
                <Header as='h2' content="Video's Name" subheader='By Kelvin' />
                <Grid>
                  <Grid.Column computer={3} mobile={2}>
                    <Header as='h6'>
                      <Icon name='calendar' size="mini" />
                      <Header.Content>25/3/2015</Header.Content>
                    </Header>
                  </Grid.Column>
                  <Grid.Column computer={3} mobile={2}>
                    <Header as='h6'>
                      <Icon name='heart' size="mini" />
                      <Header.Content>1,200</Header.Content>
                    </Header>
                  </Grid.Column>
                </Grid>
                <Container textAlign='justified' className="marTop">
                  Aenean feugiat in ante et blandit. Vestibulum posuere molestie risus, ac interdum magna porta non. Pellentesque rutrum fringilla elementum. Curabitur tincidunt porta lorem vitae accumsan.Aenean feugiat in ante et blandit. Vestibulum posuere molestie risus, ac interdum magna porta non.ac interdum magna porta non. Pellentesque rutrum fringilla elementum. Curabitur tincidunt porta lorem vitae accumsan
                </Container>
                <DividerTitle titles="Vimeo" leftWidth="2" titlesWidth="2" lineColor="#17B1E5" lineStyle="sigleCrude" />
                <Grid>
                  <Grid.Column computer={8} mobile={8}>
                    <Embed
                      id='125292332'
                      placeholder='./images/vimeo_placehoder.jpg'
                      source='vimeo'
                      className="marTop-"
                    />
                    <Header as='h2' content="Video's Name" subheader='By Kelvin' />
                    <Grid>
                      <Grid.Column computer={6} mobile={2}>
                        <Header as='h6'>
                          <Icon name='calendar' size="mini" />
                          <Header.Content>25/3/2015</Header.Content>
                        </Header>
                      </Grid.Column>
                      <Grid.Column computer={6} mobile={2}>
                        <Header as='h6'>
                          <Icon name='heart' size="mini" />
                          <Header.Content>1,200</Header.Content>
                        </Header>
                      </Grid.Column>
                    </Grid>
                    <Container textAlign='justified' className="marTop">
                      Aenean feugiat in ante et blandit. Vestibulum posuere molestie risus, ac interdum magna porta non. Pellentesque rutrum fringilla elementum. Curabitur tincidunt porta lorem vitae accumsan.
                    </Container>
                  </Grid.Column>
                  <Grid.Column computer={8} mobile={8}>
                    <VideoListItem embVideo={{ id: 'J7UwSVsiwzI', placeholder: './images/videoList01.jpg', source: 'youtube', name: 'Space Cats — Magic Fly', author: 'Enjoyker', time: '2015-10-07', watched: '184,561', stars: 3 }} showTime={false} showWatched={false} showStars={true} />
                    <VideoListItem embVideo={{ id: 'a5JySIRcPFs', placeholder: './images/videoList02.jpg', source: 'youtube', name: 'Singing Cats', author: 'Joaquim Nielsen', time: '2009-10-15', watched: '6,228,347', stars: 4 }} showTime={false} showWatched={false} showStars={true} />
                    <VideoListItem embVideo={{ id: 'gJscrxxl_Bg', placeholder: './images/videoList03.jpg', source: 'youtube', name: 'Shia LaBeouf - Just Do it! (Auto-tuned)', author: 'Enjoyker', time: '2015-6-10', watched: '6,228,391', stars: 3 }} showTime={false} showWatched={false} showStars={true} />
                    <VideoListItem embVideo={{ id: 'J7UwSVsiwzI', placeholder: './images/videoList01.jpg', source: 'youtube', name: 'Space Cats — Magic Fly', author: 'Enjoyker', time: '2015-10-07', watched: '184,561', stars: 4 }} showTime={false} showWatched={false} showStars={true} />
                    <VideoListItem embVideo={{ id: 'a5JySIRcPFs', placeholder: './images/videoList02.jpg', source: 'youtube', name: 'Singing Cats', author: 'Joaquim Nielsen', time: '2009-10-15', watched: '6,228,347', stars: 3 }} showTime={false} showWatched={false} showStars={true} />
                  </Grid.Column>
                </Grid>




              </Segment>
            </Grid.Column>

            {/* 中间列（小屏视频、画廊） */}
            <Grid.Column computer={5} mobile={16}>
              <Segment className="marTop">
                <DividerTitle titles="视频" leftWidth="3" titlesWidth="2" lineColor="#000" lineStyle="tripleThin" />
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} className="videoTab" />
                <DividerTitle titles="画廊" leftWidth="3" titlesWidth="2" lineColor="#000" lineStyle="tripleThin" />
                <Container className="galContain">
                  <div><img src="./images/gal-1.jpg" alt="gal-1" /></div>
                  <div><img src="./images/gal-2.jpg" alt="gal-2" /></div>
                  <div><img src="./images/gal-3.jpg" alt="gal-3" /></div>
                  <div><img src="./images/gal-4.jpg" alt="gal-4" /></div>
                  <div><img src="./images/gal-5.jpg" alt="gal-5" /></div>
                  <div><img src="./images/gal-6.jpg" alt="gal-6" /></div>
                  <div><img src="./images/gal-7.jpg" alt="gal-7" /></div>
                  <div><img src="./images/gal-8.jpg" alt="gal-8" /></div>
                  <div><img src="./images/gal-1.jpg" alt="gal-1" /></div>
                </Container>







              </Segment>
            </Grid.Column>

            {/* 右侧列（搜索、标签） */}
            <Grid.Column computer={4} mobile={16}>
              <Segment className="marTop">
                <DividerTitle titles="搜索" leftWidth="3" titlesWidth="3" lineColor="#000" lineStyle="tripleThin" />
                <Search className="searchInput" />
                <DividerTitle titles="标签" leftWidth="3" titlesWidth="3" lineColor="#000" lineStyle="tripleThin" />
                <Container>
                  <Label.Group color='blue'>
                    <Label as='a'>Fun</Label>
                    <Label as='a'>Happy
                      <Label.Detail>22</Label.Detail>
                    </Label>
                    <Label as='a'>Smart</Label>
                    <Label as='a'>Insane</Label>
                    <Label as='a'>Exciting</Label>
                  </Label.Group>
                </Container>
                <DividerTitle titles="日期时间" leftWidth="3" titlesWidth="5" lineColor="#000" lineStyle="tripleThin" />
                <Header as='h4'>
                  <Icon name='calendar' />
                  <Header.Content className="timeFont">{moment().format('YYYY年 MM月 DD日 ddd')}</Header.Content>
                </Header>
                <Header as='h4'>
                  <Icon name='clock' />
                  <Header.Content className="timeFont">{moment(this.state.time).format('HH : mm : ss    A')}</Header.Content>
                </Header>
                <img src="./images/earthTime.jpg" alt="" width="100%" />
                <DividerTitle titles="TWEET" leftWidth="3" titlesWidth="4" lineColor="#000" lineStyle="tripleThin" />

              </Segment>
            </Grid.Column>
          </Grid>

        </Container>
      </div>
    );
  }
}
