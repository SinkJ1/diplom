import React, { useRef, useState, useEffect } from 'react'

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
        const [defaultWidth, setDefaultWidth] = useState("47%");
        const inputEl = useRef(null);
        const fsc = useRef(null);

        const onButtonClick = (time) => {
            inputEl.current.seekTo(parseFloat(time))
        };
        const handleClickFullscreen = () => {
            if (!fullScreen) {
                screenfull.request(findDOMNode(fsc.current))
                setDefaultWidth("100%");
                setFullScreen(true)
            } else {
                setDefaultWidth("47%");
                screenfull.exit()

                setFullScreen(false)
            }
        }

        const escFunction =(event)=>{
            if(event.keyCode === 27) {
              setDefaultWidth("47%");
            }
          }

          document.addEventListener("fullscreenchange", function(e){
            console.log('статус fullscreen = ', document.fullscreenEnabled + "");
          });

        useEffect(()=>{
            document.addEventListener("keydown", escFunction, false);
        })

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
                        url={"https://cdn1.kinogo.by/movies/7bae3e38689484bbaa71f9ab41371550ea6b4532/ac64bfda57f1b56fcdb23b4941baa778:2020061912/360.mp4"}
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
                    
                    <div className="controlPlayerButtons"  style={{ visibility: buttonVis, width:defaultWidth }}>
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
                </div>
            </>
        );
    }
    return Player()
}

export default Player