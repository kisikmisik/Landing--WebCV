import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import Sliders from "./components/Sliders/Sliders";
import {connect} from "react-redux";
import {changeCurrentSlide, changeOuterMenuStatus} from "./redux/mainReducer";
import OuterNav from "./components/OuterNav/OuterNav";


class App extends React.Component {
    componentDidMount() {
        document.title = "Vladimir Nofenko | Web developer | Portfolio"
        let sliderWrapper = document.getElementById('mainSliders')
        sliderWrapper.addEventListener('scroll', (evt) => {
            this.changeSideNav(sliderWrapper)
        })
        let mainWrapper = document.getElementById('main-wrapper');
        mainWrapper.addEventListener('click', () => {
            if (mainWrapper.classList.contains('outer-left')) {
            this.props.changeOuterMenuStatus(false);
            }
        })
    }
    changeSideNav(sliderWrapper) {
        // this condition below checks how many pixels slider wrapper has been scrolled, and selects side nav item depending on that
        if (sliderWrapper.scrollTop < 50) {
            this.props.changeCurrentSlide(1)
        } else if (sliderWrapper.scrollTop > 50 && sliderWrapper.scrollTop < 1100) {
            this.props.changeCurrentSlide(2)
        } else if (sliderWrapper.scrollTop > 1100 && sliderWrapper.scrollTop < 1700) {
            this.props.changeCurrentSlide(3)
        } else if (sliderWrapper.scrollTop > 1700) {
            this.props.changeCurrentSlide(4)
        }
    }
    render() {
        return (
            <div className={this.props.isOuterMenu ? "perspective" : ""}>
                <div id="main-wrapper" className={this.props.isOuterMenu ? "main-wrapper outer-left" : "main-wrapper"}>
                    <Header changeOuterMenuStatus={this.props.changeOuterMenuStatus}/>
                    <SideNav changeCurrentSlide={this.props.changeCurrentSlide}
                             navItems={this.props.navItems}
                             currentSlide={this.props.currentSlide}/>
                    <Sliders currentSlide={this.props.currentSlide}
                             projects={this.props.projects}
                             filters={this.props.filters} />
                </div>
                <OuterNav isOuterMenu={this.props.isOuterMenu}
                          currentSlide={this.props.currentSlide}
                          navItem={this.props.navItems}
                          changeOuterMenuStatus={this.props.changeOuterMenuStatus} />
            </div>


        );
    }
}
let mapStateToProps = (state) => {
    return {
        currentSlide: state.mainReducer.currentSlide,
        navItems: state.mainReducer.navItems,
        isOuterMenu: state.mainReducer.isOuterMenu,
        projects: state.mainReducer.projects,
        filters: state.mainReducer.filters
    }
}

let AppContainer = connect(mapStateToProps, {changeCurrentSlide, changeOuterMenuStatus})(App)
export default AppContainer;
