import React from "react";
import ManageItemsHeader from "./manageItemsHeader";
import FieldsContainerRes from "./filterFieldsResources";
import ResourceTableContainer from "./resourceTableContainer";
import "../../styles/manageresources/manageResourcesStyle.css";

const ManageResourcesPage = ({ resourceList }) => {
    return (
        <div className="manage-resources-page-container">
            <ManageItemsHeader />
            <FieldsContainerRes />
            {/* <ResTableContainer resourceList={resourceList} /> */}
            <ResourceTableContainer />
        </div>
    );
};

export default ManageResourcesPage;