import * as React from 'react';
import { Movie } from '../../containers/movielist/movie_list';
import { Categories } from '../../containers/categorylist/category_list';

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
          id: '', 
          title: '', 
          posterUrl: '', 
          year: 0, 
          categories: Categories.ALL, 
          overview: ''
      },};
  
  export function useMovieDialog(state: MovieDialogState, setState: React.Dispatch<React.SetStateAction<MovieDialogState>>): {closeModal: () => void, openModal: () => void} {
      const closeModal = React.useCallback(() => setState(INITIAL_STATE), [state.isOpened]);
      
      const openModal = React.useCallback(
               () => setState({...state, isOpened: true,}), [state.isOpened]);
  
      return {closeModal, openModal};
  }
  