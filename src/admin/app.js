
import AuthLogo from './extensions/logo_login.jpg';
import MenuLogo from './extensions/logo.jpeg';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    locales: [
      // 'ar',
       'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    tutorials: false,
    notifications: {release:false},
    auth:{
      logo: AuthLogo
    },
    head:{
      favicon:favicon
    },
    menu:{
      logo:MenuLogo
    }
  },
  bootstrap(app) {
    console.log(app);
  },
};
