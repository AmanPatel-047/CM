import React from 'react'
import TableData from '../CommonPages/Table'
import { Button} from "antd";
import { NavLink } from "react-router-dom";
import '../CommonPages/Table.css'


const AllBlog = () => {
  return (
    <div>
        <div className="table-main">
       <h1 style={{ fontWeight: 700 }}>All Blogs</h1>
        <NavLink to="/addblog">
          <Button type="primary" danger>
            Add Blog
          </Button>
        </NavLink>
      </div>
      <TableData/>
    </div>
  )
}

export default AllBlog;
