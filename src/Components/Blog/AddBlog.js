// import { PlusOutlined } from "@ant-design/icons";
import React, {useState} from "react";
import { Button, DatePicker, Form, Input, Select} from "antd";
import '../CommonPages/Table.css'
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment"; 


const { TextArea } = Input;


const AddBlog = () => {

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [status, setStatus] = useState("pending");
  const [publishOn, setPublishOn] = useState(null);
  const [author, setAuthor] = useState("");

  const handleSubmit =() => {
    try {
      const data = {
        title,
        blogContent,
        status,
        publishOn,
        author,
      };

      const response = axios.post("http://localhost:3001/addblog", data);
      console.log("API response:", response.data);
      navigate("/blog");
      // Handle successful submission...
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle form submission error...
    }
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
        style={{
         
        }}
      >
        <div className="blogdivision">
        <div className="addblog-main">
          <Form.Item id="Title">
            <label>Title</label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Item>

          <Form.Item id="BlogContent">
            <label>BlogContent</label>
            <TextArea rows={4} value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}/>
          </Form.Item>
        </div>

        <div className="addblog-main">
          <Form.Item id="Status">
            <label>Status</label>
            <Select value={status} onChange={(value) => setStatus(value)}>
              <Select.Option value="pending">Pending</Select.Option>
              <Select.Option value="publish">Publish</Select.Option>
            </Select>
          </Form.Item>

          <label>PublishOn</label>
          <Form.Item>

          <DatePicker
            value={publishOn ? moment(publishOn) : null} // Set the value using moment
            onChange={(date) => setPublishOn(date ? date.toDate() : null)} // Convert to JavaScript Date object
          />
          </Form.Item>
        </div>
        </div>

        <div className="blogdivision">
        <div className="addblog-main">
          <Form.Item >
            <label id="author">Author</label>
            <Input id="author" placeholder="Name" type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}/>
          </Form.Item>
        </div>

        </div>
          <div className="blogbtn" >
            <Button type="primary" danger onClick={handleSubmit}>Submit</Button>
            <NavLink to='/blog'>
            <Button danger>Back</Button>
            </NavLink>
          </div>  
      </Form>
    </div>
  );
};
export default AddBlog;
