import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todosReducer from './todos/todos-reducer';

// библиотека redux-persist позволяет сохранять данные из стора в локалсторейдж
const todosPersistConfig = {
  key: 'todos',
  storage,
  // исключаю ненужные свойства из сохранения локалсторейджа
  blacklist: ['filter'],
};

const middleware = [
  // лайфхак для удаления ошибки персиста
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const rootReducer = combineReducers({
  todos: persistReducer(todosPersistConfig, todosReducer),
});

const store = configureStore({
  reducer: rootReducer,
  // девтулзы только в режиме разработки
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

const persistor = persistStore(store);

export default { store, persistor };
