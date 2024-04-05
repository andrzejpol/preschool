import { takeLatest } from 'redux-saga/effects';
import { configurationSagaActionTypes } from '../store/configuration/types';

function* initializedSagas() {}

export default function* rootSaga() {
  yield takeLatest(
    configurationSagaActionTypes.CONFIGURATION_INITIALIZED,
    initializedSagas
  );
}
