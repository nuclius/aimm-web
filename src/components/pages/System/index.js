import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Row, Col } from "reactstrap";

import person1 from "assets/img/person1.png";
import person2 from "assets/img/person2.png";
import predictor from "assets/img/predictor.png";
import timer from "assets/img/timer.png";
import graph from "assets/img/graph.png";
import brain from "assets/img/brain.png";
import todd from "assets/img/todd.png";

import "./style.scss";

class SystemPage extends Component {
  render() {
    return (
      <div className="system-page">
        <div className="container-fluid p-0">
          <Row className="m-0">
            <Col lg={6} className="p-0">
              <img src={todd} width="100%" />
            </Col>
            <Col lg={6}>
              <section className="col-lg-9 col-md-12 mx-auto">
                <div className="content w-100 pl-4 pr-4">
                  <ul className="tab-menu mb-4 pb-2">
                    <li className="d-inline mr-4">
                      <a href="#" className="text-blue">
                        GPMD
                      </a>
                    </li>
                    <li className="d-inline mr-4">
                      <a href="#" className="text-blue">
                        TIME TRACKING
                      </a>
                    </li>
                    <li className="d-inline mr-4">
                      <a href="#" className="text-blue">
                        GP PREDICTOR
                      </a>
                    </li>
                    <li className="d-inline">
                      <a href="#" className="text-blue">
                        VITAL NUMBERS
                      </a>
                    </li>
                  </ul>
                  <h2 className="mb-5">
                    The AIMM system is a tool for contractors who want to take
                    control of their company - and their profit.
                  </h2>
                  <p>
                    Do you know how much money your business earns per day? What
                    about the worth of your company? Do your employees know how
                    much they need to make a day to earn a profit? <br />
                    <br />
                    AIMM is an estimation software that shows you how to price
                    jobs, track profit, and motivate employees - all while
                    operating smoother and growing faster. 
                  </p>
                </div>
              </section>
            </Col>
          </Row>

          <section>
            <div className="content pl-4 pr-4">
              <h3 className="text-center mb-4">
                {" "}
                Profit percentages don’t cover your overhead bin; money does.
              </h3>
              <h4 className="text-center text-blue mb-5">
                But where does that money come from?
              </h4>
              <p className="large mb-4">
                Let’s say you are the coach football team and you don’t know the
                score.  How can you make the right decision, call the right
                play, take a timeout, or run out the clock?  Running a
                contracting business is not much different, especially if you
                are calling the plays without knowing the score!
              </p>
              <p className="large mb-4">
                All contract management systems give you the score after the
                game is over, often months too late to call the right play. Not
                only that, most other systems give you the WRONG score to begin
                with.{" "}
              </p>
              <p className="large mb-4">
                The AIMM system gives you the score at the end of each day, for
                each job and all your jobs collectively, so you can adjust
                course and know the moves, before it’s too late to make a
                change.
              </p>
              <p className="large mb-4">
                AIMM is a method of tracking your overhead bin, knowing the
                numbers needed to fill it, and doing so by implementing an
                estimation system based on GPMD.
              </p>
            </div>
          </section>
          <section className="bg-sky">
            <div className="content text-center">
              <h3 className="text-center mb-5">What Is GPMD?</h3>
              <p className="large">
                AIMM is built around the proven concept of Gross Profit per Man
                Day, or GPMD for short. GPMD allows contractors from all fields
                to estimate jobs based not on an often obscure profit
                percentage, but to instead track time, price accordingly, and
                book jobs knowing exactly how much each crew member needs to
                produce each day to turn a profit for your company.{" "}
              </p>
              <p className="large">
                <b>
                  Terry Morrill, the creator of GPMD, used this system to grow
                  his single-crew pavingstone business into an 8-figure
                  contracting company.
                </b>{" "}
              </p>
              <p className="large">
                AIMM is his passion project to share that success with fellow
                contractors.
              </p>
            </div>
          </section>
          <section>
            <div className="w-100 text-center pl-4">
              <h3 className="text-blue text-center mb-5">
                The Essential Tools of The AIMM System
              </h3>
              <p className="pt-5"></p>
              <Row className="pt-5 m-0">
                <Col lg={5}>
                  <img src={timer} width="150" />
                  <h3 className="text-center mb-5">Time Tracking</h3>
                </Col>
                <Col lg={1}></Col>
                <Col lg={6} className="p-0">
                  <h3 className="text-left mb-4 mt-5 pr-4">
                    Track REAL hours.
                  </h3>
                  <hr />
                  <p className="mt-5 text-left col-lg-7 col-xs-12 p-0 pr-4">
                    Contractors often find that their crew hours don’t add up.
                    The expected hours are either over, or under, the job
                    estimate. By tracking the REAL hours that your crews are
                    working, you learn how to price accordingly - and offer
                    incentives to those crew members who are exceeding their
                    expected efficiency and increasing company profit.
                  </p>
                </Col>
              </Row>
            </div>
          </section>
          <section className="bg-sky">
            <div className="w-100 text-center">
              <Row className="m-0">
                <Col lg={5} className="p-0">
                  <img src={predictor} width="100%" />
                </Col>
                <Col lg={7} className="pt-5 pb-5 pl-4 pr-4">
                  <div className="d-flex justify-content-center align-items-center h-100 flex-column">
                    <div>
                      <img src={graph} width="160" />
                      <h2 className="mt-5 mb-5">GP Predictor</h2>
                      <p className="col-lg-8 mx-auto text-left mb-5">
                        With the Gross Profit Predictor, AIMM puts the control
                        back into your hands by showing you exactly how much
                        profit you’ll make per job. Through breaking down your
                        Vital Numbers, you’ll clearly see where you can make
                        changes to your plans to increase profit and clear your
                        overhead with every single job, every time.
                      </p>
                      <Button
                        variant="contained"
                        color="primary"
                        className="aimm-primary mt-5"
                        style={{ width: 200 }}
                      >
                        REQUEST A DEMO
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
          <section>
            <div className="w-100 text-center">
              <p className="pt-4"></p>
              <Row className="pt-5 m-0">
                <Col lg={5} className="pr-4 mb-3 p-0">
                  <h3 className="text-right mb-4 mt-4 pl-4">Know The Score</h3>
                  <hr />
                  <p className="mt-5 text-left col-lg-10 col-xs-12 float-right p-0 pl-4">
                    Your Vital Numbers are how you will track, maintain, and
                    adjust course as a contractor. AIMM puts these numbers front
                    and center to show you where the errors are and how to fix
                    them - not at the end of the year, but at the end of each
                    and every work day.
                  </p>
                </Col>
                <Col lg={2}></Col>
                <Col lg={5}>
                  <img src={brain} width="150" />
                  <h3 className="text-center mt-3">Vital Numbers</h3>
                </Col>
              </Row>
            </div>
          </section>
          <section className="bg-sky">
            <div className="content text-center pl-4 pr-4">
              <h3 className="text-blue text-center mb-5">
                “Because I have been able to predict and budget using the AIMM
                tools, I discovered that I have been failing because I couldn’t
                budget any job I took on. You have opened my eyes to parts of my
                business that I couldn’t see before. Now I can.”
              </h3>
              <div>
                <img src={person2} width="150" />
                <p className="mb-0 mt-3">
                  <b>Michael Frazier</b>
                </p>
                <p>Michael Frazier Designs</p>
              </div>
            </div>
          </section>
          <section>
            <div className="content text-center">
              <h2 className="text-center mb-4 col-lg-8 col-md-12 mx-auto">
                It’s time to take control of your contracting business.
              </h2>
              <p className="large mb-5">Sign-Up For Access To AIMM Today</p>
              <Button
                variant="contained"
                color="primary"
                className="aimm-primary mb-3"
                style={{ width: 200 }}
              >
                REQUEST A DEMO
              </Button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SystemPage;
