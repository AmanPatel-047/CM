import React from 'react'
import Table from '../CommonPages/RoleTable'
import { Button} from "antd";
import { NavLink } from "react-router-dom";
import '../CommonPages/Table.css'

const Roles = () => {
  return (
    <div>
        <div className="table-main">
       <h1>All Roles</h1>
        <NavLink to="/addrole">
          <Button type="primary" danger>
            Add Role
          </Button>
        </NavLink>
      </div>
      <Table/>
    </div>
  )
}

export default Roles;
