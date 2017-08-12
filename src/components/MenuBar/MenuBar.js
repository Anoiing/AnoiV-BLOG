import React from 'react';
import { Container, Menu, Segment, Icon, Popup, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import NotificationSystem from 'react-notification-system';

export default class MenuBar extends React.Component {

  state = { activeItem: 'home', isMobile: false }

  componentDidMount() {
    window.onresize = () => {
      if (document.body.clientWidth <= 767 && !this.state.isMobile) {
        this.setState({ isMobile: true });
      } else if (this.state.isMobile) {
        this.setState({ isMobile: false });
      }
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  addNoti() {
    this.refs.notification.addNotification({
      title: '获取成功',
      message: '赶紧去粘贴发邮件给我吧！',
      level: 'success',
      position: 'tc',
      autoDismiss: 3
    });
  }

  render() {
    return (
      <Container>
        <Segment inverted className="menu_container">
          <Menu inverted secondary icon stackable>
            <Menu.Item><span className="menu_logo">Anoi灬V少BLOG</span>
              {this.state.isMobile && <Button icon floated="right" secondary>
                <Icon name='icon-menu' />
              </Button>}
            </Menu.Item>
            <Menu.Item name='home' active={this.state.activeItem === 'home'}
              onClick={this.handleItemClick} link as={Link} to="/">
              <Icon className='icon-home' />&nbsp;&nbsp;&nbsp;&nbsp;首&nbsp;&nbsp;&nbsp;&nbsp;页
            </Menu.Item>
            <Menu.Item name='messages' active={this.state.activeItem === 'messages'}
              onClick={this.handleItemClick} link as={Link} to="/message" />
            <Menu.Item name='friends' active={this.state.activeItem === 'friends'}
              onClick={this.handleItemClick} link as={Link} to="/friends" />
            <Menu.Menu position='right'>
              <Menu.Item name='mail'>
                <Popup trigger={<Button><Icon className='icon-envelop' />E-Mail</Button>} flowing hoverable>
                  <Header as='h4'>给我发邮件</Header>
                  <CopyToClipboard text="A534645655@outlook.com"
                    onCopy={() => this.addNoti()}>
                    <Button><Icon className='icon-copy' />点我获取邮箱地址</Button>
                  </CopyToClipboard>
                </Popup>
              </Menu.Item>
              <Menu.Item name='help'><Button><Icon className='icon-question' />Help</Button></Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
        <NotificationSystem ref="notification" />
      </Container>
    );
  }
}
