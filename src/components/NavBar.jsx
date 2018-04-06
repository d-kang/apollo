import React, { PureComponent } from 'react';
import '../styles/components/nav-bar.scss';

class NavBar extends PureComponent {
  render() {
    return (
      <nav>
        <ul className="navbar__container" role="navigation">
          <li>
            <span>
              <i className="fa fa-home" />
              Home
            </span>
          </li>
          <li>
            <span>
              <i className="fa fa-bell-o" />
              Notifications
            </span>
          </li>
          <li>
            <span>
              <i className="fa fa-envelope-o" />
              Messages
            </span>
          </li>

          <li className="navbar__middle-icon">
            <span>
              <i className="fa fa-sun-o" />
            </span>
          </li>

          <li className="search">
            <span>
              <input type="text" placeholder="search Apollo" />
              <i className="fa fa-search" />
            </span>
          </li>

          <li>
            <span>
              <i className="fa fa-user" />
            </span>
          </li>

          <li>
            <span>
              <button>Story</button>
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
