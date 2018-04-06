import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Home from './Home';

const mapStateToProps = state => ({
  appName: state.appName,
});

class App extends PureComponent {
  onClick = () => {
    this.props.dispatch({ type: 'TOGGLE' });
  };

  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <NavBar appName={this.props.appName} />
        <Home />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
