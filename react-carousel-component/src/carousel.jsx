import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 1
    };
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
  }

  clickLeft() {
    const carousel = this.props.carousel;
    if (this.state.activeId === 1) {
      this.setState({
        activeId: carousel.length
      });
    } else {
      this.setState({
        activeId: this.state.activeId - 1
      });
    }
  }

  clickRight() {
    const carousel = this.props.carousel;
    if (this.state.activeId === carousel.length) {
      this.setState({
        activeId: 1
      });
    } else {
      this.setState({
        activeId: this.state.activeId + 1
      });
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const carousel = this.props.carousel;
      if (this.state.activeId === carousel.length) {
        this.setState({
          activeId: 1
        });
      } else {
        this.setState({
          activeId: this.state.activeId + 1
        });
      }
    }, 3000);
  }

  componentWillUnMount() {
    clearInterval(this.timer);
  }

  render() {
    const carousel = this.props.carousel;
    const image = carousel.map(carousel =>
      <div key={carousel.id} className="img-container">
        {
          this.state.activeId === carousel.id
            ? (
            <img key={carousel.id} src={carousel.src} alt={carousel.alt} className="active" />
              )
            : (
            <img key={carousel.id} src={carousel.src} alt={carousel.alt} className="inactive" />
              )
        }
      </div>
    );
    return (
      <div className="container">
        <i className="fa-solid fa-angle-left" onClick={this.clickLeft}></i>
            {image}
        <i className="fa-solid fa-angle-right" onClick={this.clickRight}></i>
      </div>
    );
  }
}
