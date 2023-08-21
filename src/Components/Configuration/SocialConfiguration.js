// import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import { Button, Form, Input} from "antd";
// import { Modal } from "antd";
import "../CommonPages/Table.css";
import { NavLink } from "react-router-dom";

// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };
const SocialConfiguration = () => {
 
  return (
    <div className="addblog">
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 22,
        }}
        layout="horizontal"
        style={{}}
      >
        <h1>Add Social Media Links</h1>
        <div className="blogdivision">
          <div className="addblog-main">
            <Form.Item id="Title">
              <label>Instagram </label>
              <Input type="url" placeholder="Enter Instagram URL"/>
            </Form.Item>
            <Form.Item id="Title">
              <label>FaceBook </label>
              <Input type="url" placeholder="Enter Facebook URL"/>
            </Form.Item>
            <Form.Item id="Title">
              <label>Twitter </label>
              <Input type="url" placeholder="Enter Twitter URL"/>
            </Form.Item>
            <Form.Item id="Title">
              <label>LinkedIn </label>
              <Input type="url" placeholder="Enter LinkedIn URL"/>
            </Form.Item>
          </div>   
        </div>

      
        <div className="blogbtn">
          <Button type="primary" danger>
            Submit
          </Button>
          <NavLink to="/configuration">
            <Button danger>Back</Button>
          </NavLink>
        </div>
      </Form>
    </div>
  );
};
export default SocialConfiguration;