import React from 'react';
import ArticleList from '../ArticleList';

const mapStateToProps = state => ({
  articles: state.articles,
});

const MainView = ({ articles }) => (
  <div className="col-md-9">
    <div className="feed-toggle">
      <ul className="nav nav-pill outline-active">
        <li className="nav-item">
          <a href="" className="nav-link active">
            Global Feed
          </a>
        </li>
      </ul>
    </div>

    <ArticleList articles={articles} />
  </div>
);

export default MainView;
