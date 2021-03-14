import React from "react";
import "./layout.css";

import { Row, Col } from "react";
import bbcImg from "../images/bbcLogo.png"
import laImg from "../images/LAtimesLogo.png"
import cbsImg from "../images/cbs.png"
import nbcImg from "../images/nbc.png"
import foxImg from "../images/fox.png"

const Consultation = () => (
 <div>
   <div className="row1">
     <div className="heading2">
       Start your business today
    </div>
   </div>

   <div className="row1">
     <div className="subheading2">
       We've raised more than $100M for our clients
    </div>
    <br></br>
   </div>

   <div className='container-fluid'>
      <button className="consultationButton"><b>BOOK A FREE CONSULTATION</b></button>
    </div>

   <br></br>

   <div className="row1">
     <div className="heading2">
       AS SEEN ON
    </div>
   </div>
   
   <br></br>

  <div className="row">
    <div className="col">
      <div>
      <img class="circle" src="https://www.internetmatters.org/wp-content/uploads/2019/04/BBC_logo.png" alt="Tyler"/>     

       </div>    </div>

    <div className="col">
      <div>
      <img class="circle" src="https://www.logosvgpng.com/wp-content/uploads/2018/03/los-angeles-times-logo-vector.png" alt="Tyler"/>     
      </div>
    </div>

    <div className="col">
      <div>
      <img class="circle" src="https://www.thewrap.com/wp-content/uploads/2015/06/CBS-logo-618x412.jpg" alt="Tyler"/>     
      </div>
    </div>

    <div className="col">
      <div>
      <img class="circle" src="https://deadline.com/wp-content/uploads/2016/05/nbc-featured-image-2.jpg?w=681&h=383&crop=1" alt="Tyler"/>     
      </div>
    </div>

    <div className="col">
      <div>
      <img class="circle" src="https://www.coxmediagroup.com/wp-content/uploads/2020/02/fox_logoresized-bc.jpg" alt="Tyler"/>     
      </div>
    </div>
  

  </div>
  </div> 
);

export default Consultation;
