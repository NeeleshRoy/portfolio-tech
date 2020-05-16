import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const Home = () => (
  <Container>
    <Row>
      <Col xs="12" md="10" lg="10">
        <div className="animate-hero">
          <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_WdTEui.json" mode="bounce" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
        <h2 className="hero-cta">
        Hello, I&#39;m Neelesh. A <span className="primary-gradient-text">Frontend Engineer</span>.<br/>I create digital-first websites to engage & impact.
        </h2>
      </Col>
      <Col xs="12" md="2" lg="2">
        <div className="cta-buttons">
          <a href="http://www.neeleshroy.in" target="_blank" rel="noopener noreferrer" className="design-portfolio-cta">Design portfolio</a>
        </div>
        <div className="cta-buttons">
          <a href="http://www.github.com/NeeleshRoy" target="_blank" rel="noopener noreferrer" className="github-portfolio-cta"><i className="fa fa-github"></i> Codebases</a>
        </div>
        <div className="cta-buttons">
          <a href="/projects" className="dev-portfolio-cta">Developer projects</a>
        </div>
      </Col>
    </Row>
  </Container>
)
