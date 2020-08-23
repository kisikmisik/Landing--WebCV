import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import Sliders from "./components/Sliders/Sliders";

class App extends React.Component {
    componentDidMount() {
        document.title = "Vladimir Nofenko | Web developer | Portfolio"
    }

    render() {
        return (
            <div className="main-wrapper">
                <Header/>
                <SideNav/>
                <Sliders/>
            </div>
        );
    }
}
export default App;
