import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

  import { FaLaptopHouse } from "react-icons/fa";

function Header() {
  return (
    <div>
          <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-dark fs-2 m-2'>
          <FaLaptopHouse  className='text-dark fs-1 mx-2'/>
            <b>Project Fair</b>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header