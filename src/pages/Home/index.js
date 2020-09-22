import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import request from '@/utils/request'
import './index.less'
import { getArray } from "@/utils/index"


const Home = () => {
  useEffect(() => {
    // [null, 3, 4].forEach(alert)
    // request.post({ url: "administrator/login", isMock: true }).then(r => {
    //   console.log(r);
    // })

    const a = `下单成功  S001
进入页面  S002
离开页面  S003
IM初始化--已有IM-未登录  S004
IM初始化--已有IM-已登录  S005
IM登陆成功  S006
IM登陆失败  S007
接收IM消息--分诊转诊  S008
接收IM消息--接诊  S009
接收IM消息--订单结束  S010
接收IM消息--其他  S011
接收呼叫-页面外  S012
接收呼叫-页面内  S013
进入视频  S014
通话退出  S015
呼叫取消  S016
切换语音模式  S017
对端摄像头关闭  S018
对端摄像头开启  S019
链接成功获取拉流地址  S020
链接成功获取推流地址  S021
校验会议室结果  S022
获取医生信息  S023
获取医生信息成功  S024
开始选择图片  S025
开始上传图片  S026
接听视频  S027
手动挂断  S028
根据roomId重新加入视频  S029
切换摄像头  S030
拉流网络日志  S031
推流网络日志  S032
推流日志  S033
拉流日志  S034
异常错误  S999`
    const b = getArray(a, ["name", "code"])
    console.log(b);
  }, [])
  return (
    <div className="box">
      <div className="item"></div>
    </div>
  );
};



export default Home;
