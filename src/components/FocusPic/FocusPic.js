import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class FocusPic extends React.Component {

  render() {
    const att = this.props.att || {};
    const picArr = this.props.picArr || [];
    return (
      <Carousel
        className="focusbanner"
        showArrows={att.showArrows}
        showStatus={att.showStatus}
        showIndicators={att.showIndicators}
        showThumbs={att.showThumbs}
        infiniteLoop={att.infiniteLoop}
        selectedItem={att.selectedItem}
        axis={att.axis}
        useKeyboardArrows={att.useKeyboardArrows}
        autoPlay={att.autoPlay}
        stopOnHover={att.stopOnHover}
        interval={att.interval || 5000}
        transitionTime={att.transitionTime || 350}
        swipeScrollTolerance={att.swipeScrollTolerance || 5}
        dynamicHeight={att.dynamicHatt}
        emulateTouch={att.emulateTouch}
        onClickThumb={() => { }}
        onClickItem={() => { }}
        onChange={() => { }}
      >
        {picArr.map((item, i) =>
          <div key={i}>
            <img src={`http://oukbnub30.bkt.clouddn.com/${item}`} />
          </div>
        )}
      </Carousel>
    );
  }
}
