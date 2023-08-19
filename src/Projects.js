import React from 'react'

const Projects = () => {
  return (
    <div>
        <div style={{height:85}} id='projects'></div>

        <div className='d-flex align-items-center justify-content-center'>
                    <h1 className='title-color title mb-3' data-aos='fade-up' data-aos-duration='600'>My Projects</h1>
        </div>
        <div style={{height:30}}></div>

        <div className='pjbox row container-fluid'>
            
            
            <div className='pjbox-item text-center container position-relative test mb-5' data-aos='fade-up' data-aos-duration='600' data-aos-delay='200'>
                <a href='https://vector2927.github.io/simple_calculator/' target='_blank'>
                    <div className='position-absolute start-50 translate-middle'>
                        <img src={require("./assets/images/calc.png")} className='pjpic'></img>
                    </div>
                    <div className='pjtext'>Simple <br /> Calculator App</div>
                    
                    <div className='d-flex flex-row justify-content-center pt-3'>
                        <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#html</p>
                        <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#JS</p><br/>
                        <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#CSS</p>
                        <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#React</p>
                    </div>
                </a>
            </div>
            
            
            <div className='pjbox-item text-center container position-relative test mb-5' data-aos='fade-up' data-aos-duration='600'>
                <a href='https://vector2927.github.io/one-central-bank/' target='_blank'>
                <div className='position-absolute start-50 translate-middle'>
                    <img src={require("./assets/images/bankpic.png")} className='pjpic'></img>
                </div>
                <div className='pjtext'>A Sample <br /> Bank Website</div>
                <div className='fs-sm text-secondary'>(Desktop View Only)</div>
                <div className='d-flex flex-row justify-content-center pt-1'>
                    <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#html</p>
                    <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#JS</p>
                    <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#CSS</p>
                </div>
                </a>
            </div>

            <div className='pjbox-item text-center container position-relative test mb-5' data-aos='fade-up' data-aos-duration='600' data-aos-delay='250'>
                <a href='https://vector2927.github.io/mylove_BD/' target='_blank'>
                    <div className='position-absolute start-50 translate-middle'>
                        <img src={require("./assets/images/heart.png")} className='pjpic'></img>
                    </div>
                    <div className='pjtext'>A Special day <br /> Memorial site</div>
                    <div className='fs-sm text-secondary'>(Responsive)</div>
                    <div className='d-flex flex-row justify-content-center pt-1'>
                        <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#html</p>
                        <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#JS</p>
                        <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#CSS</p>
                    </div>
                </a>
            </div>

            <div className='pjbox-item text-center container position-relative test mb-5' data-aos='fade-up' data-aos-duration='600' data-aos-delay='300'>
                <a href='https://vector2927.github.io/dashboard_sample/' target='_blank'>
                    <div className='position-absolute start-50 translate-middle'>
                        <img src={require("./assets/images/dbpic.png")} className='pjpic'></img>
                    </div>
                    <div className='pjtext'>A Sample <br /> Dashboard</div>

                    <div className='d-flex flex-row justify-content-center pt-3'>
                        <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#html</p>
                        <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#CSS</p>
                    </div>
                </a>
            </div>

            <div className='pjbox-item text-center container position-relative test mb-5' data-aos='fade-up' data-aos-duration='600'>
                <a href='#home' target='_blank'>
                    <div className='position-absolute start-50 translate-middle'>
                        <img src={require("./assets/images/wsicon.png")} className='pjpic'></img>
                    </div>
                    <div className='pjtext'>This <br /> Portfolio Site</div>

                    <div className='d-flex flex-row justify-content-center pt-3 pjtext-hash'>
                        <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#html</p>
                        <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#JS</p>
                        <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#CSS</p>
                        <p className='bg-secondary rounded position-relative text-light mx-1 px-2 small'>#React</p>
                    </div>
                </a>
            </div>

        </div>
    </div>
  )
};

export default Projects;