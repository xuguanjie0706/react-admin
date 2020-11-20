
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import api from '@/api';
const MakeMoney = () => {
  const [url, setUrl] = useState('');
  const [desc, setDesc] = useState({});

  const initLoad = async () => {
    const r = await api.Config.getonebysimple({
      name: '新手教程'
    });
    console.log(r);
    if (r && r !== true) {
      setUrl(r);
    }
    const result = await api.Article.getonebysimple({
      name: '新手内容'
    });
    if (result && result !== true) {
      setDesc(result);
    }
  };

  useEffect(() => {
    initLoad();
  }, []);

  return (
    <>
      <Card title="视频教程">
        <video width="100%" controls src={url ? url.value : 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}></video>
      </Card>
      <Card style={{ marginTop: 10 }} title="文字教程">
        <div
          dangerouslySetInnerHTML={{ __html: desc.value }}>
        </div>
      </Card>
    </>
  );
};

export default MakeMoney;
