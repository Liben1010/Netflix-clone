import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
  return (
    <>
    <div className='footer_outer'></div>
    <div className='footer-left'>


<div className='footer'>

<div className='Audio'>
<div className='footer_icon'>
<span><FacebookOutlinedIcon/></span>
<span><InstagramIcon/></span>
<span><YouTubeIcon/></span>
</div>
<ul>
<li>Audio Description</li>
<li>Investor Relations</li>
<li>Legal Notices</li>
</ul>
<div className='service'>
    <p>Service Code</p>

</div>
<div className='service'>
    <a>&copy;1997-2024 Netflix,Inc.</a>

</div>
</div>
    
<div className='Gift'>
<ul>
    <li>Gift Cards</li>
    <li>Terms of Use</li>
    <li>Corporate Information</li>
</ul>
</div>
<div className='Media'>
<ul>
    <li>Media Center</li>
    <li>Contact</li>
    <li>Service Code</li>
</ul>
</div>
</div>


   </div>
    </>
  )
}
