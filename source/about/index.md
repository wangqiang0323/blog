---
title: about
date: 2021-03-15 16:49:02
type: "about"
layout: "about"
---
```javascript
import { mainApiHost, talentId } from '../Env';
import AsyncStorage from '@react-native-community/async-storage';
import { ASYNC_STORAGE_KEYS } from './Constans';
import { toastShort } from './ToastUtil';
import storeInstance from '../Store';
import { setUserInfo } from '../Modules/Login/Actions/LoginActions';

const APP_ID = '5fba4d2f103250fb1a382ce2';

function sendRequest (_url: string, params: any): Promise<CommonResponse<any>> {
  return new Promise((a, b) => {
    fetch(_url, params).then(async res => {
      if (_url.indexOf('api.map.baidu.com') > -1) {
        a(res.json())
        return
      }
      if (res.status === 401) {
        toastShort('登录信息失效。请重新登录。');
        await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.USER_TOKEN);
        storeInstance.dispatch(setUserInfo(null));
        b('登录信息失效。请重新登录。');
        return;
      }
      if (res.status !== 200) {
        b(new Error('服务异常...'));
        toastShort('服务异常...');
        return;
      }
      const jsonRes = await res.json();

      if (!jsonRes.success) {
        if (jsonRes.code == 401) {
          toastShort('登录信息失效。请重新登录。');
          await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.USER_TOKEN);
          storeInstance.dispatch(setUserInfo(null));
          b('登录信息失效。请重新登录。');
        } else {
          toastShort(jsonRes.message || '服务异常');
        }
        return;
      }
      a(jsonRes);
    });
  });
}

export const postRequest = async (url: string, data = {}, jsonData = true, timeout = 1500, headers = {}): Promise<CommonResponse<any>> => {
  const _url = /^http[s]?:/.test(url) ? url : mainApiHost + url;
  let fetchBody = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': jsonData ? 'application/json' : 'multipart/form-data',
      'Cache-Control': 'no-cache',
      token: await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.USER_TOKEN) || '',
      APP_ID: APP_ID,
      TENANT_ID: talentId
    },
    body: jsonData ? JSON.stringify(data) : data,
  };
  return sendRequest(_url, fetchBody);
};

export const getRequest = async (url: string, params?: Record<string, any>) => {
  let _url = /^http[s]?:/.test(url) ? url : mainApiHost + url;
  let fetchBody = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      token: await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.USER_TOKEN) || '',
      APP_ID: APP_ID,
      TENANT_ID: talentId
    }
  };
  console.react('shenjo get request', params, _url);
  if (params) {
    _url = Object.keys(params).reduce((res, curr) => {
      return res + `${curr}=${params[curr]}&`;
    }, _url + '?');
  }
  return sendRequest(_url, fetchBody);
};

```