import React from 'react'
import PropTypes from 'prop-types'

import me from '../images/photo-ben.jpg'
import tool from '../images/tool.jpg'
import trees from '../images/Trees.jpeg'
class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={me} alt="" /></span>
          <p>I'm Ben Gray. I've been leading teams and building software for the web for almost two decades.</p>
          <p>My passion is building cross-functional teams and developing performant, scalable software.
            I've been fortunate enough to have been on a variety of teams that have built everything from customized data collection and monitoring solutions for Georgia Power to a full stack internal CMS for the writers and editors at CNN and high-traffic e-commerce solutions for Rooms To Go.  Through the years my passion remains the same: quickly producing quality software with teams of awesome people.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={tool} alt="" /></span>
          <p>
            I was going to use this space to "sell" myself.  But you know... I'm an experienced human being.  I've accomplished a LOT in my time on this planet. I've worked in construction, flooring, ministry and now in tech.  For the sake of brevity I'm only listing my tech experience here.
          </p>
          <p><span className="emphasis">Primary expertise</span>: Leadership, Mentoring, Team Building, Problem solving.</p>
          <p><span className="emphasis">Technical expertise</span>: JavaScript, ReactJS, Gatsby Redux, Node.js, HTML, CSS, Docker, AWS, MongoDB.</p>
          <p><span className="emphasis">Technical familiarity</span>: MySQL, PHP, Java, MS Exchange, Linux server administration.</p>

          <h3>Floor & Decor</h3>
          <p>
          Hired to manage a six-member full-stack engineering team that builds internal tools and owns a portfolio of 14 applications. Responsibilities spanned hiring, onboarding, training, mentoring, performance reviews, product delivery, production support, and nurturing team well-being.
          </p>

          <h3>Revel Systems</h3>
          <p>
          I was hired to build and lead an Atlanta based team of engineers and oversee direction, architecture and drive new feature delivery. Entrusted with building a pipeline of technical talent, creating a fun, challenging and rewarding environment. Technology stack consists of React.JS, Python, Postgres within AWS.
          </p>

          <h3>Rooms To Go</h3>
          <p>
            I was hired as a front-end team lead with responsibility for high-level architecture decisions, new feature implementation, operational oversight, work prioritization/assignments, and team oversight to include interviewing, hiring and onboarding, training and mentoring, performance reviews, and ensuring team health.
          </p>

          <h3>Cricket Wireless</h3>
          <p>
            Full Stack JavaScript engineer responsible for leading the CMS team through the full SDLC.  This CMS delivers content to the main Cricket Wireless consumer web portal as well a front-end for writer and editor use.  Responsible for developing, deploying and maintaining the entire stack, from AWS ECS & EC2 to writing front-end JavaScript modules complete with “Bring Your Own” styling in a UMD model.
          </p>

          <h3>CNN</h3>
          <p>
            Software Engineer CNN’s Digital News Publishing Services Team. Worked on full-stack engineering efforts for CNN’s web-based Content Management System using React/Redux, Node, Mongo, Express/Hapi, Docker, Kubernetes, and AWS.
          </p>

          <h3>COX Automotive</h3>
          <p>
            Lead full-stack software development of Digital Retailing products across Autotrader, KBB, Dealer.com and OEM and Dealer Group partners. Work in an agile environment with cross-functional team to develop products that meet the needs of our consumers & clients.
          </p>

          <h3>Outdoor Sportsman Group</h3>
          <p>
            Developed custom internal software which effectively streamlined workflows in multiple departments including order processing, accounting and subscription tracking.
          </p>

          <h3>JMX Services</h3>
          <p>
          Designed and implemented the online customer interface for transmission equipment condition assessment monitoring for Georgia Power. Utilized stored procedures, MSSQL database, HTML, Javascript, SSL certificates, AES encryption, SHA-2 hashing and CSS to achieve this goal.
          </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={trees} alt="" /></span>
          <p>
            When I'm not behind a computer I'm likely hiking a trail somewhere, or fishing on a lake with my wife and kids. I also have a keen interest in modifying and maintaining cars and trucks. It's an odd combination: softare + mechanics.  But if there's one thing I've discovered about myself in my time on this planet, it's that very few things make sense in the grand scheme of things.
          </p>
          <p>
            Life is more than a resume.  Success is more than the balance in a bank account.  I strive to connect people through technologies, embracing the human element and wrangling the technical.
          </p>
          <p>
          I'm a collaborator, a team builder, a problem solver.
          </p>

          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>
            Connect with me via email at bendoylegray@gmail.com or one of the social media sites below:
          </p>
          <ul className="icons">
            <li><a href="https://twitter.com/bgray" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/bendoylegray" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/bendoylegray/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/bengray" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="https://www.linkedin.com/in/bendoylegray/" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    );
}
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main