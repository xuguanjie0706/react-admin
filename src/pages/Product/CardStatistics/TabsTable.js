import React, { useState, useEffect } from 'react';
import CustomTable from '@/components/Custom/CustomTable';
import { Tabs } from 'antd';
import api from '@/api';
import moment from 'moment';

const { TabPane } = Tabs;
const CustomTabsTable = (props) => {
  const { tabList, tableChild, form, columns } = props;
  const [status, setStatus] = useState('1');
  const [trueColumns, setColumns] = useState(columns);
  const getColumns = (type) => {
    return [
      {
        title: '权益套餐',
        // dataIndex: 'pkgName',
        key: 'pkgName',
        render: (text) => `${text.pkgName}${text.renewalDesc ? '(' + text.renewalDesc + ')' : ''}`
      },
      {
        title: '权益类型',
        dataIndex: 'rightsType',
        key: 'rightsType',
        render: text => INTERESTS_TYPES_LIST[text]
      },
      {
        title: Number(type) === 1 ? '分发时间' : '退订时间',
        dataIndex: 'opTime',
        key: 'opTime',
        render: text => <span>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</span>
      },
      {
        title: Number(type) === 1 ? '分发数量' : '退订数量',
        dataIndex: 'opCnt',
        key: 'opCnt',
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: '失败记录',
        dataIndex: 'failureRecord',
        key: 'failureRecord',
        render: text => {
          return text ? <span className="span-primit " onClick={() => handleError(text, Number(type) === 1 ? '分发失败' : '退订失败')}>查看</span> : '-';
        }
      },
    ];
  };
  useEffect(() => {
    setColumns([...getColumns(status)]);
  }, [status]);

  const callback = async (key) => {
    console.log(123);
    await setStatus(key);
    // form.set
    tableChild && tableChild.initData(form.getFieldsValue(), true);
  };

  return (
    <>
      <Tabs type="card" defaultActiveKey={status} onChange={callback}>
        {tabList.map(item => <TabPane tab={item.title} key={item.key} />)
        }
      </Tabs>
      <CustomTable
        {...props}
        rowKey="id"
        columns={trueColumns}
      // request={Number(status) === 1 ? api.batchSubscribeManage.listSubscribeRecord : api.batchSubscribeManage.listUnsubscribeRecord}
      />
    </>
  );
};

export default CustomTabsTable;
