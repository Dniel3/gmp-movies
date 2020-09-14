import * as React from 'react';
import { Movie } from '../../containers/movielist/movie_list';
import { Genres } from '../../containers/genrelist/genre_list';

export const PANEL_CLASS = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#232323',
    }
  };
  
  export interface MovieDialogState {
      isOpened: boolean;
      movie: Movie;
  }
  
  export const INITIAL_STATE: MovieDialogState = {
      isOpened: false,
      movie: {
          id: 0, 
          title: '', 
          poster_path: '', 
          release_date: '0000-00-00', 
          genres: [Genres.ALL], 
          overview: ''
      } as Movie,};
  
  export function useMovieDialog(state: MovieDialogState, setState: React.Dispatch<React.SetStateAction<MovieDialogState>>): {closeModal: () => void, openModal: () => void} {
      const closeModal = React.useCallback(() => setState(INITIAL_STATE), [state.isOpened]);
      
      const openModal = React.useCallback(
               () => setState({...state, isOpened: true,}), [state.isOpened]);
  
      return {closeModal, openModal};
  }
  