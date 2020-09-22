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
              name: "用户管理",
              component: "@/pages/System/User"
            },]
          },
          {
            path: 'setting',
            name: "配置管理",
            authority: 'setting',
            routes: [{
              path: "configList",
              authority: 'config',
              name: "参数配置",
              component: "@/pages/SettingManage/configView"
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
