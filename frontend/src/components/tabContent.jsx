import React, { useState } from "react";
import { Tab, Nav, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const TabView = () => {
  const [activeKey, setActiveKey] = useState("fullstack");
  
  const tabs = [
    {
        key: "fullstack",
        title: (
          <div
        className={`tabComponent-custom-card-1 ${
          activeKey === "fullstack" ? "active-tab" : ""
        }`}
        onClick={() => handleTabClick("fullstack")}
      >
            <div className="tabComponent-icon-circle-1">
              <i>
                <img
                  src="src/assets/images/training_program_img/fluent_window-dev-edit-16-filled.png"
                  alt="Head-lightbulb"
                  className="mb-1"
                />
              </i>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="tabComponent-text">Full-stack<br/>Development</p>
              <i className="tabComponent-arrow-icon">&#8594;</i>
            </div>
          </div>
        ),
        color:"#EAF7FF",
      },
    { key: "frontend", 
      title: (
        <div
        className={`tabComponent-custom-card-2 ${
          activeKey === "frontend" ? "active-tab" : ""
        }`}
        onClick={() => handleTabClick("frontend")}
      >
                <div className="tabComponent-icon-circle-2">
                  <i>
                    <img
                      src="src/assets/images/training_program_img/akar-icons_html-fill.png"
                      alt="training-class"
                      className="mb-1"
                    />
                  </i>
                </div>
                <div className="d-flex align-items-center justify-content-between w-100">
                <p className="tabComponent-text">Front-end<br/>Development</p>
                  <i className="tabComponent-arrow-icon">&#8594;</i>
                </div>
              </div>
    ),
    color:"#FFEAEB",
   },
    { key: "DataEngineering", 
      title: (
        <div
        className={`tabComponent-custom-card-3 ${
          activeKey === "DataEngineering" ? "active-tab" : ""
        }`}
        onClick={() => handleTabClick("DataEngineering")}
      >
        <div className="tabComponent-icon-circle-3">
          <i>
            <img
              src="src/assets/images/training_program_img/bxs_data.png"
              alt="anvil-impact"
              className="mb-1"
            />
          </i>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100">
        <p className="tabComponent-text">Data<br/>Engineering</p>
          <i className="tabComponent-arrow-icon">&#8594;</i>
        </div>
      </div>
    ),
    color:"#FFF2E8"
   },
    { key: "SoftwareTesting", 
      title: (
        <div
        className={`tabComponent-custom-card-4 ${
          activeKey === "SoftwareTesting" ? "active-tab" : ""
        }`}
        onClick={() => handleTabClick("SoftwareTesting")}
      >
                <div className="tabComponent-icon-circle-4">
                  <i>
                    <img
                      src="src/assets/images/training_program_img/grommet-icons_system.png"
                      alt="handshake"
                      className="mb-1"
                    />
                  </i>
                </div>
                <div className="d-flex align-items-center justify-content-between w-100">
                <p className="tabComponent-text">Software<br/>Testing</p>
                  <i className="tabComponent-arrow-icon">&#8594;</i>
                </div>
              </div>
    ),
    color:"#F6FFCB",
  },
  ];

  const fullstackContent = {
    firstThree: [
      {
        title: "Front-End Technologies",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "HTML5, CSS3, JavaScript",
          "Responsive web design",
          "Front-end frameworks (React / Next.js)",
        ],
        image: "src/assets/images/training_program_img/front-end-tech.png",
      },
      {
        title: "Back-end Technologies",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "Server-side programming (Node.js / Python)",
          "Database management (MySQL / PostgreSQL)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "src/assets/images/training_program_img/back-end-tech.png",
      },
      {
        title: "Deployment and Hosting",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "Cloud platforms (AWS, Azure)",
          "Containerization (Docker)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "src/assets/images/training_program_img/deploymentAndHost.png",
      },
    ],
    lastColumn: [
      {
        title: "Engineering Tools",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "Version Control (GIT)",
          "Package managers (npm, yarn)",
          "Build tools (Webpack, Gulp)",
        ],
      },
      {
        title: "Authentication",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: ["OAuth and JWT"],
      },
      {
        title: "Project Management",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
      {
        title: "Soft Skills",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
    ],
  };

  const frontEndContent = {
    firstThree: [
      {
        title: "Front-End Technologies",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "HTML5, CSS3, JavaScript",
          "Responsive web design",
          "Front-end frameworks (React / Next.js)",
        ],
        image: "src/assets/images/training_program_img/front-end-tech.png",
      },
      {
        title: "Back-end Technologies",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "Server-side programming (Node.js / Python)",
          "Database management (MySQL / PostgreSQL)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "src/assets/images/training_program_img/back-end-tech.png",
      },
      {
        title: "Deployment and Hosting",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "Cloud platforms (AWS, Azure)",
          "Containerization (Docker)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "src/assets/images/training_program_img/deploymentAndHost.png",
      },
    ],
    lastColumn: [
      {
        title: "Engineering Tools",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "Version Control (GIT)",
          "Package managers (npm, yarn)",
          "Build tools (Webpack, Gulp)",
        ],
      },
      {
        title: "Authentication",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: ["OAuth and JWT"],
      },
      {
        title: "Project Management",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
      {
        title: "Soft Skills",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
    ],
  };
  const DataEngineeringContent = {
    firstThree: [
      {
        title: "Front-End Technologies",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "HTML5, CSS3, JavaScript",
          "Responsive web design",
          "Front-end frameworks (React / Next.js)",
        ],
        image: "src/assets/images/training_program_img/front-end-tech.png",
      },
      {
        title: "Back-end Technologies",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "Server-side programming (Node.js / Python)",
          "Database management (MySQL / PostgreSQL)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "src/assets/images/training_program_img/back-end-tech.png",
      },
      {
        title: "Deployment and Hosting",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "Cloud platforms (AWS, Azure)",
          "Containerization (Docker)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "src/assets/images/training_program_img/deploymentAndHost.png",
      },
    ],
    lastColumn: [
      {
        title: "Engineering Tools",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "Version Control (GIT)",
          "Package managers (npm, yarn)",
          "Build tools (Webpack, Gulp)",
        ],
      },
      {
        title: "Authentication",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: ["OAuth and JWT"],
      },
      {
        title: "Project Management",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
      {
        title: "Soft Skills",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
    ],
  };
  const SoftwareTestingContent = {
    firstThree: [
      {
        title: "Front-End Technologies",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "HTML5, CSS3, JavaScript",
          "Responsive web design",
          "Front-end frameworks (React / Next.js)",
        ],
        image: "src/assets/images/training_program_img/front-end-tech.png",
      },
      {
        title: "Back-end Technologies",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "Server-side programming (Node.js / Python)",
          "Database management (MySQL / PostgreSQL)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "src/assets/images/training_program_img/back-end-tech.png",
      },
      {
        title: "Deployment and Hosting",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "Cloud platforms (AWS, Azure)",
          "Containerization (Docker)",
          "Server-side frameworks (Express.js / Django)",
        ],
        image: "src/assets/images/training_program_img/deploymentAndHost.png",
      },
    ],
    lastColumn: [
      {
        title: "Engineering Tools",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: [
          "Version Control (GIT)",
          "Package managers (npm, yarn)",
          "Build tools (Webpack, Gulp)",
        ],
      },
      {
        title: "Authentication",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: ["OAuth and JWT"],
      },
      {
        title: "Project Management",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
      {
        title: "Soft Skills",
        tickMark: "src/assets/images/teenyicons_tick-circle-solid.png",
        items: ["Jira / Git"],
      },
    ],
  };
  

  return (
    <Container className="mt-3">
      <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        <Nav variant="tabs">
          {tabs.map((tab) => (
            <Nav.Item key={tab.key}>
              <Nav.Link eventKey={tab.key} className={`nav-tab-${tab.key}`}>{tab.icon} {tab.title} </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content className="">
        <Tab.Pane eventKey="fullstack" className={`fullstack-tabView ${activeKey === "fullstack" ? "active-pane" : ""}`}>
          <Row>
            {fullstackContent.firstThree.map((content, i) => (
              <Col md={3} sm={12} key={i} className="mb-3 mt-3 first-threecolumn">
                <div className="fullstack-tabView-box">
                  <img src={content.image} alt={content.title} className="mb-2 TabviewImages" />
                  <h6 className="tabComponent-title">{content.title}</h6>
                  <ul className="list-unstyled">
                    {content.items.map((item, index) => (
                      <li key={index} className="tabComponent-points"><img src={content.tickMark} alt="tickMark" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
            <Col md={3} sm={12} className="mt-3 last-column">
              {fullstackContent.lastColumn.map((content, i) => (
                <div className="p-2 mb-2 fullstack-lastColumn" key={i}>
                  <h6 className="tabComponent-title">{content.title}</h6>
                  <ul className="list-unstyled">
                    {content.items.map((item, index) => (
                      <li key={index} className="tabComponent-lastColumn-points"><img src={content.tickMark} alt="tickMark" /> {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Col>
          </Row>
        </Tab.Pane>
          <Tab.Pane eventKey="frontend" className={`frontend-tabView ${activeKey === "fullstack" ? "active-pane" : ""}`}>
            <Row>
              {frontEndContent.firstThree.map((content, i) => (
                <Col md={3} sm={12} key={i} className="mb-3 mt-3 first-threecolumn">
                  <div className="frontend-tabView-box" >
                    <img src={content.image} alt={content.title} className="mb-2 TabviewImages" />
                    <h6 className="tabComponent-title">{content.title}</h6>
                    <ul className="list-unstyled">
                      {content.items.map((item, index) => (
                        <li key={index} className="tabComponent-points"><img src={content.tickMark} alt="tickMark" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
              <Col md={3} sm={12} className="mt-3 last-column">
                {frontEndContent.lastColumn.map((content, i) => (
                  <div className="p-2 mb-2 frontend-lastColumn"  key={i}>
                    <h6 className="tabComponent-title">{content.title}</h6>
                    <ul className="list-unstyled">
                      {content.items.map((item, index) => (
                        <li key={index} className="tabComponent-lastColumn-points"><img src={content.tickMark} alt="tickMark" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Col>
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="DataEngineering" className={`DataEngineering-tabView ${activeKey === "fullstack" ? "active-pane" : ""}`}>
            <Row>
              {DataEngineeringContent.firstThree.map((content, i) => (
                <Col md={3} sm={12} key={i} className="mb-3 mt-3 first-threecolumn">
                  <div className="DataEngineering-tabView-box" >
                    <img src={content.image} alt={content.title} className="mb-2 TabviewImages" />
                    <h6 className="tabComponent-title">{content.title}</h6>
                    <ul className="list-unstyled">
                      {content.items.map((item, index) => (
                        <li key={index} className="tabComponent-points"><img src={content.tickMark} alt="tickMark" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
              <Col md={3} sm={12} className="mt-3 last-column">
                {DataEngineeringContent.lastColumn.map((content, i) => (
                  <div className="p-2 mb-2 DataEngineering-lastColumn"  key={i}>
                    <h6 className="tabComponent-title">{content.title}</h6>
                    <ul className="list-unstyled">
                      {content.items.map((item, index) => (
                        <li key={index} className="tabComponent-lastColumn-points"><img src={content.tickMark} alt="tickMark" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Col>
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="SoftwareTesting" className={`SoftwareTesting-tabView ${activeKey === "fullstack" ? "active-pane" : ""}`}>
            <Row>
              {SoftwareTestingContent.firstThree.map((content, i) => (
                <Col md={3} sm={12} key={i} className="mb-3 mt-3 first-threecolumn">
                  <div className="SoftwareTesting-tabView-box" >
                    <img src={content.image} alt={content.title} className="mb-2 TabviewImages" />
                    <h6 className="tabComponent-title">{content.title}</h6>
                    <ul className="list-unstyled">
                      {content.items.map((item, index) => (
                        <li key={index} className="tabComponent-points"><img src={content.tickMark} alt="tickMark" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
              <Col md={3} sm={12} className="mt-3 last-column">
                {SoftwareTestingContent.lastColumn.map((content, i) => (
                  <div className="p-2 mb-2 SoftwareTesting-lastColumn"  key={i}>
                    <h6 className="tabComponent-title">{content.title}</h6>
                    <ul className="list-unstyled">
                      {content.items.map((item, index) => (
                        <li key={index} className="tabComponent-lastColumn-points"><img src={content.tickMark} alt="tickMark" /> {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default TabView;
