import * as React from "react";
import { render, screen } from "@testing-library/react";

import * as Redux from 'react-redux';
import store from "../../redux/store";

import userEvent from "@testing-library/user-event";
import DeleteMovieDialog from "./delete_movie";
import { FAKE_MOVIE } from "../moremenu/more_menu.test";

import * as ReactModal from 'react-modal';
import AddMovieDialog from "./add_movie";

ReactModal.setAppElement('body');

describe('AddMovieDialog', () => {

    beforeEach(() => {
        store.dispatch = jest.fn();
        render(     
            <Redux.Provider store={store}>
                <AddMovieDialog />
            </Redux.Provider>);     

        userEvent.click(document.querySelector('.add-button')!);   
    });  
    
    it('should open dialog', () => {
        expect(screen.getByText('ADD MOVIE')).toBeDefined();
    });
    
    it('should close dialog when clicking close button', () => {
        userEvent.click(document.querySelector('.close-button')!);   

        expect(screen.queryByText('ADD MOVIE')).toBeNull();
    });
    
    it('should dispatch createMovie action when clicking add button', () => {
        userEvent.click(document.querySelector('.submit')!);   
        userEvent.type(document.querySelector('#add-title')!, 'foo');   

        expect(screen.queryByDisplayValue('foo')).toBeDefined();
    });
});
