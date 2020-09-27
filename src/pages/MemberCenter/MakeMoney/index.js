import React, { useState, useEffect } from 'react';
import { Card, Result, Button, Form, Modal } from 'antd';
import api from '@/api';
import QRCode from 'qrcode.react';
const MakeMoney = () => {
  const [visible, setVisible] = useState(false);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const r = await api.Weixin.getPayWeb();
      if (r) {
        setVisible(true);
        setCode(r);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }


  };
  return (
    <Card title="充值">
      <Result
        icon=""
        // status="success"
        title="点击续费会员"
        subTitle="按年计算，一年265元"
        extra={[
          <Button loading={loading} onClick={handleClick} type="primary" key="buy">去充值</Button>,
        ]}
      />
      <Modal title="请扫码续费" visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <QRCode
            id='qrid2'
            value={code} // value参数为生成二维码的链接
            size={110} // 二维码的宽高尺寸
            fgColor="#000000" // 二维码的颜色
          ></QRCode>
        </div>
      </Modal>
    </Card>
  );
};

export default MakeMoney;
