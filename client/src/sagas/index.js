import { fork } from 'redux-saga/effects';

import * as userSagas from '../containers/users/sagas'

export default function* rootSaga(feathersApp){
  yield[
      fork(userSagas.getUsersSaga, feathersApp),
      fork(userSagas.createUserSaga, feathersApp),
      // fork(userSagas.getRACISSaga, feathersApp),
      fork(userSagas.getSingleUserSaga, feathersApp),
      fork(userSagas.deleteUserSaga, feathersApp),
      fork(userSagas.loadFormSaga, feathersApp),
      fork(userSagas.updateUserSaga, feathersApp),
  ]
}
