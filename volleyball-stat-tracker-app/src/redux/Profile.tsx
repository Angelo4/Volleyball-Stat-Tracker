import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';

export interface Profile {
  id?: number;
  fullName?: string;
  email?: string;
  pictureUrl?: string;
  isLoggedIn: boolean;
}

export type FbProfile = {
  id: number;
  fullName: string;
  email: string;
};

const initialState: Profile = {
  id: undefined,
  fullName: undefined,
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
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
    });
});

export const profileActions = {
  login,
};
