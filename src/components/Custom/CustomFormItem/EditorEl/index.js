import React, { Component } from 'react';
// import Config from "../../utils/config"
import E from 'wangeditor';

class EditorEl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initEditor();
    console.log(this.props.value);
    this.editor.txt.html(this.props.value);
  }


  initEditor = () => {
    const that = this;
    const elem = this.refs.editorElem;
    const editor = new E(elem);
    this.editor = editor;
    // editor.customConfig.zIndex = 100;
    // editor.customConfig.uploadFileName = 'file'; // 置上传接口的文本流字段
    // // editor.customConfig.uploadImgServer = Config.url + 'upload/filesbyreact'//服务器接口地址
    // // 限制一次最多上传 1 张图片
    // editor.customConfig.uploadImgMaxLength = 1;
    // editor.customConfig.customUploadImg = function (files, insert) {
    //   // files 是 input 中选中的文件列表
    //   // console.log(files)
    //   if (files[0]) {
    //     const formData = new window.FormData();
    //     formData.append('file', files[0], 'cover.jpg');
    //     // fetch(Config.url + 'upload/filesbyreact', {
    //     //   method: 'POST',
    //     //   body: formData
    //     // }).then((res) => {
    //     //   return res.json()
    //     // }).then((res) => {
    //     //   if (res.code === 0) {
    //     //     insert(Config.url + res.data)
    //     //   }
    //     // })
    //   } else {
    //     // message.info('請選擇要上傳的圖片')
    //   }
    // };

    editor.config.onchange = function (html) {
      // html 即变化之后的内容
      that.props.onChange(html);
    };

    // editor.customConfig.menus = [
    //   'head', // 标题
    //   'bold', // 粗体
    //   'fontSize', // 字号
    //   // 'fontName', // 字体
    //   'italic', // 斜体
    //   'underline', // 下划线
    //   'strikeThrough', // 删除线
    //   'foreColor', // 文字颜色
    //   // 'backColor', // 背景颜色
    //   'link', // 插入链接
    //   'list', // 列表
    //   'justify', // 对齐方式
    //   'quote', // 引用
    //   // 'emoticon', // 表情
    //   'image', // 插入图片
    //   // 'table', // 表格
    //   // 'video', // 插入视频
    //   // 'code', // 插入代码
    //   'undo', // 撤销
    //   'redo' // 重复
    // ];
    // editor.customConfig.lang = {
    //   '设置标题': 'Title',
    //   '字号': 'Size',
    //   '文字颜色': 'Color',
    //   '设置列表': 'List',
    //   '有序列表': '',
    //   '无序列表': '',
    //   '对齐方式': 'Align',
    //   '靠左': '',
    //   '居中': '',
    //   '靠右': '',
    //   '正文': 'p',
    //   '链接文字': 'link text',
    //   '链接': 'link',
    //   // '上传图片': 'Upload',
    //   '网络图片': 'Web',
    //   '图片link': 'image url',
    //   '插入视频': 'Video',
    //   '格式如': 'format',
    //   '上传': 'Upload',
    //   '创建': 'init'
    // };
    editor.create();
  }
  render() {
    return (
      <div ref='editorElem' style={{ textAlign: 'left' }} />
    );
  }
}

export default EditorEl;

