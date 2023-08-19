import React from 'react'

const Services = () => {
  return (
    <div id='services'>
        <div className='services-bg container-fluid py-5'>
            <div className='d-flex justify-content-center hero-title'>"Bringing Ideas to Life, Digitally."</div>
            <div className='d-flex justify-content-center mt-3 title-color hero-text'>I can bring fantastic websites to you <br />just in a blink of time.</div>
        </div>
        <div className='flex-column container-fluid'>
            <div className='row  mt-5'>
                <div className='d-flex align-items-center col-12 justify-content-center'>
                    <h1 className='title-color title' data-aos='fade-up' data-aos-duration='1000'>Services</h1>
                </div>
                <div className='d-flex col-12 justify-content-center'>
                    <h4 className='m-3 px-5 text-center' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
                        <div className='linear-wipe pt-4 pb-2 fs-2 text-nowrap'>"Code, Create, Inspire"</div>
                        <div style={{height:"1.5em"}}><div className='pulse'>Your Vision</div></div>
                        <div className='fw-bold'>"My Development"</div>
                    </h4>
                </div>
                
            </div>

            <div className='mt-5 d-flex row'>
                
                    {/* <div className='col-6 px-5'>
                        <div className='d-flex flex-column'>
                            <p className='text-primary fs-2 fw-bold d-flex justify-content-end'>What I can do</p>
                            <p className='d-flex justify-content-end text-end'>What is web development?<br /> A web developer's job is to create websites.</p>
                            <div className='d-flex justify-content-end'><img src={require("./assets/images/wicd.png")} alt='developer' className='w-50' /></div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center mt-5 pt-5' style={{height: 400}}>
                        <div className='vr d-flex align-items-center'></div>
                    </div>
                    <div className='col-6 px-5'>
                        <div className='d-flex flex-column'>
                            <div className='d-flex justify-content-start'><img src={require("./assets/images/wcux.png")} alt='developer' className='w-50' /></div>  
                            <p className='text-primary fs-2 fw-bold my-3'>What can you expect</p>
                            <p className='d-flex justify-content-start text-start'>Web Developers work on<br />implementing visual designs and layouts, <br />integrating graphics and content, <br />optimizing website performance and capacity.</p>
                        </div>
                    </div> */}
                    
                    <div className='col-12 col-lg-6 px-5' data-aos='zoom-in-up' data-aos-duration='800' data-aos-delay='200'>
                        <div className='d-flex flex-column'>
                            <div className='text-primary fs-2 fw-bold d-flex justify-content-center justify-content-lg-end pt-2'>What I can do</div>
                            <div className='d-flex justify-content-center text-center justify-content-lg-end text-lg-end pb-4 fs-5'>"I turn your ideas into websites"</div>
                            <div className='d-flex justify-content-center justify-content-lg-end pt-2'><img src={require("./assets/images/wicd.png")} alt='developer' className='w-50' /></div>
                        </div>
                    
                        {/* <div className='d-flex align-items-center mt-5 pt-5' style={{height: 400}}>
                            <div className='vr d-flex align-items-center'></div>
                        </div> */}
                    </div>
                    <div className='col-12 col-lg-6 px-5' data-aos='zoom-in-up' data-aos-duration='800' data-aos-delay='200'>
                        <div className='d-flex flex-column'>
                            <div className='d-flex justify-content-center justify-content-lg-start pt-2'><img src={require("./assets/images/wcux.png")} alt='developer' className='w-50' /></div>  
                            <div className='text-primary fs-2 fw-bold d-flex justify-content-center justify-content-lg-start pt-4'>What can you expect</div>
                            <div className='d-flex justify-content-center justify-content-lg-start text-center text-lg-start pb-4 fs-5'>User-friendly & <br />responsive websites for you<br />that meet industrial standards<br />making your brand stand out.</div>
                        </div>
                    </div>
                
            </div>
        </div>
        <div style={{height:55}}></div>
    </div>
  )
}

export default Services;