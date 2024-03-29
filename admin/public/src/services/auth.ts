import { request } from 'ice';

export const accountLogin = async (body) => {
  return await request.post('/api/auth/login', body);
};

export const accountSignUp = async (body) => {
  return await request.post('/api/auth/signUp', body);
};

export const logout = async () => {
  const res = await request.post('/api/auth/logout');
  return res.data;
};

export const accountBinding = async (body) => {
  return await request.post('/api/auth/callback/bindingAccount', body);
};

export const getAuthGithub = async (params) => {
  return await request.get('/api/auth/callback/github', {
    params,
  });
};
