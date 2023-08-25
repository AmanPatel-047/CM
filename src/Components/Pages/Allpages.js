import React from 'react';
// import {useState} from 'react';
import Table from '../CommonPages/PagesTable'
import { Button} from "antd";
import { NavLink } from "react-router-dom";
import '../CommonPages/Table.css'

const AllPages = () => {
  return (
    <div>
        <div className="table-main">
       <h1>Pages</h1>
        <NavLink to="/addpages">
          <Button type="primary" danger>
            Add Section
          </Button>
        </NavLink>
      </div>
      <Table/>
    </div>
  )
}

export default AllPages;
