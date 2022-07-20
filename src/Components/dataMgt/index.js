import React, { Component, useState } from 'react'
import { Nav,  NavMenu, NavItem, NavLink, Container, Navlogo } from './dataManagementElements'
import {  Avatar, Upload, Button,message } from 'antd';
import {
  UploadOutlined ,MenuOutlined,InboxOutlined
} from '@ant-design/icons';
import { IoMdNotificationsOutline } from 'react-icons/io';
import 'antd/dist/antd.css';


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
//import useAmplifyAuth from './useAmplifyAuth';

const DataMgt = () => {
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
      const fileContent = e.target.files[0]
      /*const fileName = e.target.files[0].name*/
      const fileType = e.target.files[0].type

      
      let ext = fileContent.name.split(".").pop().toLowerCase();
      let fileFormats = ["csv"];
      if (!fileFormats.includes(ext)) {
          console.log("Invalid file format");
          return false;
      }
      
      let fileName =
          "data/" +
          fileContent.name.substr(0, fileContent.name.indexOf(ext) - 1) +
          "." +
          ext;
      try {
          setLoading(true);

          // Upload the file to s3 with private access level.
          await Storage.put(fileName, fileContent, {
              contentType: fileType,
              level: 'private',
              progressCallback(progress) {
                  console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
              },
          })
          
          setLoading(false);
      } catch (err) {
          console.log(err);
      }
  }



  return (
    <Container>
    <div>
    <h1> Upload CSV File to S3 </h1>
                        {loading ? <h3>Uploading...</h3> : 
                        <input
                            type="file" accept="text/csv"
                            placeholder="Enter a text"
                            onChange={(evt) => handleChange(evt)}
                        />}
    </div>
    </Container>
       

  )
}


export default withAuthenticator(DataMgt)
