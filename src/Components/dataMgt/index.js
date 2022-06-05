import React from 'react'
import { Nav,  NavMenu, NavItem, NavLink, Container, Navlogo } from './dataManagementElements'
import {  Avatar, Upload, Button,message } from 'antd';
import {
  UploadOutlined ,MenuOutlined,InboxOutlined
} from '@ant-design/icons';
import { IoMdNotificationsOutline } from 'react-icons/io';

const { Dragger } = Upload;
const propsA = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange(info) {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',

  previewFile(file) {
    console.log('Your upload file:', file); // Your process logic. Here we just mock to the same file

    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

const DataMgt = () => {
  return (
    <Container>
    <div>
    <Upload {...props}>
        <Button icon={<UploadOutlined />}> Upload Dataset </Button>
        </Upload>
        </div>
        <div>
        <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger>
        </div>
    </Container>
       

  )
}

export default DataMgt

