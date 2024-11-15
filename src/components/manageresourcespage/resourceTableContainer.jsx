import React from "react";
import MainResourceTable from "./resourcesMainTable"; // CHANGED TO PREVIOUS VERIONS
import AddNewResource from "./createNewResource";
import AddNewSPT from "./newSPTButton";
// import UserTable from '../manageuserpage/userTable'

/****************************************************
 * Type: React Functional Component
 *
 * Summary:
 *  Renders the main resource table and the buttons for
 *  adding book and SP/Thesis.
 *
 ******************************************************/

const ResourcesTableContainer = () => {
  return (
    <div className="res-table-cont">
      <MainResourceTable />
      <br />

      <div className="addBtns">
        <AddNewResource /> {/* Add book */}
        <AddNewSPT /> {/* Add Sp/Thesis */}
      </div>
    </div>
  );
};

export default ResourcesTableContainer;
