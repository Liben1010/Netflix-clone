import React from 'react'
import './Header.css'
import'../../bootstrap.css'
import netflixlogo from'../../Componate/asset/images/Netflix-Logo.jpg'
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
