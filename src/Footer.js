import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='container-fluid footer position-relative'>

            <div className='container-fluid'>

                <div className='d-flex row'>
                    <div className='col-12 col-lg-6 mb-5'>
                        <div className='footer-title d-flex justify-content-center text-center justify-content-lg-start'>
                            <p className='text-center text-lg-start'><h1 className='text-nowrap'>Let's Be In A Same Team!</h1><h6>Contact Me</h6></p>
                        </div>
                        <div className='d-flex justify-content-center justify-content-lg-start'>
                            <div className='flex-row d-flex mt-2 footer-img'>
                                
                                <a href='https://www.linkedin.com/in/wishful-smt/' target='_blank'>  
                                    <img className='footer-img footer-link' src={require("./assets/images/icons/linkedin-icon.png")} />
                                </a>
                                <a href='https://www.facebook.com/wishful.smt' target='_blank'>     
                                    <img className='footer-img footer-link' src={require("./assets/images/icons/facebook-icon.png")} />
                                </a>
                                <a href='https://t.me/vector29997' target='_blank'>    
                                    <img className='footer-img footer-link' src={require("./assets/images/icons/telegram-icon.png")} />
                                </a>
                                <a href='https://wa.me/9595014789?text=Hi!' target='_blank'>  
                                    <img className='footer-img footer-link' src={require("./assets/images/icons/whatsapp-icon.png")} />
                                </a>      
                                <a href='mailto:mr.soeminthu29@gmail.com' target='_blank'>
                                    <img className='footer-img footer-link' src={require("./assets/images/icons/gmail-icon.png")} />
                                </a>
                                <a href='https://github.com/vector2927' target='_blank'>
                                    <img className='footer-img footer-link' src={require("./assets/images/icons/github-icon.png")} />
                                </a>

                            </div>
                        </div>
                    </div>  

                    <div className='col-12 col-lg-6'>
                        <div className='row'>
                            <div className='col-6 col-lg-3'>
                                <div className='d-flex justify-content-start justify-content-lg-end ps-md-5'>
                                    
                                    <div className='d-flex flex-column'>
                                        <div className='position-relative mb-3'>
                                            <a className='position-absolute footer-link' href='#home'>Home</a>
                                        </div>
                                        <br />
                                        <div className='position-relative mb-3'>
                                            <a className='position-absolute footer-link' href='#services'>Services</a>
                                        </div><br />
                                        <div className='position-relative mb-3'>
                                            <a className='position-absolute footer-link' href='#projects'>Projects</a>
                                        </div><br />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='col-6 col-lg-3'>
                                <div className='d-flex justify-content-center justify-content-lg-end'>
                                    
                                    <div className='d-flex flex-column'>
                                        <div className='position-relative mb-3'>
                                            <a className='position-absolute footer-link' href='#skillsets'>Skillsets</a>
                                        </div><br />
                                        
                                        <div className='position-relative mb-3'>
                                            <a className='position-absolute footer-link' href='#about-me'>About Me</a>
                                        </div><br />

                                        <div className='position-relative mb-3'>
                                            <a className='position-absolute footer-link' href='#certificates'>Certificates</a>
                                        </div><br />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div className='footer-end position-relative'>
            © All Rights Reserved by Soe Min Thu | UX/UI Design Partner THAR
        </div>
    </div>
  )
}

export default Footer;