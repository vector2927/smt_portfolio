import React from 'react'

const Certificates = () => {
  return (
    <div>
        <div style={{height:120}} id='certificates'></div>

        <div className='d-flex align-items-center justify-content-center'>
                    <h1 className='title-color title mb-5' data-aos='fade-up' data-aos-duration='600'>Certificates</h1>
          </div>

        <div className='d-flex container-fluid px-5'>
            <div className='d-flex row justify-content-center p-1'>
                <div className='col-12 col-lg-6 mb-5'>
                  <div className='row' data-aosnp='zoom-in' data-aos-duration='800'>
                    <img src={require("./assets/images/certi-jhu-webdev.png")} className='certi-img d-flex'/>
                    <div className='verifytext'><a className='btn btn-primary btn-sm px-5' href='https://coursera.org/verify/625TQW6X2C6K' target='_blank'>Verify <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                  </div>
                </div>
                <div className='col-12 col-lg-6 mb-5'>
                  <div className='row' data-aos='zoom-in' data-aos-duration='800' data-aos-delay='100'>
                    <img src={require("./assets/images/certi-react-basic.png")} className='certi-img d-flex'/>
                    <div className='verifytext'><a className='btn btn-primary btn-sm px-5' href='https://coursera.org/verify/7DZ6JNDXRQFS' target='_blank'>Verify <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Certificates;