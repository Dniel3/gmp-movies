import * as React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import MovieItem from "./movie";

import { Provider } from 'react-redux';
import store from "../../redux/store";

import { FAKE_MOVIE } from "../moremenu/more_menu.test";

import { MemoryRouter, Route } from 'react-router-dom';

let history, location;

beforeEach(() => {
    render(     
        <Provider store={store}>
            <MemoryRouter initialEntries={["/initial"]}>
                <MovieItem {...FAKE_MOVIE}  / >
                <Route
                    path="*"
                    render={({ history, location }) => {
                        history = history;
                        location = location;
                        return null;
                    }}
                />
            </MemoryRouter>
        </Provider>);
});


it('should render props in movie item', () => {
    expect(screen.getByAltText(FAKE_MOVIE.title)).toBeDefined();
    expect(screen.getByText(FAKE_MOVIE.title)).toBeDefined();
    expect(screen.getByText(FAKE_MOVIE.release_date.substring(0, 4))).toBeDefined();
    expect(screen.getByText(FAKE_MOVIE.genres.join(', '))).toBeDefined();
});