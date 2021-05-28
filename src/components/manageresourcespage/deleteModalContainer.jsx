import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ResourceServices from "../../services/resourceService";

//  TODO: add documentation
const DeletePopUpCont = () => {
    const history = useHistory();
    const location = useLocation();
    const { id } = location.state.id;
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        history.goBack();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        handleClose();
        try {
            const { data } = await ResourceServices.deleteSpThesis(id);
            window.location = "/manage-resources";
            // alert("Delete successful sa frontend")
        } catch (err) {
            if (err.response && err.response.data) {
                alert(err.response.data.errorMessage); // some reason error message
            }
        }
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Resource?</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Are you sure you want to delete {id}?
                    {/* read resource title and author here */}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeletePopUpCont;