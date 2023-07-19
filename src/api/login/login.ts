export const login = async (email: string, password: string) => {
  const url = 'https://api.tokenize-dev.com/mobile-api/auth/login';
  const headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=utf-8',
    'user-agent': 'Android;1.15.0',
    'TOK-DEVICE-ID': 'ea278b7741967a5e',
  };
  const payload = {
    email: email,
    password: password,
    captcha: 'yWOEjZMIhY',
    captchaBypass: 'yWOEjZMIhY',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });
    const data = await response.json();

    if (response.ok) {
      // 登录成功
      console.log('登录成功');
      console.log('用户ID:', data.data.userId);
      console.log('用户邮箱:', data.data.email);
      console.log('用户角色:', data.data.roleName);
      console.log('用户Token:', data.data.token);
    } else {
      // 登录失败
      console.log('登录失败:', data.message);
    }
    return data;
  } catch (error) {
    console.error('登录请求出错:', error);
  }
};
