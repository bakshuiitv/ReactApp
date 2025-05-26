
import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
// import logo from 'https://htmldemo.net/study/study/img/logo/logo.png';

const Header = () => {

    return(

<>

<header className="header-area section">
   
    <div className="header-top section">
        <div className="container">
            <div className="row">
                
                <div className="header-top-left text-start col-7">
                    <p>Have any question? +968 547856 254</p>
                </div>
              
                <div className="header-top-right text-end col-5">
                    <ul>
                        <Link><Link to="/">Log In </Link></Link>
                        <Link><Link to="/">Register</Link></Link>
                      
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <div className="header-bottom bg-white sticker section sticker">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                       
                    <div className="header-logo float-start">
                    <Link to="/">Log In 
                    {/* <img src={logo} alt="Logo" width="100" /> */}
                    {/* <img
  src="https://htmldemo.net/study/study/img/logo/logo.png"
  alt="Secure"
  crossOrigin="anonymous"
/> */}

                   </Link>
                    </div>
                  
                    <div className="header-buttons float-end">
                        <div className="header-search float-start">
                            <button className="search-toggle"><i className="zmdi zmdi-search"></i></button>
                            <div className="search-form">
                                <form action="#">
                                    <input type="text" placeholder="Search here..." name="search" />
                                    <button type="submit"><i className="zmdi zmdi-search"></i></button>
                                </form>                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="main-menu float-end hidden-xs">
                        <nav>
                            <ul>
                           <li> <Link to="/"  className="active">Home</Link></li>
                           <li>  <Link to="./about">about Us</Link></li>
                                   
                                
                                {/* <Link to="/">event
                                    <ul className="sub-menu">
                                        <Link to="/">event</Link>
                                        <Link to="/">event Details</Link>
                                    </ul>
                                </Link> */}
                               <li> <Link to="./services">gallery</Link></li>
                                
                               <li> <Link to="./services">news</Link></li>
                                    
                               <li> <Link to="./contact">Contact</Link></li>

                               <li> <Link to="./lazyload">Lazyload</Link></li>
                            </ul>
                        </nav>
                    </div>
                 
                    <div className="mobile-menu"></div>
                </div>
            </div>
        </div>
    </div>   

    </header>

    
</>

    );

}

export default Header;
