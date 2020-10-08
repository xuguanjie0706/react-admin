import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'antd';
import api from '@/api';
import './index.less';
// import { getArray } from '@/utils/index';


const Home = () => {

  // const [url, setUrl] = useState('');
  useEffect(() => {
    // api.Pic.getpic({ code: '3103955606524' }).then(r => {
    //   console.log(r);
    //   setUrl(r);
    // });

  }, []);
  return (
    <Card title="首页">
      欢迎您使用乐隐微信自助提货系统
      {/* <img src={url} alt="" /> */}
    </Card>
    // <div className="box">
    //   <div className="item"></div>
    // </div>
  );
};


export default Home;
