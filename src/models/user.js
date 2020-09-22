import api from '@/api';
import { history } from 'umi';

const Model = {
  namespace: 'user',
  state: {
    status: false,
    roles: []
  },
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(api.User.login, payload);
      if (response) {
        yield put({
          type: 'changeStatus',
          payload: true,
          key: 'status',
        });
        let RoleArr = [];
        response._role.forEach(item => {
          RoleArr = [...RoleArr, ...item.content];
        });
        yield put({
          type: 'changeStatus',
          payload: RoleArr,
          key: 'roles',
        });
        localStorage.setItem('hl-token', response.token);
        return RoleArr;
      } else {
        return false;
      }
    },
    *check({ payload }, { call, put }) {
      const response = yield call(api.User.check, payload);
      if (response) {
        yield put({
          type: 'changeStatus',
          payload: true,
          key: 'status',
        });
        let RoleArr = [];
        response._role.forEach(item => {
          RoleArr = [...RoleArr, ...item.content];
        });
        console.log(RoleArr);
        yield put({
          type: 'changeStatus',
          payload: RoleArr,
          key: 'roles',
        });
        // localStorage.setItem('hl-token', response.token);
        return true;
      } else {
        return false;
      }
    },
    *loginOut(_, { put }) {
      yield put({
        type: 'changeStatus',
        payload: false,
        key: 'status',
      });
      localStorage.removeItem('hl-token');
      history.push('/login');
    },


  },
  reducers: {
    changeStatus(state, { payload, key }) {
      return { ...state, [key]: payload };
    },
  },
};
export default Model;
