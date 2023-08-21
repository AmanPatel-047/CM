import React from "react";
import TableData from "../CommonPages/Table";
// import { Button } from "antd";
// import { NavLink } from "react-router-dom";
import "../CommonPages/Table.css";

const Comments = () => {
  return (
    <div>
      <div className="table-main">
        <h1>Comments</h1>
      </div>
      <TableData />
    </div>
  );
};

export default Comments;
