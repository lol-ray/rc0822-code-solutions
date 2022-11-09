import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openId: null,
      firstClick: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (this.state.openId !== id) {
      this.setState({
        openId: id
      });
    } else {
      this.setState({
        openId: null
      });
    }
  }

  render() {
    const accordion = this.props.accordion;
    const content = accordion.map(accordion =>
      <div className="container" key={accordion.id}>
        <h1 onClick={() => this.handleClick(accordion.id)}>
          {accordion.topic}
        </h1>
        {
          this.state.openId === accordion.id
            ? (
              <p className='active'>
                {accordion.description}
              </p>
              )
            : (
              <p className=''>
                {accordion.description}
              </p>
              )
        }
      </div>
    );
    return (
      <div className="accordion">
        {content}
      </div>
    );
  }
}
