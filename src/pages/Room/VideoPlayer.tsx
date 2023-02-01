import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./styles";

const VideoPlayer = (stream: any) => {
  const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

  function useCurrentWidth() {
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth());

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
      const resizeListener = () => {
        // change width from the state object
        setWidth(getWidth())
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);

      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
      }
    }, [])

    return width;
  }

  // let videoRef = useRef<any>();

  // videoRef.current.srcObject = stream;
  
  // const videoStop = () => {
  //   const videoTrack = videoRef.current;
  //   if (videoTrack) {
  //     // videoTrack.stop()
  //   }
  // }

  return (
    <>
      {/* <button onClick={() => videoStop()}>Parar</button> */}
      <video ref={stream} width={useCurrentWidth()} autoPlay
                        playsInline
                        muted
                        controls />
    </>
  )
}

export default VideoPlayer;