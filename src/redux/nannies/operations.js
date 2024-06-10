import {
  get,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAfter,
} from 'firebase/database';
import { database } from '../../firebase/firebase';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getNannies = createAsyncThunk(
  'nannies/getNannies',
  async ({ limit, lastKey }, { rejectWithValue }) => {
    try {
      let nannies = query(
        ref(database, 'nannies'),
        orderByKey(),
        limitToFirst(limit)
      );

      if (lastKey) {
        nannies = query(
          ref(database, 'nannies'),
          orderByKey(),
          startAfter(lastKey),
          limitToFirst(limit)
        );
      }

      const snapshot = await get(nannies);
      if (!snapshot.exists()) {
        return [];
      }

      const nanniesList = [];
      snapshot.forEach((childSnapshot) => {
        nanniesList.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });

      return nanniesList;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
