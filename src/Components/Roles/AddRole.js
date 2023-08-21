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
const AddRole = () => {
 
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
        <h1>Add Role</h1>
        <div className="blogdivision">
          <div className="addblog-main">
            <Form.Item id="Title">
              <label>New Role</label>
              <Input placeholder="Role"/>
            </Form.Item>
          </div>   
        </div>

      
        <div className="blogbtn">
          <Button type="primary" danger>
            Submit
          </Button>
          <NavLink to="/roles">
            <Button danger>Back</Button>
          </NavLink>
        </div>
      </Form>
    </div>
  );
};
export default AddRole;

