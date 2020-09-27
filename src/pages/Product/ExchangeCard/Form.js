import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Col, InputNumber, Upload, message } from 'antd';
import CustomModalContainer from '@/components/Custom/CustomModalContainer';
import api from '@/api';


const { Option } = Select;

const CustomForm = (props) => {
  const { defaultData, setFieldsValue, memberId } = props;

  const [goodsList, setGoodsList] = useState([]);
  const initLoad = async () => {

    try {
      const r = await api.Goods.getsomebysimple({
        _member: memberId
      });
      setGoodsList(r);
    } catch (error) { }
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
        label="编号"
        name="code"
      // rules={[{ required: true, message: '请输入名称' }]}
      >
        <Input allowClear placeholder="请输入编号" maxLength={4} />
      </Form.Item>
      <Form.Item
        label="商品"
        name="_goods"
        rules={[{ required: true, message: '请选择商品' }]}
      >
        <Select placeholder="请选择商品" mode="multiple">
          {goodsList.map(item => <Option key={item._id} value={item._id}>{item.name}</Option>)}
        </Select>
      </Form.Item>

      {!defaultData._id && <Form.Item
        label="张数"
        name="count"
        rules={[{ required: true, message: '请输入一次性生成的张数' }]}
        initialValue={1}
      >
        <InputNumber allowClear placeholder="请输入一次性生成的张数" />
      </Form.Item>}

    </>
  );
};
export default CustomModalContainer(CustomForm);
