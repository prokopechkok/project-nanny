import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userData;

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      const token = await user.getIdToken();

      return { email: user.email, name, token };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);

      const { user } = userData;
      const token = await user.getIdToken();
      const name = user.displayName;
      return { email: user.email, name, token };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue }) => {
    try {
      return new Promise((res, rej) => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            const name = user.displayName;
            const email = user.email;
            const token = await user.getIdToken();
            res({ email, name, token });
          } else {
            rej('Cannot get user');
          }
          unsubscribe();
        });
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
