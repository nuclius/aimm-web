import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import { Row, Col } from "reactstrap";

import terry from "assets/img/terry.png";
import jesse from "assets/img/jesse.png";
import pedro from "assets/img/pedro.png";
import brain from "assets/img/brain.png";

import "./style.scss";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="container-fluid p-0">
          <Row className="m-0">
            <Col lg={6}>
              <section className="col-lg-9 col-xs-12 mx-auto">
                <div className="content w-100 pl-4 pr-4">
                  <ul className="tab-menu mb-4 pb-2">
                    <li className="d-inline mr-4">
                      <a href="#" className="text-blue">
                        CONTACT
                      </a>
                    </li>
                  </ul>
                  <h2 className="mb-5">
                    AIMM was built by contractor Terry Morrill to transform his
                    single pavingstone crew into an 8-figure company.
                  </h2>
                  <p className="text-grey">
                    <b>
                      AIMM is a new way of thinking about how you price jobs,
                      how you encourage your employees, and how you track
                      whether your business is making any money and adjust
                      course, not at the end of the year or quarter -
                      <br />
                      <span style={{ fontStyle: "italic" }}>
                        but by the end of every work day.
                      </span>
                    </b>
                  </p>
                  <Button
                    variant="contained"
                    color="primary"
                    className="aimm-primary mt-4"
                  >
                    REQUEST A DEMO
                  </Button>
                </div>
              </section>
            </Col>
            <Col lg={6} className="p-0">
              <img src={terry} width="100%" />
            </Col>
          </Row>

          <section>
            <div className="content pl-4 pr-4 mt-5">
              <p className="large mb-4">
                Since the inception of our paving stone company in 1999 and
                throughout our 20 years in the contracting business we have
                developed systems for all aspects of our operation.
              </p>
              <p className="large mb-4">
                From pricing jobs to managing our employees, these systems were
                the key to the success of our company (
                <span className="text-blue">Pacific Outdoor Living</span>) which
                we used as a laboratory to test them thoroughly. Thanks to these
                systems, we’ve built one of the most advanced and well-organized
                construction companies in the US.
              </p>
              <p className="large mb-4">
                The AIMM System was launched to give contractors and business
                owners a straightforward road map to make their companies more
                profitable and efficient through our proven principles.
              </p>
              <p className="large text-right mr-4">- Terry Morrill</p>
            </div>
          </section>
          <section className="bg-sky">
            <Row className="m-0">
              <Col lg={6}>
                <section className="col-lg-9 col-xs-12 mx-auto">
                  <div className="content w-100 pl-4 pr-4">
                    <h2 className="mb-5">
                      Built by contractors, for contractors.
                    </h2>
                    <p>
                      AIMM is a revolutionary estimation and management software
                      system that exposes the basic falsehood that exists in
                      most other systems. AIMM gives a business owner the power
                      to know on a daily basis whether he is making money,
                      regardless of if he is managing one job or a hundred.
                      <br />
                      <br />
                      After discovering this falsehood, Terry soon realized that
                      contractors needed a successful formula for marketing,
                      selling, hiring, and training; why not put it together in
                      one complete package with a step by step route of how to
                      get there?
                      <br />
                      <br />
                      The backbone of the system is the “Am I Making any Money”
                      software that allows contractors to have the vital data at
                      their finger tips so they know what the next right move
                      will be.
                      <br />
                      <br />
                      We give you the tools that we use ourselves, to accomplish
                      your business goals and to overcome your biggest and
                      smallest issues. Then we help and guide you along the way
                      so you finally reach your dream and your vision.
                      <br />
                      <br />
                      We are passionate about what we do and we truly care about
                      developing people and their businesses, which has formed
                      the foundation of AIMM System™.
                    </p>
                  </div>
                </section>
              </Col>
              <Col lg={1} />
              <Col lg={5} className="p-0">
                <img src={jesse} width="100%" />
              </Col>
            </Row>
          </section>
          <section>
            <Row className="m-0">
              <Col lg={6}>
                <img
                  src={pedro}
                  className="col-lg-10 col-xs-12 float-right"
                  style={{ marginTop: -110 }}
                />
              </Col>
              <Col lg={6}>
                <section className="col-lg-9 col-xs-12 mx-auto contact-link pb-0">
                  <div className="content w-100 pl-4 pr-4">
                    <div className="mb-5">
                      <h3 className="mb-4">Contact Us</h3>
                      <p className="text-grey">
                        8309 Tujunga Ave <br />
                        Suite #201 <br />
                        Sun Valley, CA 91352
                      </p>
                    </div>
                    <div className="mb-5 mt-3">
                      <h3 className="mb-4">General Enquiry</h3>
                      <ul>
                        <li>
                          <PhoneIcon className="contact-icon" />
                          <a href="#">max@aimmsystem.com</a>
                        </li>
                        <li>
                          <MailIcon className="contact-icon" />
                          <a href="#">818.252.0808</a>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-5 mt-3">
                      <h3 className="mb-4">Customer Service</h3>
                      <ul>
                        <li>
                          <PhoneIcon className="contact-icon" />
                          <a href="#">max@aimmsystem.com</a>
                        </li>
                        <li>
                          <MailIcon className="contact-icon" />
                          <a href="#">818.252.0808</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </Col>
            </Row>
          </section>
          <hr />
          <section>
            <div className="content text-center">
              <h2 className="text-center mb-4 col-lg-8 col-md-12 mx-auto">
                Ready for a proven path to grow your company?
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

export default AboutPage;
