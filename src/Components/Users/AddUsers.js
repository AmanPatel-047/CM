import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import { Button, Form, Input, Upload } from "antd";
import '../CommonPages/Table.css'
import { NavLink } from "react-router-dom";


const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const AddUser = () => {
    return (
       
        <div className="adduser">
                <h1>Add User</h1>
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
                            <Form.Item id="Name">
                                <label>Name</label>
                                <Input />
                            </Form.Item>
                            <Form.Item id="Email">
                                <label>Email</label>
                                <Input />
                            </Form.Item>
                            <Form.Item id="Password">
                                <label>Password</label>
                                <Input />
                            </Form.Item>
                            <Form.Item id="CofirmPassword">
                                <label>Confirm Password</label>
                                <Input />
                            </Form.Item>
                            <Form.Item id="Role">
                                <label>Role</label>
                                <Input />
                            </Form.Item>
                        </div>

                        <div className="adduser-upload">

                            <Form.Item
                                id="Upload"
                                valuePropName="fileList"
                                getValueFromEvent={normFile}
                            >
                                <label>Upload Profile Image</label>
                                <Upload action="/upload.do" listType="picture-card">
                                    <div>
                                        <PlusOutlined />
                                        <div
                                            style={{
                                                marginTop: 10,
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
                        <NavLink to='/users'>
                            <Button danger>Back</Button>
                        </NavLink>
                    </div>


                </Form>
            </div>
    );
};
export default AddUser;
