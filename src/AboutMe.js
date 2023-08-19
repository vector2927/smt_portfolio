import React from 'react'

const AboutMe = () => {
  return (
    <div>
        <div style={{height:90}} id='about-me'></div>

        <div className='d-flex align-items-center justify-content-center'>
                    <h1 className='title-color title mb-5' data-aos='fade-up' data-aos-duration='1000'>About Me</h1>
        </div>

        <div className='about-me-section container-fluid d-flex justify-content-center'>

          <div className='d-none d-sm-none d-md-block d-lg-block' data-aos='fade-up' data-aos-duration='1000'>
            <img src={require("./assets/images/smt-journey.png")} style={{width:'75vw'}}/>
          </div> 
          <div className='d-block d-sm-block d-md-none d-lg-none' data-aos='fade-up' data-aos-duration='1000'>
            <img src={require("./assets/images/smt-journey2.png")} style={{width:'75vw'}}/>
          </div>
        </div>

    </div>
  )
}

export default AboutMe;