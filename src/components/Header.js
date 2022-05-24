import React, {useState} from "react"
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Header = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };
    
    const hideModal = () => {
      setIsOpen(false);
    };
    const saveSettings = () => {
      setIsOpen(false);
    };

    const popover=(
      <Popover >
        <h6>Enrage mode gives an injured character one last spurt of health before they die.</h6>
    </Popover>
    )
    

    return(
        <div>

            <div className="create-char">
                <div className="subHeading">
                <h2>Create Character</h2>
                <>
                <i className="bi bi-gear-fill" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={showModal}></i>
                    <Modal show={isOpen} onHide={hideModal} >
                    <Modal.Header >
                      <Modal.Title >Settings:</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                      <form className="settings-form">
                        <div>
                          <OverlayTrigger
                            placement="top"
                            trigger="hover"
                            overlay={popover}>
                              <label className="form-check-label"> Enrage </label>
                          </OverlayTrigger>
                          <input type="checkbox" className="form-check-input"></input>
                        </div>
                        <div>
                          <label className="form-check-label"> option2 </label>
                          <input type="checkbox" className="form-check-input"></input>
                        </div>
                        <div>
                          <label className="form-check-label"> option3 </label>
                          <input type="checkbox" className="form-check-input"></input>
                        </div>
                      </form>

                      </Modal.Body>
                      <Modal.Footer>
                        <button type="button" className="btn btn-dark btn-sm" onClick={hideModal}>Cancel</button>
                        <button type="button" className="btn btn-primary btn-sm" onClick={saveSettings}>Save</button>
                      </Modal.Footer>
                    </Modal>
                </>
                </div>
            </div>
        </div>
    )
}

export default Header
