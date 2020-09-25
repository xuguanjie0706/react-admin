import React, { useState, useEffect } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import config from '@/utils/config';
import api from '@/api';


function setFileList(arr) {
  return arr.map((item, index) => {
    const obj = {};
    obj.url = config.url + item;
    obj.uid = index;
    obj.name = 'image' + index + '.png';
    return obj;
  });
}
const UploadPic = (props) => {
  const {
    value = [],
    onChange,
  } = props;
  const [list, setlist] = useState([]);
  const [imgList, setImgList] = useState([]);

  // useEffect(() => {
  //   if (value) {
  //     setlist(setFileList(value));
  //   }

  // }, [value]);

  useEffect(() => {
    if (value) {
      setlist(value);
    }
  }, []);

  useEffect(() => {
    setImgList(setFileList(list));
  }, [list]);

  const fileList = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'error',
    },
  ];

  const upload = async (e) => {
    console.log(e);
    const { file } = e;

    const formData = new FormData();
    formData.append('files', file);
    const r = await api.File.upload({ data: formData });
    if (r) {
      const _list = [...list, r];
      setlist(_list);
      onChange(_list);
      // const absoluteUrl = config.url + r;
      // console.log(absoluteUrl);
      // onChange(r);
      // setImageUrl(absoluteUrl);
    }
    // customRequest;
  };

  const remove = (e) => {
    const _list = list.filter(item => e.url.indexOf(item) === -1);
    setlist(_list);
    onChange(_list);
  };
  return <div>
    <Upload
      onRemove={remove}
      listType="picture"
      customRequest={upload}
      fileList={[...imgList]}
    >
      <Button icon={<UploadOutlined />}>图片上传</Button>
    </Upload>
  </div>;
};

export default UploadPic;
