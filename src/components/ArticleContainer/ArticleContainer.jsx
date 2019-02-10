import React from 'react';
import PropTypes from 'prop-types';

import HighlightedArticle from './HighlightedArticle';
import Article from './Article';

const ArticleContainer = ({ article, searchTerm, searchPresent }) => (
  <div>
    {searchPresent
      ? <HighlightedArticle article={article} searchTerm={searchTerm} />
      : <Article article={article} />
      }
  </div>
);

ArticleContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.object.isRequired,
  searchPresent: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default ArticleContainer;
