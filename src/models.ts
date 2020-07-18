export interface Journal {
  id: string;
  name: string;
}

export interface Article {
  id: string;
  publishedOn: string;
  title: string;
  abstract: string;
  journal: Journal;
  authors: string[];
}
