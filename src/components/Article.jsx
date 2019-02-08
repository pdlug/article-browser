import React from 'react';
import PropTypes from 'prop-types';

const JournalIcon = () => (
  <svg
    className="fill-current text-grey-dark w-3 h-3 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  >
    <path d="M9.896,3.838L0.792,1.562v14.794l9.104,2.276L19,16.356V1.562L9.896,3.838z M9.327,17.332L1.93,15.219V3.27 l7.397,1.585V17.332z M17.862,15.219l-7.397,2.113V4.855l7.397-1.585V15.219z" />
  </svg>
);

const generateKey = author => `${author.split(' ')[1]}-${new Date().getTime()}`;

export const Authors = ({ authors }) => authors.map((author, index) => (
  <span
    key={generateKey(author)}
    className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
  >
    {author}
  </span>
));

const Article = ({ article }) => (
  <div className="mb-8 px-6 py-4 rounded shadow leading-normal bg-white">
    <p className="text-sm text-grey-dark flex items-center">
      <JournalIcon />
    </p>
    <p>{article.journal.name}</p>
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
