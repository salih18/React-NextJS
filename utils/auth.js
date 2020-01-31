import cookie from 'js-cookie';
import Router from 'next/router';

export function handleLogin(token) {
  cookie.set('token', token);
  Router.push('/account');
}

export function redirectUser(ctx, location) {
  if (ctx.req) {
    console.log('Server redirect');
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    console.log('Client redirect');
    Router.push(location);
  }
}

export function handleLogout() {
  cookie.remove('token');
  window.localStorage.setItem('logout', Date.now());
  Router.push('/login');
}
