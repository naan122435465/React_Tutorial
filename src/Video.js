import { forwardRef } from "react";
import { useImperativeHandle, useRef } from "react";
import video1 from "./video/media.mp4";

function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  return <video ref={videoRef} src={video1} width={300} />;
}
export default forwardRef(Video);
