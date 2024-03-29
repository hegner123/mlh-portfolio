"use client";
import anime from "animejs/lib/anime.es.js";
import { useEffect, useState, useRef } from "react";
export default function ComputerIcon() {
  const svgRef = useRef(null);
  const pathRef = useRef<any>(null);
  const animeRef = useRef<any>(null);
  // const [dashOffset,setDashOffset] = useState(getCurrentDimension())
  // const [windowSize, setWindowSize] = useState(getCurrentDimension())

  //   function getCurrentDimension(){
  //     return {
  //       	width: window.innerWidth,
  //       	height: window.innerHeight
  //     }
  // }
  // useEffect(() => {
  //     const updateDimension = () => {
  //       setWindowSize(getCurrentDimension())
  //       setDashOffset(getCurrentDimension())
  //     }
  //     window.addEventListener('resize', updateDimension);

  //     return(() => {
  //         window.removeEventListener('resize', updateDimension);
  //     })
  //   }, [windowSize])

  useEffect(() => {
    const path = pathRef.current;
    animeRef.current = anime({
      targets: path,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "normal",
      loop: 0,
    });
  }, []);
  return (
    <svg
      viewBox="0 0 2770 627"
      xmlns="http://www.w3.org/2000/svg"
      className="row-start-1 mt-20 pointer-events-none col-span-full"
      ref={svgRef}>
      <g>
        <title>Layer 1</title>
        <path
          className="draw-stroke"
          id="svg_1"
          strokeDashoffset=" 0px"
          strokeDasharray="9881.52734"
          fill="none"
          ref={pathRef}
          d="m2.41732,588.18427c129.884,8.484 1328.047,52.852 1337.972,13.128c5.54,-15.945 -22.653,-23.374 -8.085,-33.271c14.216,-9.38 89.823,-1.158 107.423,-8.694c22.877,-7.733 33.325,-61.093 10.198,-61.948c-40.314,0.304 -258.859,31.461 -276.493,-0.002c-21.389,-41.214 -62.868,-464.976 11.556,-467.659c33.326,0.665 749.881,-5.733 756.979,-5.146c35.117,-0.517 27.735,446.926 -25.08,446.481c-21.452,-0.666 -420.093,27.937 -440.781,13.909c-15.618,-9.893 12.98,-26.048 -4.998,-25.445c-43.531,1.037 -252.311,26.811 -265.165,3.223c-19,-32.589 -34.931,-380.297 -4.561,-401.312c48.016,-18.105 699.185,-16.032 717.539,-2.756c17.001,17.537 2.856,350.248 -24.602,373.07c-12.415,11.202 -289.5,4.475 -316.725,16.227c-29.339,9.486 -20.81,83.75 -23.726,113.553c-4.116,19.725 67.395,-23.956 53.358,13.478c-2.517,13.469 -28.65,24.987 -5.902,23.731c16.246,-0.301 313.75,10.198 327.159,-7.058c23.235,-17.874 -23.507,-69.825 2.568,-83.401c15.084,-8.281 51.509,27.214 50.668,-1.286c0.644,-16.57 2.856,-462.244 11.87,-471.366c13.112,-5.377 52.09,-6.018 64.162,1.988c0.845,10.866 -16.62,521.417 -9.314,527.748c8.906,6.558 134.628,7.669 139.234,-7.7c3.493,-7.465 -8.801,-509.658 -18.773,-515.101c-22.004,-25.634 -66.94,-25.401 -86.537,-0.598c-11.061,3.506 -15.813,552.872 7.38,553.156c34.338,0.165 679.932,-13.604 682.281,-8.96"
        />
      </g>
    </svg>
  );
}
