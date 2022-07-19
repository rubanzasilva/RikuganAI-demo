import React, { Component } from 'react'
import { Nav,  NavMenu, NavItem, NavLink, Container, Navlogo } from './dataManagementElements'
import {  Avatar, Upload, Button,message } from 'antd';
import {
  UploadOutlined ,MenuOutlined,InboxOutlined
} from '@ant-design/icons';
import { IoMdNotificationsOutline } from 'react-icons/io';
import 'antd/dist/antd.css';
// import './index.css';

//import { configureAmplify, SetS3Config } from "./services";


import { API, Storage } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


import Amplify from "aws-amplify";
import {AmplifyS3Album} from "@aws-amplify/ui-react/legacy";
import { inputClasses } from '@mui/material';
// import awsconfig from "./aws-exports";

// Amplify.configure(awsconfig);

// import { UploadOutlined } from '@ant-design/icons';
// import { Button, message, Upload } from 'antd';



const { Dragger } = Upload;

// const propsA = {
//   name: 'file',
//   multiple: true,
//   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

//   onChange(info) {
//     const { status } = info.file;

//     if (status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }

//     if (status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },

//   onDrop(e) {
//     console.log('Dropped files', e.dataTransfer.files);
//   },
// };

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'text, picture, picture-card',

  previewFile(file) {
    console.log('Your upload file:', file); // Your process logic. Here we just mock to the same file

    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },

onChange(info) {
  if (info.file.status !== 'uploading') {
    let reader = new FileReader();
     reader.onload = (e) => {
        console.log(e.target.result);
     }
     reader.readAsText(info.file.originFileObj);
 }
 if (info.file.status === 'done') {
   message.success(`${info.file.name} file uploaded successfully`);
 } else if (info.file.status === 'error') {
   message.error(`${info.file.name} file upload failed.`);
  }
}
}

// onChange(info) {
//   if (info.file.status !== 'uploading') {
//      let reader = new FileReader();
//       reader.onload = (e) => {
//          console.log(e.target.result);
//       }
//       reader.readAsText(info.file.originFileObj);
//   }
//   if (info.file.status === 'done') {
//     message.success(`${info.file.name} file uploaded successfully`);
//   } else if (info.file.status === 'error') {
//     message.error(`${info.file.name} file upload failed.`);
//   }
// }


const DataMgt = () => {

  return (
    <Container>
    <div>
    <Upload accept='.txt, .csv' showUploadList={true}  {...props}>
        <Button icon={<UploadOutlined />}> Upload Dataset </Button>
        {/* <Button icon={<AmplifyS3Album />}> Upload Dataset </Button>  */}
        </Upload>
        </div>
        {/* <div> */}
        {/* <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
      <AmplifyS3Album />

    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </Dragger> 
        </div>

         <h1 style={{'text-align':'center'}}>My Gallery</h1>        
    <AmplifyS3Album />  */}
    </Container>
       

  )
}


export default withAuthenticator(DataMgt)
