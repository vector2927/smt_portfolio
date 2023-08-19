import React from 'react'

const ContactMeModal = () => {
  return (
    <div>
            <div class="modal fade" id="contacts" aria-hidden="true">

                <div class="modal-dialog modal-dialog-centered px-3">

                    <div class="modal-content">

                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Contact Me</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body bg-danger" style={{height:"12em"}}>

                            <div className='container-fluid'>
                                
                                <div className='row position-relative mb-5 '>
                                    
                                    <div className='d-flex justify-content-center ms-2'>
                                        
                                        <div className='container position-relative'>
                                            <a href='tel:+9595014789' class="intro-banner-vdo-play-btn pinkBg m-3" target="_blank">
                                                <i class="fa-solid fa-phone text-light"></i>
                                                <span class="ripple pinkBg"></span>
                                                <span class="ripple pinkBg"></span>
                                                <span class="ripple pinkBg"></span>
                                                
                                            </a>
                                            <a href='tel:+9595014789' target='_blank'><div className='d-flex justify-content-center model-text phone-text'>+95 95014789</div></a>
                                        </div>
                                    </div>

                                    

                                </div>
                                

                                <div className='flex-row d-flex mt-2 footer-img justify-content-center'>
                                
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


                        <div class="modal-footer small">
                            <div className='small text-secondary'>Weaving Lines of Code into Intuitive Websites.</div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
  )
}

export default ContactMeModal;