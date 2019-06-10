import React from 'react';

const JournalIcon = () => (
  <svg className="fill-current text-gray-600 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M9.896,3.838L0.792,1.562v14.794l9.104,2.276L19,16.356V1.562L9.896,3.838z M9.327,17.332L1.93,15.219V3.27 l7.397,1.585V17.332z M17.862,15.219l-7.397,2.113V4.855l7.397-1.585V15.219z" />
  </svg>
);

const Article = () => (
  <div className="mb-8 px-6 py-4 rounded shadow leading-normal bg-white">
    <p className="text-sm text-gray-500 flex items-center">
      <JournalIcon />
      Journal A
    </p>

    <h1 className="text-3xl font-bold">Test Article Title</h1>
    <p className="mb-2">
      Test article description/abstract goes here.
    </p>

    <div className="py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        First Author
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Second Author
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        Third Author
      </span>
    </div>
  </div>
);

export default Article;
