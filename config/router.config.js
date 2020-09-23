export default [
  {
    path: '/',
    component: '@/layouts/SecurityLayout',
    routes: [
      {
        path: 'login',
        component: '@/layouts/Login',
      },
      {
        path: '/',
        component: '@/layouts/index',
        routes: [
          // {
          //   path: 'home',
          //   name: "首页",
          //   component: '@/pages/Home',
          // },
          {
            path: 'system',
            name: "系统管理",
            authority: 'manage',
            routes: [{
              path: "menuList",
              authority: 'menu',
              name: "菜单管理",
              component: "@/pages/System/Menu"
            },
            {
              path: "roleList",
              authority: 'role',
              name: "角色管理",
              component: "@/pages/System/Role"
            },
            {
              path: "userList",
              authority: 'user',
              name: "用户管理",
              component: "@/pages/System/User"
            },
            {
              path: "merchantList",
              authority: 'merchant',
              name: "商户管理",
              component: "@/pages/System/Merchant"
            },
            ]
          },
          {
            path: 'setting',
            name: "配置管理",
            authority: 'setting',
            routes: [{
              path: "configList",
              authority: 'config',
              name: "参数配置",
              component: "@/pages/SettingManage/ConfigView"
            },
            {
              path: "pictureList",
              authority: 'picture',
              name: "图片配置",
              component: "@/pages/SettingManage/PictureView"
            },
            ]
          },
          {
            path: 'product',
            name: "产品中心",
            authority: 'Product',
            routes: [{
              path: "goodsList",
              authority: 'Goods',
              name: "自营商品",
              component: "@/pages/Product/Goods"
            },
            {
              path: "ExchangeCard",
              authority: 'ExchangeCard',
              name: "兑换卡商品",
              component: "@/pages/Product/ExchangeCard"
            },
            ]
          },
          {
            component: '@/layouts/404',
          },
        ],
      },
      {
        component: '@/layouts/404',
      },
    ],
  },
  {
    component: '@/layouts/404',
  },
];
