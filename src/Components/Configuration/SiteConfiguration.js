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




const SiteConfiguration = () => {
 
  return (
    <div className="addblog">
      <h1>Site Configuration</h1>
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
        <div className="blogdivision">
          <div className="addblog-main">
            <Form.Item id="Title">
              <label>Title</label>
              <Input placeholder="title"/>
            </Form.Item>
            <Form.Item id="Title">
              <label>Tagline</label>
              <Input placeholder="Tagline"/>
            </Form.Item>
            <Form.Item id="Title">
              <label>Email</label>
              <Input type="email" placeholder="Email"/>
            </Form.Item>
            <Form.Item id="Title">
              <label>default Role</label>
              <Input placeholder="Role"/>
            </Form.Item>
            <Form.Item id="Title">
              <label>Date</label>
              <Input type="date" placeholder="Date"/>
            </Form.Item>
            <Form.Item id="Title">
              <label>Time</label>
              <Input type="time" placeholder="Time"/>
            </Form.Item>
            <Form.Item id="Title">
              <label>Copyright</label>
              <Input placeholder="Cpyright Text"/>
            </Form.Item>
            <Form.Item id="Title">
              <label>Contact</label>
              <Input type="number" placeholder="Contact"/>
            </Form.Item>
            <Form.Item id="Title">
              <label>Logo</label>
              <Input type="file" placeholder="Logo"/>
            </Form.Item>
            <Form.Item id="Title">
                <label>Text Logo</label>
              <Input placeholder="Text Logo"/>
            </Form.Item>
            <Form.Item id="Title">
              <label>Site Favicon</label>
              <Input type="file" />
            </Form.Item>
            <Form.Item id="Title">
              <label>Location</label>
              <Input type="url" placeholder="Location"/>
            </Form.Item>
           
            
          </div>   
        </div>

      
        <div className="sitebtn">
          <Button type="primary" danger>
            Submit
          </Button>
          <NavLink to="/socialconfig">
            <Button danger>Social Links</Button>
          </NavLink>
        </div>
      </Form>
    </div>
  );
};
export default SiteConfiguration;

