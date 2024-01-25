import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './feature/count/countSlice';

export const makeStore = () => {
    return configureStore({
      reducer: {
          counterReducer,
      }
    })
}

const store = makeStore();
export default store;