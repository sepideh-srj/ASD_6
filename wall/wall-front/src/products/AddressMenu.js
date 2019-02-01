import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMenu: false,
      options: []
    };
    
    this.toggleMenu = this.toggleMenu.bind(this);

  }
  
  toggleMenu(event) {
    event && event.preventDefault();
    let options = JSON.parse(localStorage.getItem('addresses'))
    this.setState({ options, showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleMenu}>
          {'آدرس ها'}
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                {this.state.options.map((option, key)=>
                    <div key={key}><button onClick={event=>{
                      event.preventDefault()
                      this.toggleMenu()
                      this.props.cb(option)
                    }}>{option}</button></div>
                )}
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}