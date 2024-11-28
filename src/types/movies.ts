export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string | null;
}

export interface MovieResponse {
  results: Movie[];
}