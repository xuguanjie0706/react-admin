import React, { useEffect, useState } from 'react';
import { Form, Input, Select, DatePicker, InputNumber, Upload, message } from 'antd';
import CustomModalContainer from '@/components/Custom/CustomModalContainer';
import moment from 'moment';

const { Option } = Select;

const CustomForm = (props) => {
  const { defaultData, setFieldsValue, memberId, form } = props;

  const [isReady, setIsReady] = useState(false);
  const initLoad = async () => {
    // try {
    //   const r = await api.Role.getsomebysimple();
    //   setRoleList(r);
    // } catch (error) { }
  };


  useEffect(() => {
    initLoad();
    setFieldsValue(defaultData);
    setIsReady(true);
  }, []);


  return (
    <>{
      isReady && <><Form.Item name="_id" hidden>
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
          <Input readOnly placeholder="请输入名称" />
        </Form.Item>
        <Form.Item name="overtime" hidden initialValue={moment(moment().add(1, 'year').format('YYYY-MM-DD') + ' 00:00:00').valueOf()}>
          <Input />
        </Form.Item>
        <Form.Item name="time" label="过期时间"
          initialValue={moment().add(1, 'year')}
          rules={[{ required: true, message: '请选择过期时间' }]}
          getValueFromEvent={(value) => {
            const _data = { overtime: moment(moment(value).format('YYYY-MM-DD') + ' 00:00:00').valueOf() };
            form().setFieldsValue(_data);
            // console.log(_data);
            return value;
          }}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
      </>
    }
    </>
  );
};
export default CustomModalContainer(CustomForm);
