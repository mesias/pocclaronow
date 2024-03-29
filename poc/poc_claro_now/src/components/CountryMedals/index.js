import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Tab from "react-bootstrap/Tab"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Table from "react-bootstrap/Table"
import Nav from "react-bootstrap/Nav"
import medals_mock from '../../consts/medals_mock';
import './CountryMedals.css'
import { withRouter } from 'react-router-dom';

const medals = (props) => {
    const modals = props.country ? medals_mock[props.country].modals : {}
    console.log(modals)
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="countryDialog"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.country}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Tab.Container id="left-tabs-example" defaultActiveKey="mod_0">
  <Row>
    <Col sm={9}>
      {
            Object.keys(modals).map((modkey, idx) =>
              <div>
                <h3>{modkey}</h3>
                    <Table borderless>
                        <thead>
                            <tr>
                                <td></td>
                                <td><div className="circleBase gold"/></td>
                                <td><div className="circleBase silver"/></td>
                                <td><div className="circleBase bronze"/></td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(modals[modkey]).map((k, ik) =>
                                <tr key={ik} onClick={modals[modkey][k].length === 3 ? false : () =>
                                  props.history.push('/video', {
                                    mainVideo: modals[modkey][k][3],
                                  })} >
                                    <td key={`ld_${ik}`}>{k}</td>
                                    { 
                                        modals[modkey][k].slice(0,2).map((v, i) =>
                                            <td key={i}>{v}</td>
                                        )
                                    }
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                  </div>
            )
      }
    </Col>
  </Row>
</Tab.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default withRouter(medals);