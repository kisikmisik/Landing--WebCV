import React from 'react';
import './App.css';

class App extends React.Component {
    componentDidMount() {
        document.title = "Vladimir Nofenko | Web developer | Portfolio"
    }

    render() {
        return (
            <>
                <h1 className="hidden">Front-end developer, UI/UX specialist web resume, work and projects</h1>
                <header className="header">
                    <div className="header__burger">
                        <nav className="main-nav">
                            <ul className="main-nav__list">
                                <li className="main-nav__item"><a href="#home">Home</a></li>
                                <li className="main-nav__item"><a href="#works">Works</a></li>
                                <li className="main-nav__i+tem"><a href="#contact">Contact</a></li>
                                <li className="main-nav__item"><a href="#hireMe">Hire me</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main className="main">

                    <section className="home slide slide--1">
                        <h2 className="home__title">Hi, I am Vladimir, web developer</h2>
                        <button className="home__slide">Hire me</button>
                        <button className="home__button">Resume</button>
                        <img src="#" alt="Portrait of ugly me" className="home__myPhoto"/>
                        <div className="home__links">
                            <a href="https://www.linkedin.com/in/vnofenko/"
                               className="home__link--linkedin link-button">linkedin</a>
                            <button className="button">Portfolio</button>
                          <a href="https://github.com/kisikmisik"
                             className="home__link--github link-button">github</a>
                        </div>
                    </section>

                    <section className="works slide slide--2">
                        <h2 className="works__title">Portfolio</h2>
                        <div className="works__filters filters">
                            <button className="filters__filter button">Show all</button>
                            <button className="filters__filter button">React.js</button>
                            <button className="filters__filter button">JavaScript</button>
                            <button className="filters__filter button">Less</button>
                            <button className="filters__filter button">Sass</button>
                            <button className="filters__filter button">Canvas</button>
                        </div>

                        <ul className="works__portfolio portfolio">
                            <li className="portfolio__item">
                                <button className="portfolio__item-view">View project</button>
                                <ul className="portfolio__item-stack">
                                    <li className="portfolio__item-tech">Webapp</li>
                                    <li className="portfolio__item-tech">HTML5</li>
                                    <li className="portfolio__item-tech">Sass</li>
                                    <li className="portfolio__item-tech">Animations</li>
                                    <li className="portfolio__item-tech">UI/UX design</li>
                                </ul>

                                <article className="portfolio__item-popup project visually-hidden">
                                    <img src="#" alt="project preview" className="project__preview"/>
                                    <div className="project__right-section">
                                        <h3 className="project__title">Vladimir Nofenko | Web developer | Portfolio</h3>
                                        <p className="project__about">
                                            This website is a showcase of my recent
                                            projects as a Front-end Web Developer and as UI/UX designer.
                                        </p>
                                        <h4 className="project__stack-title">Technical Sheet</h4>
                                        <p className="project__stack-desc">
                                            Code technologies and skills I
                                            got involved with while working on this project:
                                        </p>
                                        <ul className="project__stack-list">
                                            <li className="project__stack-item">React.js</li>
                                            <li className="project__stack-item">Redux, React-redux</li>
                                            <li className="project__stack-item">Sass</li>
                                        </ul>
                                        <div className="project__links">
                                            <a target="_blank" href="#" className="project__link-visit link-button">Visit
                                                the Website</a>
                                            <a target="_blank"
                                               href="https://github.com/kisikmisik/Landing--WebCV"
                                               className="project__link-code link-button">Source code</a>
                                        </div>
                                    </div>
                                  <button className="project__close">x</button>
                                </article>
                            </li>
                        </ul>
                    </section>

                  <section className="contact slide slide--3">
                    <h2 className="visually-hidden">Contact information, address, map location and get in touch form</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163975.34506598933!2d19.864790217145064!
                        3d50.04668135271086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6
                        b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1598013391521!5m2!1spl!2spl"
                        width="800" height="600" frameBorder="0" style={{border:0}} allowFullScreen=""
                        aria-hidden="false" tabIndex="0"/>
                    <article className="contact__block info-block">
                      <address className="info-block__address">Krakow, Poland</address>
                      <a className="info-block__email" href="mailto:700mmr@gmail.com">700mmr@gmail.com</a>
                      <a className="info-block__email" href="tel:+48537118414">+48 537 118 414</a>
                      <button className="info-block__contact-btn">Contact me</button>

                      <form className="contact-popup visually-hidden">
                        <label className="contact-popup__input-wrapper">
                          <p className="contact-popup__label">Email:</p>
                          <input type="email" className="contact-popup__email" placeholder="Email address"/>
                        </label>
                        <label className="contact-popup__input-wrapper">
                          <p className="contact-popup__label">Title:</p>
                          <input type="text" className="contact-popup__name" placeholder="Theme"/>
                        </label>
                        <label className="contact-popup__input-wrapper">
                          <p className="contact-popup__label">Message:</p>
                          <textarea cols="30" rows="10" className="contact-popup__message" placeholder="Type your message.."/>
                        </label>
                        <button type="submit" className="contact-popup__send">Send your message</button>
                      </form>
                    </article>
                  </section>

                  <section className="hire-me slide slide--4">
                    <h2 className="visually-hidden">Hire me to make a website or webapp for you or your business</h2>
                    <form className="hire-me__form">
                      <fieldset className="hire-me__work-type-wrapper">
                        <legend>You want me to do:</legend>
                        <label className="hire-me__landing">
                          <span>Landing page</span>
                          <input type="checkbox"/>
                        </label>
                        <label className="hire-me__shop">
                          <span>Online shop</span>
                          <input type="checkbox"/>
                        </label>
                        <label className="hire-me__html">
                          <span>Semantic HTML</span>
                          <input type="checkbox"/>
                        </label>
                        <label className="hire-me__app">
                          <span>Web application</span>
                          <input type="checkbox"/>
                        </label>
                        <label className="hire-me__design">
                          <span>UI/UX design</span>
                          <input type="checkbox"/>
                        </label>
                        <label className="hire-me__job">
                          <span>Remote ft/pt job</span>
                          <input type="checkbox"/>
                        </label>
                        <label className="hire-me__other">
                          <span>Other</span>
                          <input type="checkbox"/>
                        </label>
                      </fieldset>
                      <input type="text" className="hire-me__name" placeholder="Name"/>
                      <input type="email" className="hire-me__email" placeholder="Email"/>
                      <button type="submit" className="hire-me__submit">Send request</button>
                    </form>
                  </section>
                </main>
            </>
        );
    }
}
export default App;
