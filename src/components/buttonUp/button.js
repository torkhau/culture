import React from 'react';
import style from './style.module.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    }

    this._hendlerClick = this._hendlerClick.bind(this);
    this._viewScroll = this._viewScroll.bind(this);
  }

  _viewScroll() {
    if(this.state.display === 'none' && document.documentElement.scrollTop > 100) {
      this.setState({display: 'block'});
    } 
    if(document.documentElement.scrollTop <= 100 && this.state.display === 'block') {
      this.setState({display: 'none'});
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this._viewScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._viewScroll);
  }
   
  _hendlerClick() {
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
  }
  
  render() {
    const display = this.state.display;
    return (
      <button id='up' style={{display: `${display}` }}  className={style.buttonUp} onClick={this._hendlerClick}>{ String.fromCharCode(8679) }</button>
    )
  }
}
