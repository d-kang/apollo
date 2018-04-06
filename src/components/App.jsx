import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
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
        <Header appName={this.props.appName} />
        <Home />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
