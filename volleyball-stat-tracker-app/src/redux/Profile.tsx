import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';

export interface Profile {
  id: number;
  name: string;
  email: string;
  pictureUrl?: string;
  isLoggedIn: boolean;
}

export type FbProfile = {
  id: number;
  name: string;
  email: string;
};

const initialState: Partial<Profile> = {
  id: undefined,
  name: undefined,
  email: undefined,
  pictureUrl: undefined,
  isLoggedIn: false,
};

// Attack actions
const login = createAction<FbProfile>('profile/login');

export const profileReducer = createReducer(initialState, (builder) => {
  builder
    // Attack cases
    .addCase(login, (state, action: PayloadAction<FbProfile>) => {
      state.isLoggedIn = true;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    });
});

export const profileActions = {
  login,
};
