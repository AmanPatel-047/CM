// import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { Modal } from "antd";
import "../CommonPages/Table.css";
import { NavLink } from "react-router-dom";

// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };
const AddPages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
        <div className="blogdivision">
          <div className="addblog-main">
            <Form.Item id="Title">
              <label>Title</label>
              <Input />
            </Form.Item>

            <Form.Item>
              <label id="author">Author</label>
              <Input id="author" placeholder="Name" type="text" />
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
            <div className="table-main">
              <h1>Section</h1>

              <Button type="primary" onClick={showModal} danger>
                Add
              </Button>
            </div>
            Hello Hello
            <div>
              <Modal
                title="Add Section"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okType="default"
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </div>
          </div>
        </div>
        <div className="blogbtn">
          <Button type="primary" danger>
            Submit
          </Button>
          <NavLink to="/pages">
            <Button danger>Back</Button>
          </NavLink>
        </div>
      </Form>
    </div>
  );
};
export default AddPages;
