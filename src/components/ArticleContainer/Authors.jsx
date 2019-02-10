import React from 'react';
import PropTypes from 'prop-types';

import { generateKey } from '../../utils/utils';

const Authors = ({ authors }) => authors.map((author, index) => (
  <span
    key={generateKey(author, index)}
    className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2"
  >
    {author}
  </span>
));

Authors.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  authors: PropTypes.array.isRequired,
};

export default Authors;