import React, { useState, useEffect } from 'react';
import ProLayout, { getMenuData } from '@ant-design/pro-layout';
import { Link, connect, Router } from 'umi';
import Icon, { HomeOutlined, createFromIconfontCN } from '@ant-design/icons';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import logo from '@/assets/icon_logo.png';
import RightContent from './RightContent';
import api from '@/api';

interface location {
  pathname: string;
}

interface history {
  location: location;
}
interface props {
  route: Route;
  children: any;
  collapsed: boolean;
  dispatch: any;
  history: any;
  status: boolean;
}
interface MenuDataItem {
  authority?: string[] | string;
  children?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string;
  locale?: string;
  name?: string;
  path: string;
}
interface MenuDataItem {
  authority?: string[] | string;
  children?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string;
  locale?: string;
  name?: string;
  path: string;
  [key: string]: any;
}

interface Route {
  path: string;
  history: any;
  routes: Array<{
    exact?: boolean;
    icon: string;
    name: string;
    path: string;
    hideInMenu: boolean;
    // optional secondary menu
    children?: Route['routes'];
  }>;
}
// const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => {
//   return menuList.map(item => {
//     const localItem = {
//       ...item,
//       children: item.children ? menuDataRender(item.children) : [],
//     };
//     return Authorized.check(item.authority, localItem, null) as MenuDataItem;
//   });
// };
// const MyIcon = createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_1186596_28kbipxildf.js', // 在 iconfont.cn 上生成
// });

const Custom = (props: any) => {
  // console.log(props);
  const { children, route, collapsed, dispatch, history, user } = props;

  const [currentSelectedMenu, setCurrentSelectedMenu] = useState([]);
  const {
    location: { pathname },
  } = history;
  // console.log(user);

  const [showRoute, setShowRoute] = useState(route);

  const getCustomRoute = (routes, role) => {
    const resultRoute = routes.filter(item => {
      if (item.authority) {
        return role.includes(item.authority);
      } else {
        return true;
      }
    });
    return resultRoute.map(item => {
      if (item.routes) {
        return {
          ...item,
          routes: getCustomRoute(item.routes, role),
        };
      } else {
        return item;
      }
    });
  };
  const initData = async () => {
    if (!user.status) {
      const _r = await dispatch({
        type: 'user/check',
      });
    }
    // console.log(user);
  };
  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    const r = getCustomRoute(route.routes, user.roles);
    // console.log(r, route.routes, user.roles);
    // const r = route.routes.map(item => {
    //   const obj = { ...item };
    //   /* 进行菜单的筛选 */
    //   console.log(obj);

    //   // if (obj.name === '安愈诊室') {
    //   //   obj.hideInMenu = true;
    //   // }
    //   return obj;
    // });

    const copyRoute = { ...route };
    copyRoute.routes = r;
    setShowRoute(copyRoute);
    // console.log(user.status);
  }, [user]);

  useEffect(() => {
    setCurrentSelectedMenu(pathname);
  }, [pathname]);

  /* 控制菜单伸缩 */
  const handleMenuCollapse = (payload: any) => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  };

  return (
    <>
      <ProLayout
        // logo={logo}
        // title="后台管理"
        fixSiderbar
        loading={false}
        fixedHeader
        collapsed={collapsed}
        locale="zh-CN"
        siderWidth={240}
        onCollapse={handleMenuCollapse}
        // onPageChange={e => console.log(e)} //页面改变是执行
        onMenuHeaderClick={e => {
          e.preventDefault();
        }}
        menuItemRender={(menuItemProps: any, defaultDom) => {
          if (
            menuItemProps.isUrl ||
            menuItemProps.children ||
            !menuItemProps.path
          ) {
            return defaultDom;
          }
          return (
            <div
              onClick={() => {
                history.push(menuItemProps.path);
              }}
            >
              {defaultDom}
            </div>
          );
        }}
        selectedKeys={currentSelectedMenu}
        breadcrumbRender={(routers = []) => [
          {
            path: '/',
            breadcrumbName: 'Home',
          },
          ...routers,
        ]}
        itemRender={(route, params, routes, paths) => {
          const first = routes.indexOf(route) === 0;
          return first ? (
            <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
          ) : (
            <span>{route.breadcrumbName}</span>
          );
        }}
        // menuDataRender={menuDataRender}
        // iconfontUrl="//at.alicdn.com/t/font_1930597_j598m0qrd4g.js"
        route={showRoute}
        rightContentRender={() => RightContent({ dispatch })} // 导航栏上方（page 上方）
      >
        {children}
        {/* <ConfigProvider locale={zhCN}>{children}</ConfigProvider> */}
      </ProLayout>
    </>
  );
};

export default connect(({ global, user }) => ({
  collapsed: global.collapsed,
  user: user,
}))(Custom);
