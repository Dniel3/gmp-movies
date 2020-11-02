import { Movie } from '../model/movie';

export interface MovieState {
  loading: boolean;
  movies: Movie[];
  selectedMovie: Movie | null;
  error: string;
}
