import { useState, useEffect, useRef, forwardRef } from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  height: 10vh;
  max-height: 95px; // config of sticky bottom
  display: flex;
  align-items: center;
  margin-top: -10vh; // config of sticky bottom

  background-color: lightcoral;
`;

const CreatedBy = styled.p`
  /* Layout */
  width: 100%;

  /* Font layout */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #828282;
`;

// const Footer = forwardRef( (props, ref) => {
//   return (
//     <Container ref={ ref }>
//       <CreatedBy>created by <b><u>gutieYpong</u></b> - devChallenges.io</CreatedBy>
//     </Container>
//   )
// })

const Footer = () => {
  /**
   * Intersection Observer Implementation
   */
  // const containerRef = useRef(null)
  // const [ isVisible, setIsVisible ] = useState(false)

  // const callbackFunction = (entries) => {
  //   const [ entry ] = entries;
  //   setIsVisible(entry.isIntersecting);
  //   console.log(entry)
  // }
  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1.0
  // }

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, options)
  //   if (containerRef.current) 
  //   {
  //     observer.observe(containerRef.current);
  //   }
  //   return () => {
  //     if(containerRef.current)
  //     {
  //       observer.unobserve(containerRef.current);
  //     }
  //   }
  // }, [containerRef, options])
  /**
  * Intersection Observer Implementation
  */

  return (
    <Container>
      <CreatedBy>created by <b><u>gutieYpong</u></b> - devChallenges.io</CreatedBy>
    </Container>
  )
}

export default Footer;