// import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Button, DatePicker, Form, Input, Select, List } from "antd";
import { Modal } from "antd";
import { DeleteOutlined, DragOutlined, EyeOutlined } from "@ant-design/icons";

import "../CommonPages/Table.css";
import { NavLink,  useNavigate } from "react-router-dom";
import Hero from '../PagesComponents/Hero'
import Feature from '../PagesComponents/Feature'
import Facts from '../PagesComponents/Facts'
import Services from '../PagesComponents/Services'
import Footer from '../PagesComponents/Footer'
// import RenderComponent from "../../RenderComponent";


const AllComponents = [
  { component: Hero, name: "Hero", },
  { component: Feature, name: "Feature" },
  { component: Services, name: "Services" },
  { component: Facts, name: "Facts" },
  { component: Footer, name: "Footer" },
];






const AddPages = ({onSetPreviewElement}) => {
  const [selectedComponents, setSelectedComponents] = useState([]);
  console.log([...selectedComponents])
  // const [pageComponents, setPageComponents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false); 
  };

  // const Components = selectedComponents;


  const handleComponentToggle = (componentName) => {
    // if (selectedComponents.includes(componentName)) {
    //   setSelectedComponents(selectedComponents.filter(comp => comp !== componentName));
    // } else {
    // }
    setSelectedComponents([...selectedComponents, componentName]);
  };

  const handleComponentDelete = (item) => {
    setSelectedComponents(selectedComponents.filter((comp) => comp !== item));
  };

  const handlePreviewClick = (Item) => {
    // console.log("Component: " + Item);
    // const previewWindow = window.open('/preview', '_blank');
    // const previewContent = <RenderComponent children={Item} />;
    onSetPreviewElement(Item.component);

    navigate('/addpages/preview')

  };


  return (
    <div className="addblog">
      <Form
        className="component-list"
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
            <List
              dataSource={selectedComponents}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button
                      icon={<DragOutlined />}
                      onClick={() => handleComponentToggle(item)}
                    >

                    </Button>,
                    <Button
                      icon={<EyeOutlined />}
                      onClick={() => handlePreviewClick(item)}
                    >

                    </Button>,
                    <Button
                      icon={<DeleteOutlined />}
                      onClick={() => handleComponentDelete(item)}
                    >

                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<img src={item.image} alt={item.name} />}
                    title={item.name}
                  />
                </List.Item>
              )}
            />
            <div>
              <Modal
                title="Add Section"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okType="default"
              >
                

                <List
                  dataSource={AllComponents}
                  renderItem={(component) => (
                    // <List.Item>
                    //   <List.Item.Meta
                    //     avatar={<img src={component} alt={component.name} />}
                    //     title={component.name}
                    //   />
                    // </List.Item>
                    <List.Item
                      onClick={() => handleComponentToggle(component)}
                      style={{
                        background: selectedComponents.includes(component)
                          ? "#e6f7ff"
                          : "transparent",
                      }}
                    >
                      <List.Item.Meta 
                       avatar={<img src={component} alt={component.name} />}
                      title={component.name} />
                    </List.Item>
                  )}
                />

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