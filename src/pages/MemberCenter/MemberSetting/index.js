import React, { useState, useEffect } from 'react';
import { Card, Descriptions, Form, Input, Button, message } from 'antd';
import QRCode from 'qrcode.react';
import { connect } from 'umi';
import api from '@/api';
import CustomUpload from '@/components/Custom/CustomApiFormItem/PeopleCardUpload';

const MakeMoney = (props) => {
  console.log(props);

  const { user: { _id, phone } } = props;
  // const [data, setData] = useState({});

  const [form] = Form.useForm();
  const { setFieldsValue } = form;

  const initData = async () => {
    const r = await api.MemberSetting.getonebysimple({ _member: _id });
    if (r && r !== true) {
      // setData(r);
      setFieldsValue(r);
    }
  };
  useEffect(() => {
    initData();
  }, []);

  const onFinish = async (values) => {
    console.log(values);
    const r = await api.MemberSetting.editoradd(values);
    if (r) {
      message.success('更新成功！');
    }
  };

  return (
    <Card title="个性化配置">
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="_id" hidden >
          <Input />
        </Form.Item>
        <Form.Item name="_member" hidden initialValue={_id} >
          <Input />
        </Form.Item>
        <Descriptions bordered column={2}>
          <Descriptions.Item label="软件标题" >
            <Form.Item name="name" >
              <Input.TextArea placeholder="请输入软件标题" />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label="客服联系方式" >
            <Form.Item name="phone" >
              <Input.TextArea placeholder="请输入客服联系方式" />
            </Form.Item>
          </Descriptions.Item>
          {/* <Descriptions.Item label="提示信息" >
            <Form.Item>
              <Input.TextArea placeholder="请输入提示信息" />
            </Form.Item>
          </Descriptions.Item> */}
          <Descriptions.Item label="软件背景图" span={1}>
            <Form.Item name="img">
              <CustomUpload styles={{ width: 160, height: 160 }} desc="图片上传" />
            </Form.Item>
          </Descriptions.Item>
          <Descriptions.Item label="扫码绑定微信" span={1}>
            <QRCode
              id='qrid'
              value={`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx45d398e7c87a97f6&redirect_uri=http%3A%2F%2Fpick.yystart.com%2Fmobile%2F%23%2Fhome&response_type=code&scope=snsapi_base&state=${_id}#wechat_redirect`} // value参数为生成二维码的链接
              size={110} // 二维码的宽高尺寸
              fgColor="#000000" // 二维码的颜色
            />
          </Descriptions.Item>
        </Descriptions>
        <Button htmlType="submit" style={{ marginTop: 10 }} type="primary">提交</Button>
      </Form>
    </Card>
  );
};

export default connect(({ user }) => ({ user: user.data }))(MakeMoney);
