import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {
    Row, 
    Col
} from 'reactstrap'

import Grid from '@material-ui/core/Grid';

import person1 from 'assets/img/person1.png'
import person2 from 'assets/img/person2.png'
import topBrand from 'assets/img/top-brand.png'
import money from 'assets/img/money.png'

import './style.scss'

class HomePage extends Component {

    render() {
        return (
            <div className="home-page">
                <div className="container-fluid p-0">
                    <div className="brand h-100 d-flex align-items-center">
                        <img src={topBrand} width="100%" className="brand-img"/>
                        <div className="col-lg-4 col-md-12">
                            <h1 className="mb-4">You can make $25,000 more per crew man per year using the AIMM System!</h1>
                            <p className="col-lg-8 col-md-12 p-0 mb-5"><b>
                                The AIMM System is the ONLY way you can get the ONE NUMBER in real time that you need to make correct decisions that will allow you to get to the next level. This one number gets ignored in all estimating and management systems.</b></p>
                            <div className="d-flex align-items-center">
                                <Button variant="contained" color="primary" className="aimm-primary mr-4">
                                    REQUEST A DEMO
                                </Button>
                                <a href="#">
                                    <span className="d-flex intro-player ml-3">
                                        <div className="icon">
                                            <PlayArrowIcon fontSize="small" style={{marginBottom: 5, marginLeft: 4}}/>
                                        </div>
                                        <b>Watch Introduction</b>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className="content">
                            <h3> What’s the most important number you MUST use to make decisions at the end of every WEEK to operate your contracting company?</h3>
                            <Row className="service-list">
                                <Col>
                                    <ul className="mx-auto">
                                        <li>Gross Sales</li>
                                        <li>Gross Profit</li>
                                        <li>Gross Profit Percentage</li>
                                        <li>Overhead</li>
                                    </ul>
                                </Col>
                               
                                <Col>
                                    <ul className="mx-auto">
                                        <li>Labor Cost</li>
                                        <li>Materials Cost</li>
                                        <li>Gross Income</li>
                                        <li>Net Profit Percentage</li>
                                    </ul>
                                </Col>
                            </Row>
                            
                        </div>
                    </section>
                    <section className="bg-sky">
                        <div className="content">
                            <h3 className="text-blue text-center mb-5"> If you answered yes to any of the above choices, you’re neglecting the one most important number for your business success.</h3>
                            <h4 className="text-center mb-5">The numbers you don’t know, WILL hurt you!</h4>
                            <p className="text-center large mb-5">
                                Contractors have a major disadvantage in running a business. Most business data on running a company is FALSE, misleading, and unproven. What are these falsehoods and learn how to stay away from them. There are <b>Vital Numbers</b> that you must know and be able to track every day. <br/><br/>What are they?
                            </p>
                            <a href="#" className="text-blue intro-player mx-auto">
                                <span className="d-flex">
                                    <div className="icon blue">
                                        <PlayArrowIcon fontSize="small" style={{marginBottom: 5, marginLeft: 4}}/>
                                    </div>
                                    <b>Watch The Video</b>
                                </span>
                            </a>
                        </div>
                    </section>
                    <section>
                        <div className="content text-center">
                            <h3 className="text-blue text-center mb-5">
                            “Terry, you and your technology have helped me so much. Learning to use the GPMD technology has put me in control of my budget and given me the ability to predict the survival and income and profit of my group, with confidence that I never had before.”
                            </h3>
                            <div>
                                <img src={person2} width="150"/>
                                <p className="mb-0 mt-3"><b>Michael Frazier</b></p>
                                <p>Michael Frazier Designs</p>
                            </div>
                            
                        </div>
                    </section>
                    <section className="bg-sky">
                        <div className="content text-center">
                            <img src={money} width={150}/>
                            <h3 className="text-center mb-5 mt-4">
                            The AIMM System
                            </h3>
                            <p className="large">
                            AIMM is an easy-to-learn system that dramatically shifts how you price and manage jobs and employees. Through training, automation software, and vital numbers, you’ll learn how to stop pricing jobs incorrectly, take control of your company, and begin to make the correct business decisions that you need to expand and improve your contracting business.
                            </p>
                            <h5 className="mt-5 col-10 mx-auto">The AIMM System gives you the information you need to begin running your business, instead of letting your business run you.</h5>
                        </div>
                    </section>
                    <section className="aimm-works">
                        <div className="content">
                            <h3 className="mb-4">
                            How AIMM Works
                            </h3>
                            <p className="large mb-5">
                            AIMM gives the contractor the numbers he needs to know at the end of each day so that he can take the next steps to grow his business. He does this by understanding basic business principles, building the foundation, and knowing and tracking the correct numbers to make better management decisions.
                            </p>
                            <Row className="pt-5">
                                <Col lg={4}>
                                    <div className="col-11">
                                        <h5 className="text-blue text-center">Estimate Correctly</h5>
                                        <p>Most estimating system have a fatal flaw in them. Learn what it is and how to avoid it to start estimating jobs in a way that determines profit, not cost.</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="col-11">
                                        <h5 className="text-blue text-center">Motivate Your Crew</h5>
                                        <p>Letally get rid of the dangerous hourly rate and pay your crew what they deserve, all while increasing profit.</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="col-11">
                                        <h5 className="text-blue text-center">Time Tracking</h5>
                                        <p>AIMM teaches you to track the real hours your crew uses and offer bonus compensation to reach your target.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col lg={4}>
                                    <div className="col-11">
                                        <h5 className="text-blue text-center">Build The Foundation</h5>
                                        <p>This is not very sexy, but a vital first step. Once you establish your budget, you’ll know what to change and when to change it.</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="col-11">
                                        <h5 className="text-blue text-center">GP Predictor</h5>
                                        <p>The GP Predictor tracks your gross profit - in real time. Stop waiting until the job is over to see your profit and acting blindly.</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="col-11">
                                        <h5 className="text-blue text-center">Get The Score <br/>(Vital Numbers)</h5>
                                        <p>Once the foundation is in place, you will know the score and use that knowledge to make sane management decisions.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
                    <section className="bg-sky">
                        <div className="content text-center">
                            <h3 className="text-blue text-center mb-5">
                            “I cannot believe how amazing AIMM is! SO simple, the thing is magic. Total game changer and I’m ecstatic about it! There is no standard as to how to manage a contracting company and this is it! This is absolute gold.”
                            </h3>
                            <div>
                                <img src={person1} width="150"/>
                                <p className="mb-0 mt-3"><b>David Misterly</b></p>
                                <p>Aqualife Ponds</p>
                            </div>
                            
                        </div>
                    </section>
                    <section>
                        <div className="content text-center">
                            <h2 className="text-center mb-4 col-lg-8 col-md-12 mx-auto">
                            Ready to take your contracting business to the next level?
                            </h2>
                            <p className="large mb-5">Sign-Up For Access To AIMM Today</p>
                            <Button variant="contained" color="primary" className="aimm-primary mb-3" style={{width: 200}}>
                                REQUEST A DEMO
                            </Button><br/>
                            <Button variant="outlined" color="primary" className="aimm-outlinedPrimary" style={{width: 200}}>
                                LEARN MORE
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}


export default HomePage;