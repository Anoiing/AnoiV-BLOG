require('normalize.css/normalize.css');
require('styles/App.scss');
import 'semantic-ui-css/semantic.min.css';
import React from 'react'

// 引入项目本地图片写法
// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
