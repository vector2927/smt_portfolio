import React from 'react'

const AboutMe = () => {
  return (
    <div>
        <div style={{height:120}}></div>

        <div className='abm-title title-color'>About Me</div>

        <div className='about-me-section'>

            <div className='container-fluid position-relative'>
              <div className='d-flex flex-row justify-content-center'>
                
                      <svg width='120' height='120' fill='none'>
                          <circle cx='60' cy='60' r='58.5' stroke='#F44336' stroke-width='3'/>
                          <text className='about-me-svgtext' x='50%' y='50%' text-anchor='middle' dy='0.3em'>1997</text> 
                      </svg>
                      
                      <span className='ps-5 d-flex align-items-start'>
                        <div>
                        <span className='about-me-title'>SMT was born!<br /></span>
                        <span className='fs-5'>Born in 1997, 26 years old now</span>
                        </div>
                      </span>

                      <span className='d-flex align-items-start px-5 mt-5'>
                      <svg width="40" height="4">
                          <path d="M0 2L40 2" stroke="#F44336" stroke-width="3"/>
                      </svg>
                      </span>

                      <svg width='120' height='120' fill='none'>
                          <circle cx='60' cy='60' r='58.5' stroke='#F44336' stroke-width='3'/>
                          <text className='about-me-svgtext' x='50%' y='50%' text-anchor='middle' dy='0.3em'>2013</text> 
                      </svg>

                      <div className='ps-5 d-flex align-items-start'>
                        <div>
                        <span className='about-me-title'>11th Grade<br /></span>
                        <span className='fs-5'>Passed matriculation exam with 6D</span>
                        </div>
                      </div>

                      <div className='d-flex flex-row'>
                        <div className='end-0 position-relative m-5 px-5'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="145" height="164" viewBox="0 0 145 164" fill="none">
                              <path d="M0 2H103C125.091 2 143 19.9086 143 42V122C143 144.091 125.091 162 103 162H63" stroke="#F44336" stroke-width="3"/>
                          </svg>
                      </div></div>
                </div>

                <div className='d-flex flex-row justify-content-center'>
                    
                      <div className='position-absolute start-0 mt-5 px-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="145" height="164" viewBox="0 0 145 164" fill="none">
                              <path d="M145 162L42 162C19.9086 162 2 144.091 2 122L2.00001 42C2.00001 19.9086 19.9086 1.99999 42 1.99999L82 1.99999" stroke="#F44336" stroke-width="3"/>
                            </svg>
                      </div>

                      <span className='ps-5 d-flex align-items-start mt-3'>
                        <div>
                        <span className='about-me-title'>Medical Doctor for over 3 years<br /></span>
                        </div>
                      </span>

                      <span className='d-flex align-items-start px-5 mt-5'>
                      <svg width="40" height="4">
                          <path d="M0 2L40 2" stroke="#F44336" stroke-width="3"/>
                      </svg>
                      </span>

                      <svg width='120' height='120' fill='none'>
                          <circle cx='60' cy='60' r='58.5' stroke='#F44336' stroke-width='3' fill='#F44336'/>
                          <text className='about-me-svgtext2' x='50%' y='50%' text-anchor='middle' dy='0.3em'>2013</text> 
                      </svg>

                      <div className='ps-5 d-flex align-items-start'>
                        <div>
                        <span className='about-me-title'>Joined UM1<br /></span>
                        <span className='fs-5'>Graduated MBBS at 2020</span>
                        </div>
                      </div>
    
                </div>
            </div>

        </div>

        <div style={{height:500}}></div>

    </div>
  )
}

export default AboutMe;