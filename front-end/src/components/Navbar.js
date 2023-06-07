import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { dark, light } from './colors';
// import { useState } from 'react';
function CollapsibleExample({fetch,setFetch}) {

    const ele = {
        backgroundColor:dark,
        color:light,
        border:0
    }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{padding: '20px 30px 0px'}}>
      <Container>
        <Navbar.Brand href="#home">HODLINFO</Navbar.Brand>

          <Nav className="me-auto">
            <Form.Select aria-label="Default select example" style={ele}>
                <option>INR</option>
            </Form.Select>
            <Form.Select
            value={fetch}
            onChange={e=>{
              setFetch(e.target.value)
            console.log(e.target.value)
            }}
            aria-label="Default select example" style={ele}>
                    <option value="BTC" >BTC</option>
                    <option value="ETH" >ETH</option>
                    <option value="USDT" >USDT</option>
                    <option value="XRP" >XRP</option>
                    <option value="TRX" >TRX</option>
                    <option value="DASH" >DASH</option>
                    <option value="ZEC" >ZEC</option>
                    <option value="XEM" >XEM</option>
                    <option value="IOST">IOST</option>
                    <option value="WIN" >WIN</option>
                    <option value="BTT" >BTT</option>
                    <option value="WRX" >WRX</option>            
                    </Form.Select>
          </Nav>

          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;