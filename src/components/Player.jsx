import React, { useRef, useState } from 'react'

import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'
import ReactPlayer from 'react-player'
import "./styles/test.css"
const Player = (props) => {

    function Player() {

        const [playing, setPlaying] = useState(false)
        const [volume, setvolume] = useState(1)
        const [progress, setProgress] = useState(0)
        const [fullScreen, setFullScreen] = useState(false);
        const [mute, setMute] = useState(false)
        const inputEl = useRef(null);
        const fsc = useRef(null);

        const onButtonClick = (time) => {
            inputEl.current.seekTo(parseFloat(time))
        };
        const handleClickFullscreen = () => {
            if (!fullScreen) {
                screenfull.request(findDOMNode(fsc.current))
                setFullScreen(true)
            } else {
                screenfull.exit()

                setFullScreen(false)
            }
        }
        let timer = setTimeout(0)
        const [cursour, setCursour] = useState("none")
        const [buttonVis, setButtonVis] = useState("hidden")
        const [continueButton,setContinueButton] = useState("visible")
        const progressChange = (e) => {
            onButtonClick((e.target.value / 100))

        }

        const volumeChange = () => {
            setMute(!mute)
        }

  
        window.onunload = () => {
            localStorage.setItem(props.value,progress)
        }
      
        window.onbeforeunload = function() {
         localStorage.setItem(props.value,progress)
       };

        return (
            <>
                <div className="testBody" ref={fsc} style={{ cursor: cursour }}>
                    <div>
                        <button style={{position:"absolute", visibility:continueButton,marginLeft:"-390px", borderRadius: "2px", border: "1px", width: "auto", textAlign: "center"}} onClick={()=>setPlaying(true)}> Продолжить с </button>
                    <ReactPlayer
                        ref={inputEl}
                        url={"https://cdn1.kinogo.by/movies/94008a47cd300ff45316ab9c03bbf7fe55a90b01/ecb4f601360d12131b9a813e6663dea2:2020042907/240.mp4"}
                        height={"100%"}
                        width={"100%"}
                        volume={volume}
                        playing={playing}
                        onPlay={()=>{setContinueButton("hidden")}}
                        muted={mute}
                        onProgress={(e) => setProgress(e.played * 100)}
                        /*onPause={this.handlePause}
                        onEnded={this.handleEnded}*/
                        onClick={(e) => {
                            clearTimeout(timer);
                            timer = setTimeout(() => {
                                setPlaying(!playing)
                            }, 250);
                        }}
                        onDoubleClick={() => {
                            clearTimeout(timer);
                            handleClickFullscreen();
                        }}
                        onMouseMove={(e) => {
                            setCursour("default")
                            setButtonVis("visible")
                            /*  timer = setTimeout(() => {
                                  setButtonVis("hidden")
                                  setCursour("none")
                              }, 5000);*/
                        }}
                    />
                    </div>
                    <div className="controlPlayerButtons" style={{ visibility: buttonVis }}>
                        <div className="startStop">
                            <button style={{ borderRadius: "2px", border: "1px", width: "50px", textAlign: "center" }} onClick={() => { setPlaying(!playing) }}>{!playing ? <div>&#10148;</div> : <div style={{ transform: "rotate(90deg)" }}>&#61;</div>}</button>
                        </div>
                        <div className="previus">
                            <button style={{ borderRadius: "2px", border: "1px", width: "50px", textAlign: "center" }}>&lt;</button>
                        </div>
                        <form>
                            <div class="form-group">
                                <input type="range" class="form-control-range" id="formControlRange" value={progress} onChange={(e) => { progressChange(e) }} />
                            </div>
                        </form>
                        <div className="next">
                            <button style={{ borderRadius: "2px", border: "1px", width: "50px", textAlign: "center" }}>&gt;</button>
                        </div>
                        <div className="volume">
                            <button style={{ borderRadius: "2px", border: "1px", width: "50px", textAlign: "center", backgroundColor: !mute ? "#F0F0F0" : "red" }} onClick={() => { volumeChange() }}>&#x266C;<div className="volumeContent">
                                <form style={{ width: "50px" }}>
                                    <div class="form-group">
                                        <input type="range" class="form-control-range" id="formControlRange" value={volume * 100} onChange={(e) => { setvolume(e.target.value / 100) }} />
                                    </div>
                                </form>
                            </div>
                            </button>
                        </div>
                        <div className="quality">
                            <button style={{ borderRadius: "2px", border: "1px", width: "50px", textAlign: "center" }} onClick={handleClickFullscreen}><div className="variants"><button style={{ borderRadius: "2px", border: "1px", width: "50px", textAlign: "center" }}>240</button><button style={{ borderRadius: "2px", border: "1px", width: "50px", textAlign: "center" }}>360</button></div>480</button>
                        </div>
                        <div className="fsc">
                            <button style={{ borderRadius: "2px", border: "1px", width: "50px", textAlign: "center" }} onClick={handleClickFullscreen}>{!fullScreen ? <div>open</div> : <div>close</div>}</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return Player()
}

export default Player