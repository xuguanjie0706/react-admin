import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Col, InputNumber, Upload, message } from 'antd';
import CustomModalContainer from '@/components/Custom/CustomModalContainer';
import { UNIT_ENUM } from '@/utils/enum';
import CustomUpload from '@/components/Custom/CustomApiFormItem/PeopleCardUpload';


const { Option } = Select;

const CustomForm = (props) => {
  const { defaultData, setFieldsValue, memberId } = props;

  const unitEnum = Object.entries(UNIT_ENUM);
  // const [isShow, setIsShow] = useState(false);
  const initLoad = async () => {
    // try {
    //   const r = await api.Role.getsomebysimple();
    //   setRoleList(r);
    // } catch (error) { }
  };


  useEffect(() => {
    initLoad();
    // setIsShow(defaultData._id);
  }, []);

  useEffect(() => {
    if (defaultData._id) {
      setFieldsValue(defaultData);
    }
  }, [defaultData._id]);

  return (
    <>
      <Form.Item name="_id" hidden>
        <Input />
      </Form.Item>
      <Form.Item name="_member" hidden initialValue={memberId}>
        <Input />
      </Form.Item>
      <Form.Item
        label="名称"
        name="name"
        rules={[{ required: true, message: '请输入名称' }]}
      >
        <Input allowClear placeholder="请输入名称" />
      </Form.Item>
      <Form.Item
        label="描述"
        name="value"
        rules={[{ required: true, message: '请输入描述' }]}
      >
        <Input allowClear placeholder="请输入描述" />
      </Form.Item>
      <Form.Item
        label="图片"
        name="img"
        rules={[{ required: true, message: '请上传图片' }]}
      >
        <CustomUpload desc="图片上传" />
      </Form.Item>
      <Form.Item
        label="价格"
        name="price"
        rules={[{ required: true, message: '请输入价格' }]}
      >
        <InputNumber style={{ width: 200 }} allowClear placeholder="请输入价格" />
      </Form.Item>
    </>
  );
};
export default CustomModalContainer(CustomForm);
