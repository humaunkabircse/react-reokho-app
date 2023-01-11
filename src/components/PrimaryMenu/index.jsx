import React from 'react';

function PrimaryMenu() {
  return (
    <div class="sticky-header main-bar-wraper navbar-expand-lg">
                <div class="main-bar clearfix ">
                    <div class="container clearfix">				
                        {/* <!-- website logo --> */}
                        <div class="logo-header mostion">
                            <a href="index.html" class="dez-page"><img src="/assets/images/logo.png" alt="BRAND NAME" /></a>
                        </div>
                        {/* <!-- nav toggle button --> */}
                        <button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- main nav --> */}
                        <div class="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
                            <ul class="nav navbar-nav">	
                                <li class="active"><a href="index.html">Home</a></li>
                                <li class=""><a href="about.html">About</a></li>

                                <li><a href="">Services <i class="fa fa-chevron-down"></i></a>
                                    <ul class="sub-menu">
                                        <li class=""><a href="office-Decoretion.html">Office Decoretion</a></li>
                                        <li class=""><a href="Home-Decoretion.html">Home Decoretion</a></li>
                                        <li class=""><a href="Showroom-Decoretion.html">Showroom Decoretion</a></li>
                                        <li class=""><a href="Restaurant-Decoretion.html">Restaurant Decoretion</a></li>
                                        <li class=""><a href="Interior-Decoretion.html">Interior & Exterior Work</a></li>
                                        <li class=""><a href="Architectural-Drawing.html">Architectural Drawing</a></li>
                                        <li class=""><a href="Soil-Test.html">Soil Test</a></li>
                                        <li class=""><a href="Civil-Contruction.html">Civil Contruction Work</a></li>
                                        <li class=""><a href="landscaping.html">landscaping</a></li>		
                                    </ul>
                                </li>
                                <li class=""><a href="materials.html">our materials</a></li>
                                <li class=""><a href="">Testimonials</a></li>
                                <li class=""><a href="contact.html">Contact Us</a></li>
                            
                            </ul>	
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default PrimaryMenu