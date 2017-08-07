import React from 'react';
import { Container, Menu, Segment, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuBar extends React.Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Container>
        <Segment inverted className="menu_container">
          <Menu inverted secondary icon >
            <Menu.Item><span className="menu_logo">NEWSPAPER</span></Menu.Item>
            <Menu.Item name='home' active={this.state.activeItem === 'home'}
              onClick={this.handleItemClick} link as={Link} to="/">
                <Icon name='home' />首  页
            </Menu.Item>
            <Menu.Item name='messages' active={this.state.activeItem === 'messages'}
              onClick={this.handleItemClick} link as={Link} to="/message"/>
            <Menu.Item name='friends' active={this.state.activeItem === 'friends'}
              onClick={this.handleItemClick} link as={Link} to="/friends" />
          </Menu>
        </Segment>
      </Container>
    );
  }
}
