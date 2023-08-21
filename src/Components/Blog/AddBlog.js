import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import '../CommonPages/Table.css'
import { NavLink } from "react-router-dom";

const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const AddBlog = () => {
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
        style={{
         
        }}
      >
        <div className="blogdivision">
        <div className="addblog-main">
          <Form.Item id="Title">
            <label>Title</label>
            <Input />
          </Form.Item>

          <Form.Item id="BlogContent">
            <label>BlogContent</label>
            <TextArea rows={4} />
          </Form.Item>
        </div>

        <div className="addblog-main">
          <Form.Item id="Status">
            <label>Status</label>
            <Select>
              <Select.Option value="pending">Pending</Select.Option>
              <Select.Option value="publish">Publish</Select.Option>
            </Select>
          </Form.Item>

            <label>PublishOn</label>
          <Form.Item id="PublishOn">
            <DatePicker />
          </Form.Item>
        </div>
        </div>

        <div className="blogdivision">
        <div className="addblog-main">
          <Form.Item >
            <label id="author">Author</label>
            <Input id="author" placeholder="Name" type="text"/>
          </Form.Item>
        </div>

        <div className="addblog-main">
          <Form.Item
            id="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            >
              <label>Upload</label>
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>

        </div>
        </div>
          <div className="blogbtn" >
            <Button type="primary" danger>Submit</Button>
            <NavLink to='/blog'>
            <Button danger>Back</Button>
            </NavLink>
          </div>
         
        
      </Form>
    </div>
  );
};
export default AddBlog;
