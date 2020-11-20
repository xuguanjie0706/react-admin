import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Col, InputNumber, Upload, message } from 'antd';
import CustomModalContainer from '@/components/Custom/CustomModalContainer';
import { UNIT_ENUM } from '@/utils/enum';

import EditorEl from '@/components/Custom/CustomFormItem/EditorEl';

const { Option } = Select;

const CustomForm = (props) => {
  const { defaultData, setFieldsValue } = props;
  const [isReady, setIsReady] = useState(false);
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
    setFieldsValue(defaultData);
    setIsReady(true);
  }, []);

  return (
    <>{
      isReady && <>
        <Form.Item name="_id" hidden>
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
          label="内容"
          name="value"
          rules={[{ required: true, message: '请输入内容' }]}
        >
          <EditorEl />
        </Form.Item>

      </>
    }
    </>
  );
};
export default CustomModalContainer(CustomForm);
