import React, { Component } from 'react'
import { Menuitems } from './MenuItems'
import '../../Utilities/Navbar.css'
import '../../Utilities/Text.css'
import '../../Utilities/Button.css'
import { Button } from '../Button/Button'
import LoginButton from './LoginButton'


class Navbar extends Component {
  state = { isClicked: false }

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked })
  }

  render() {
    return (
      <nav className='NavbarItems'>
        <h1 className='FontText NavbarLogo'>The Aston Clinic</h1>
        <div className='menu-icon' onClick={this.handleClick}>
          <i className={this.state.isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.isClicked ? 'nav-menu active' : 'nav-menu'}>
          {Menuitems.map((MenuItems, index) => {
            return (
              <li key={index}>
                <a className={MenuItems.cName} href={MenuItems.url}>
                  {MenuItems.title}
                </a>
              </li>
            )
          })}
        </ul>
        <LoginButton />
      </nav>
    )
  }
}

export default Navbar