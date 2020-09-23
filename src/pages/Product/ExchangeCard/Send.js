import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Col, InputNumber, Upload, message } from 'antd';
import CustomModalContainer from '@/components/Custom/CustomModalContainer';
import api from '@/api';


const { Option } = Select;

const CustomForm = (props) => {
  const { defaultData, setFieldsValue, } = props;

  const initLoad = async () => {

  };


  useEffect(() => {
    initLoad();
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
      <Form.Item
        label="单号"
        name="sendNumber"
        rules={[{ required: true, message: '请输入单号' }]}
      >
        <Input allowClear placeholder="请输入单号" />
      </Form.Item>

    </>
  );
};
export default CustomModalContainer(CustomForm);
