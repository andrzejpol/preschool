import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import { reducer as main } from './main/slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    main,
  },
  // @ts-ignore
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
