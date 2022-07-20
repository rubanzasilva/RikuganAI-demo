import React, { Component } from 'react'
import { Nav,  NavMenu, NavItem, NavLink, Container, Navlogo } from './dataManagementElements'
import {  Avatar, Upload, Button,message } from 'antd';
import {
  UploadOutlined ,MenuOutlined,InboxOutlined
} from '@ant-design/icons';
import { IoMdNotificationsOutline } from 'react-icons/io';

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

class DataMgt extends Component {
  state = { fileUrl:'', file:'', fileName:'' }

  //Function to handle changes to the file
  handleChange = e => { 
    const file = e.target.files[0];
    this.setState({ fileUrl: URL.createObjectURL(file), file, fileName:file.name });
  }

  //function to save files to s3 bucket
  saveFile = () => {
    Storage.put(this.state.fileName, this.state.file)
    .then(() => {
      console.log('file saved to S3');
      this.setState({ fileUrl:'', file:'', fileName:'' })
      .catch(err => console.log(err))
    })
  render() {
    return (
      <div>
      </div>
    )
  }
}

const DataMgt = () => {
  state = { fileUrl:'', file:'', fileName:'' }

  //Function to handle changes to the file
  handleChange = e => { 
    const file = e.target.files[0];
    this.setState({ fileUrl: URL.createObjectURL(file), file, fileName:file.name });
  }

  //function to save files to s3 bucket
  saveFile = () => {
    Storage.put(this.state.fileName, this.state.file)
    .then(() => {
      console.log('file saved to S3');
      this.setState({ fileUrl:'', file:'', fileName:'' })
      .catch(err => console.log(err))
    })

  return (
    <Container>
    <div>
    <Upload {...props}>
        <Button icon={<UploadOutlined />}> Upload Dataset </Button>
        <Button icon={<AmplifyS3Album />}> Upload Dataset </Button> 
        </Upload>
        </div>
        <div>
        <Dragger {...props}>
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
    <AmplifyS3Album /> 
    </Container>
       

  )
}
}3

export default withAuthenticator(DataMgt, {includeGreetings: true})
