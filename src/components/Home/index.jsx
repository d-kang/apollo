import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import MainView from './MainView';

const mapStateToProps = state => ({
  appName: state.appName,
});

class Home extends PureComponent {
  render() {
    return (
      <div className="home-page">
        <div className="container page">
          <div className="row">
            <MainView />

            <div className="col-md-3">
              <div className="sidebar">
                <p>PopularTags</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
