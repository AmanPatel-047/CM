import React from 'react'
import Table from '../CommonPages/PagesTable'
import { Button} from "antd";
import { NavLink } from "react-router-dom";
import '../CommonPages/Table.css'

const AllUsers = () => {
  return (
    <div>
        <div className="table-main">
       <h1>Users</h1>
        <NavLink to="/adduser">
          <Button type="primary" danger>
            Add User
          </Button>
        </NavLink>
      </div>
      <Table/>
    </div>
  )
}

export default AllUsers;
