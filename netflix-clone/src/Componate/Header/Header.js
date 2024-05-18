import React from 'react'
import './Header.css'
import'../../bootstrap.css'
import netflixlogo from'../../Componate/asset/images/neflixlogo2.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Header() {
  return (
    <>
    <div className='header-outer'>
    <div className='header-container'>
    <div className='header-left'>
<ul>
<li><img src={netflixlogo} alt='netflixlogo' width={100}></img></li>
<li>Netflix</li>
<li>Home</li>
<li>TvShow</li>
<li>Movies</li>
<li>Latest</li>
<li>MyList</li>
<li>Browse by language</li>
</ul>

    </div>
<div className='header-right'>
<ul>
    <li><SearchIcon/></li>
    <li><NotificationsNoneIcon/></li>
    <li><AccountBoxIcon/></li>
    <li><ArrowDropDownIcon/></li>
</ul>



</div>



    </div>
    </div>
   

      
    </>
  )
}
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import NetflixLogo from "../../assets/images/NetflixLogo.png";
// import "./header.css";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// function NavSection() {
//   return (
//     <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
//       <Container>
//         {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Navbar.Brand className="navLink" href="#home">
//               <img src={NetflixLogo} alt="Netflix Logo" width="100" />
//             </Navbar.Brand>
//             <div className=" DropDown ">
//               <NavDropdown
//                 title={`Browse ${<ArrowDropDownIcon/>}`}
//                 id="basic-nav-dropdown"
//               >
//                 <div className="DropDownContent">
//                   <NavDropdown.Item href="#action/3.1">
//                     <p>Home </p>
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.2">
//                     <p>TVShows</p>
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.3">
//                     <p>Movies</p>
//                   </NavDropdown.Item>
//                   {/* <NavDropdown.Divider /> */}
//                   <NavDropdown.Item href="#action/3.4">
//                     <p> New & Popular</p>
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.5">
//                     <p>My List</p>
//  </NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.6">
//                     <p>Browse by Languages</p>
//                   </NavDropdown.Item>
//                 </div>
//               </NavDropdown>
//             </div>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
// export default NavSection;