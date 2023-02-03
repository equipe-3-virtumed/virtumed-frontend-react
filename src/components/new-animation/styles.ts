import styled from "styled-components";

export const container = styled.div `
    width: 70%;
    margin: 0 auto;
    margin-top: 50px;

.slick-slide > div {
    margin: 0 10px;
  }

.slick-list {
    margin: 0 -10px;
  }
`

export const card = styled.div `
    border-width: 10px;
    border-style: solid;
    border: double 2px transparent;
    border-radius: 20px;
    background-image: linear-gradient(#fff, #fff), radial-gradient(circle at top left,#e54197, #66d2e2);
    background-origin: border-box;
    background-clip: content-box, border-box;
    overflow: hidden;
  
    height: 150px;
    cursor: pointer;
`

export const cardTop = styled.div `
  /* width: 100%;
  height: 200px; */
  /* object-fit: cover; */

img {
 width: 100%;
 height: 150px;

}

` 