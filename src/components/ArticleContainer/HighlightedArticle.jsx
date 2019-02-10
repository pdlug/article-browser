import React from 'react'
import PropTypes from 'prop-types'

import JournalIcon from './JournalIcon';
import { generateKey } from '../../utils/utils';

const reactStringReplace = require('react-string-replace');

const substituteMatch = (string, regex) => reactStringReplace(string, regex, (match, i) => (
  <span key={i} className="bg-blue-dark text-grey-lightest">{match}</span>
));

const HighlightedArticle = ({ article, searchTerm }) => {
  const regx = new RegExp(`(${searchTerm})`, 'ig');
  return (
    <div className="mb-8 px-6 py-4 rounded shadow leading-normal bg-white">
      <p className="text-sm text-grey-dark flex items-center">
        <JournalIcon />
      </p>
      <p>
        {article.journal.name}
      </p>
      <h1>{substituteMatch(article.title, regx)}</h1>
      <p className="mb-2">{substituteMatch(article.abstract, regx)}</p>
      {article.authors.map(author => (
        <span
          key={generateKey(author)}
          className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
        >
          {substituteMatch(author, regx)}
        </span>
      ))}
    </div>
  );
};

HighlightedArticle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.object.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default HighlightedArticle;