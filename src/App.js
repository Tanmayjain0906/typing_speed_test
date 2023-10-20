import React from "react";
import Navigator from "./components/Navigator";
import SetTimer from "./components/SetTimer";
import TypingBox from "./components/TypingBox";
import TypingBoxHandler from "./components/TypingBoxHandler";
import Footer from "./components/Footer";


const App = () => {

    return (
        <div className="main">
            <Navigator />
            <SetTimer />
            <TypingBox />
            <TypingBoxHandler />
            <Footer />
        </div>
    )
}

export default App;