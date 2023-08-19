import React from 'react'

const Intro = () => {
  return (
    <div>
        <div style={{height:90}} id='home'></div>
        <div className='flex-column container-fluid'>
            <div className='row mt-5'>
                <div className='col-12 col-lg-6 col-md-6 container-fluid pb-5'>
                
                    <div className='d-flex intro-align'>
                            <div className='mx-auto my-auto'>
                                <h1 className='introtext title-color'>
                                    Hi! <br /> I'm Dr. Soe Min Thu. <br /><br />Your friendly . . .
                                </h1>
                                    <div className='typewriter typedtext'></div>
                                <div className='d-flex justify-content-center'>
                                    
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#contacts" className='intro-btn1 me-2 shadow-sm button-size text-nowrap'>Contact Me</a>
                                    <a href='https://drive.google.com/uc?export=download&id=1jrd5x3YOzYYNejA7Fn0zUWXCnaidRFds' target='_blank' className='intro-btn2 shadow-sm button-size text-nowrap'>Download Resume</a>
                                </div>
                                
                            </div>
                            
                    </div> 
                    
                </div>
                <div className='col col-12 col-lg-6 col-md-6'>
                    <div className='mx-lg-5 d-flex justify-content-center justify-content-lg-start align-items-center'>
                        <img src={require("./assets/images/hero2.png")} className='w-75' alt='pic'/>
                    </div>
                </div>
            </div>



        </div>
        <div style={{height:50}}></div>
    </div>
  );
};

export default Intro;