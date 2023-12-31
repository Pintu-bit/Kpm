import React from "react";
import { Row, Col, Card } from "antd";
// import "antd/dist/antd.css";
import logo from '../assets/logo.png'
import "tailwindcss/tailwind.css";

const About = () => {
  // Define the logo text and the intro text for KPM Seeds
  const logoText = " About KPM seeds";
  const introText =
    "Seeds Pvt Ltd is a leading seed company established in two thousand twenty-one with its headquaters at Purulia West Bengal (India) Kpm Seeds is one of the pioneer in Indian seed industry commited to serve farming communities with its high quality seeds. Rooted in tradition and powred by technology, we offer a diverse range of premium paddy seeds.";

  // Define the four qualities of KPM Seeds and their icons
  const qualities = [
    {
      title: "Products",
      icon: "🌱",
      description: "We have over 1000 products for different crops and regions.",
    },
    {
      title: "Quality",
      icon: "🌟",
      description: "We ensure the highest quality standards for our products and services.",
    },
    {
      title: "Innovation",
      icon: "💡",
      description: "We invest in research and development to create new and improved solutions for our customers.",
    },
    {
      title: "Sustainability",
      icon: "🌎",
      description: "We care about the environment and the social impact of our business.",
    },
  ];

  // Return the JSX code for the about section
  return (
    <div className="bg-green-100 p-4 border-t-2 border-black">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={7} className="text-center">
        <div className="flex items-center gap-4 justify-center md:mt-[40%]">
        <h1 className="text-4xl font-bold text-green-900">About</h1>
        <img className="h-[6rem] w-[6rem]" src={logo} alt="" />
        </div>
        
        </Col>
        <Col xs={24} md={7} className="text-center">
          <p style={{fontFamily:'sans-serif'}} className="text-xl text-green-700"><span style={{fontSize:"3rem", fontFamily:'fantasy',}} className="text-blue-400">Kpm</span> {introText}</p>
        </Col>
        <Col xs={24} md={8}>
          <Row gutter={[8, 8]}>
            {qualities.map((quality) => (
              <Col xs={12} md={6} key={quality.title}>
                <Card
                  className="bg-green-300   text-white"
                  bordered={false}
                  cover={<div className="text-4xl">{quality.icon}</div>}
                >
                  <Card.Meta className="text-black"  title={quality.title} description={quality.description} />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default About;
