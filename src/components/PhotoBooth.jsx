import React,{useState} from "react";
import webCam from "react-webcam";
import PhotoStudio from "./PhotoStudio";
import "./PhotoBooth.css";
const PhotoBooth = ()=>{

const [coinInserted,setCoinInserted] = useState(false);
const [curtainOpen,setCurtainOpen]= useState(false);
const [showStudio,setshowStudio]=useState(false);

const handleInsertClick=()=> setCoinInserted(true);

const handleCoinClick = ()=>{
    setCurtainOpen(true);
    setTimeout(()=>{
        setshowStudio(true);
    },1000);
};

if(showStudio){
    return <PhotoStudio/>;
}

return (
    <div className="booth-container">
        <div className="booth-header">welcome to photobooth</div>

        <div className="booth-body">
            <div className="coin-slot">
                {!coinInserted ? (
                    <p className="insert-text" onClick ={handleInsertClick}>Insert
                    <br/>
                    coin here
                    </p>
                ):(
                    <div className="coin" onClick ={handleCoinClick}></div>

                )}
            </div>

            <div className="curtain-wrapper">
                <webCam
                audio ={false}
                screenshotFormat="image/jpeg"
                className="webcam-preview"/>
                <div className={`curtain ${curtainOpen ? "open" : ""}`} />
            </div>
        </div>
    </div>
);

};
export default PhotoBooth;