import React from 'react';
import { Input, Form, Row, Col, Select } from 'antd';
// import DateFilter from '@/components/CustomFormItem/DateFilter';
// import SearchSelect from '@/components/CustomApiFormItem/SearchSelect';
// import moment from 'moment';

const { Option } = Select;
const Search = (props) => {
  const { STATUS_USE_ENUM = [], form, defaultSearchData } = props;
  const statusUseEnum = Object.entries(STATUS_USE_ENUM);
  form.setFieldsValue(defaultSearchData);
  return (
    <Row>
      <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={6}>
        <Form.Item
          name="name"
          label="名称"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input allowClear placeholder="请输入名称" />
        </Form.Item>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={6}>
        <Form.Item
          name="card"
          label="卡号"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Input allowClear placeholder="请输入卡号" />
        </Form.Item>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={6}>
        <Form.Item
          name="status"
          label="状态"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Select allowClear placeholder="请选择状态" >
            {statusUseEnum.map(item => <Option key={item[0]} value={item[0]}>{item[1]}</Option>)}
          </Select>
        </Form.Item>
      </Col>
    </Row >
  );
};

export default Search;
