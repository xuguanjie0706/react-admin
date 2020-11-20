export default {
  url: process.env.NODE_ENV === 'development' ? 'http://localhost:7001/' : 'http://pick.365tihuo.com/',
  webUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8001/#/Exchange/' : 'http://pick.365tihuo.com/mobile/#/Exchange/',
  // url: process.env.NODE_ENV === 'development' ? 'http://106.14.182.16:7001/' : 'http://localhost:8000/'
};
