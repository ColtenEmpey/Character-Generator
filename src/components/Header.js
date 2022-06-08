import React, {useState} from "react"
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import {useRecoilState} from 'recoil';
import { EnrageEnable } from "../App";

const Header = () =>{
    const [isOpen, setIsOpen] = useState(false);
    //RECOIL USAGE OF STATE
    const [Enrage, setEnrage] = useRecoilState(EnrageEnable);
    
      const onChange = (e) => {
        setEnrage(!Enrage);
      };
    

    const showModal = () => {
        setIsOpen(true);
    };
    
    const hideModal = () => {
      setIsOpen(false);
    };
    const saveSettings = () => {
      window.localStorage.setItem("Enrage",Enrage);
      setIsOpen(false);
    };

    const popover=(
      <Popover >
        <h6>Enrage mode gives an injured character a chance of gaining one last spurt of health before they die.</h6>
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
                            trigger="hover,"
                            overlay={popover}>
                              <label className="form-check-label"> Enrage </label>
                          </OverlayTrigger>
                          <input type="checkbox" className="form-check-input" name="EnrageEnable" checked={Enrage} onChange={onChange} ></input>
                        </div>
                      </form>
                      </Modal.Body>

                      <Modal.Footer>
                        <button type="button" className="btn btn-dark btn-sm" onClick={hideModal}>Cancle</button>
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
