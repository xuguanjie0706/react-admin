import React from 'react';
import { Card, Descriptions, Form, Input, Button } from 'antd';
import QRCode from 'qrcode.react';
const MakeMoney = () => {

  const [form] = Form.useForm();
  return (
    <Card title="个性化配置">
      <Form form={form}>
        <Descriptions bordered>
          <Descriptions.Item label="软件标题" >
            <Form.Item>
              <Input.TextArea placeholder="请输入软件标题" />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label="联系方式" >
            <Form.Item>
              <Input.TextArea placeholder="请输入联系方式" />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label="提示信息" >
            <Form.Item>
              <Input.TextArea placeholder="请输入提示信息" />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label="软件背景图" span={3}>
            <Form.Item>

            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label="扫码绑定微信" span={3}>
            <QRCode
              id='qrid'
              value={1234} // value参数为生成二维码的链接
              size={110} // 二维码的宽高尺寸
              fgColor="#000000" // 二维码的颜色
            />
          </Descriptions.Item>
        </Descriptions>
        <Button style={{ marginTop: 10 }} type="primary">提交</Button>
      </Form>
    </Card>
  );
};

export default MakeMoney;
