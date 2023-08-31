import { SearchOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import axios from "axios"; 
import Highlighter from "react-highlight-words";
import { Button, Input, Space, Table } from "antd";
import { useEffect } from "react";

const TableData = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const searchInput = useRef(null);

  useEffect(() => {
    // Fetch data from API using Axios
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get("http://localhost:3001/blog");
        const apiData = response.data;

        // Assuming the API response has a "data" array and a "columns" array
        setData(apiData.data);
        setColumns(apiData.columns.map(column => ({
          title: column,
          dataIndex: column,
          key: column,
          ...getColumnSearchProps(column),
        })));
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

   // Handler for the Delete button click
   const handleDelete = async (rowNo) => {
    try {
      // Send the rowNo to the DELETE API endpoint
      await axios.delete(`http://localhost:3001/blog/${rowNo}`);
      
      // Update the UI to remove the deleted entry
      setData((prevData) => prevData.filter((_, index) => index !== rowNo - 1));
    } catch (error) {
      console.error("Error deleting blog:", error);
      // Handle deletion error, e.g., show an error message
    }
  };
  
  

  // Add a custom "Action" column
  const actionColumn = {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Button onClick={() => handleDelete(record.No)}>Delete</Button>
    ),
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
            danger
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
 
  return (
    <div>
      <div style={{ overflowX: "auto" }}>
        <Table columns={[...columns, actionColumn]} dataSource={data} scroll={{ x: "100%"}} />
      </div>
    </div>
  );
};
export default TableData;
