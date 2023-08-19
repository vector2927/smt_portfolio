import React from 'react';

const SkillSets = () => {
  return (
    <div>
            <div style={{height:120}} id='skillsets'></div>
            
            <div className='d-flex align-items-center justify-content-center'>
                    <h1 className='title-color title mb-5' data-aos='fade-up' data-aos-duration='600'>Skill Sets</h1>
            </div>
            
        
            <div className='col container-fluid'>
                <div className='row'>
                    <div className='col-12 col-lg-6 px-5' data-aos='fade-up' data-aos-duration='600'>
                        <div className='justify-content-center d-flex'>
                            <img src={require("./assets/images/skillset1.jpg")} alt='css-3' className='skillset'></img>
                            <img src={require("./assets/images/skillset2.jpg")} alt='css-3' className='skillset'></img>
                            <img src={require("./assets/images/skillset3.jpg")} alt='css-3' className='skillset'></img>
                        </div>
                        <div className='fs-2 fw-bold text-primary text-center mt-3 mb-1'>Core Skills</div>
                        <div className='fs-5 fw-bold text-success text-center mb-5'>(HTML, CSS, Javascript)</div>
                    </div>
                    <div className='col-12 col-lg-6' data-aos='fade-up' data-aos-duration='600' data-aos-delay='100'>
                        <div className='justify-content-center d-flex'>
                            <img src={require("./assets/images/bs-logo.png")} alt='css-3' className='skillset'></img>
                            <img src={require("./assets/images/reactjs.png")} alt='css-3' className='skillset rotating'></img>
                        </div>
                        <div className='fs-2 fw-bold text-primary text-center mt-3 mt-lg-5 mb-1'>Frameworks & Libraries</div>
                        <div className='fs-5 fw-bold text-success text-center mb-5'>(Bootstrap, React.js)</div>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center'>
                <hr class='hr w-25' />
            </div>

            <div className='skillset-text my-5 text-center fs-4'>"Turning Ideas into Seamless Digital Realities."</div>
            
            <div className='d-flex justify-content-center'>
                <hr class='hr w-25' />
            </div>
    </div>
  )
};

export default SkillSets;