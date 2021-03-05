export type Journal = {
  id: string;
  name: string;
}

export type Article = {
  id: string;
  publishedOn: string;
  title: string;
  abstract: string;
  journal: Journal;
  authors: string[];
}
