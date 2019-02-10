import React from 'react'
import PropTypes from 'prop-types'

import JournalIcon from './JournalIcon';
import Authors from './Authors';

const Article = ({ article }) => (
  <div className="mb-8 px-6 py-4 rounded shadow leading-normal bg-white">
    <p className="text-sm text-grey-dark flex items-center">
      <JournalIcon />
    </p>
    <p>
      {article.journal.name}
    </p>
    <h1>{article.title}</h1>
    <p className="mb-2">{article.abstract}</p>
    <Authors authors={article.authors} />
  </div>
);

Article.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.object.isRequired,
};

export default Article;
