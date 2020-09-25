import React from 'react';
import { Card, Result, Button, Form } from 'antd';

const MakeMoney = () => {


  return (
    <Card title="充值">
      <Result
        icon=""
        // status="success"
        title="充值请扫码"
        subTitle="按年计算，一年265元"
        extra={[
          <Button type="primary" key="buy">去充值</Button>,
        ]}
      /></Card>
  );
};

export default MakeMoney;
