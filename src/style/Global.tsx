import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
 
// * {
//   font-family: 'Roboto', sans-serif;
//   }
@font-face {
  font-family: HVD_Comic_Serif_Pro;
  src: url(./fonts/HVD_Comic_Serif_Pro.otf);
}
@font-face {
  font-family: Sofia_Pro_Regular;
  src: url(./fonts/Sofia_Pro_Regular.otf);
}
@font-face {
  font-family: Sofia_Pro_Semi_Bold;
  src: url(./fonts/Sofia_Pro_Semi_Bold.otf);
}
* {
  font-family: Sofia_Pro_Regular;
}
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  // *::-webkit-scrollbar {
  //   width: 5px;
  // }
  // *::-webkit-scrollbar-thumb {
  //   background: #ff841a;
  //   border-radius: 0px;
  // }
  .hvd_comic_serif {
    // font-family: HVD_Comic_Serif_Pro;
    font-family: Sofia_Pro_Semi_Bold !important;
    font-weight: 400;
  }
  .dash_subheading {
    font-size: 20px;
  }
  .white_box {    
    box-shadow: -4px 5px 10px 2px rgb(0 0 0 / 20%);
  }
  .vision_card_panel {
    max-width: 600px;
    margin: 10px auto 0;
  }
  .menulink  div {
    font-size: 18px;
    font-family: Sofia_Pro_Semi_Bold !important;
    text-transform: uppercase;
  }
  div[role="button"] a {
    // text-transform: uppercase;
    font-size: 15px;
    font-family: Sofia_Pro_Semi_Bold !important;
  }
  button div {
    font-family: Sofia_Pro_Semi_Bold !important;
    font-weight: 400 !important;
    font-size: 18px !important;
    // color: #ccc !important;
  }
  button {
    font-family: Sofia_Pro_Semi_Bold !important;
    font-weight: 400 !important;
  }
  .dash_heading_1
  {
    font-weight: 600;
    font-size:2rem;
    margin-bottom:20px;
  }
  .orange_head
  {
    font-size:2.5rem;
    font-weight:600;
  }
  .card_farms_head {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 20px;
    color: rgb(243, 132, 30);
}
.menulink div
{
  font-size:16px !important;
  // color:#848282 !important;
  text-transform:capitalize;
  font-weight: 700;
}
.menulink img
{
  max-width:18px !important;
  min-width:18px !important;
}
.menulink svg
{
  margin-right: 16px;
}
.icon_sidebar
{
  margin-right: 20px;
}
.white_box {
  box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%) !important;
}
.card_3_tiele
{
  color: rgb(144, 150, 152);
font-size: 24px;
font-weight: 700;
}
.card_3_subtiele
{
  font-size: 24px;
font-weight: 700;
}
.btn_yellow,.card_radius button.btn_yellow
{
  background-image:linear-gradient(45deg, #6e2d0a  -6%, #6e2d0a  46%, #6e2d0a  69%);

border: 1px solid #6e2d0a  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:18px !important;
}
.btn_yellow:hover,.card_radius button.btn_yellow:hover
{
  background-image:linear-gradient(-45deg, #6e2d0a  -6%, #6e2d0a  46%, #6e2d0a  69%);

border: 1px solid #6e2d0a  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:18px !important;
opacity:0.8;
}
button
{
  box-shadow: 0 0 0 0px #013641 !important;
}
.or_h
{
  color: rgb(243, 132, 30);
}
button div
{
  // color: rgb(144,150,152) !important;
  font-size: 16px !important;
font-weight: 600 !important;
line-height: 1.5 !important;
margin-right: 16px !important;
}
nav button {
  background-image:linear-gradient(45deg, #6e2d0a  -6%, #6e2d0a  46%, #6e2d0a  69%);
  background-color: #6e2d0a !important;
  border-radius:32px !important;
  color:#fff !important;
}
nav button:hover {
  background-image:linear-gradient(-45deg, #6e2d0a  -6%, #6e2d0a  46%, #6e2d0a  69%);

  background-color: #6e2d0a !important;
  border-radius:32px !important;
  color:#fff !important;
opacity:0.8;

}
nav button[aria-label="Toggle menu"] {
  background-color: transparent !important;
  border-radius:0px !important;
  background:transparent !important;
}
nav button[aria-label="Toggle menu"] svg
{
  fill:#6e2d0a !important;
}
.card_radius,.white_box
{
  border-radius:32px !important;
}
.lable_color Label,.lable_color div,.label_color
{
  color:#6e2d0a !important;
}
.tab_radius>div>div,.tab_radius div,.tab_radius div a,.card_radius button,.bor_rad div
{
  border-radius:32px !important;
}
.tab_radius div a:hover,.tab_radius div a:hover:not(:disabled):not(.button--disabled):not(:active)
{
  background-color: #6e2d0a !important;
  color:#fff !important;
}
button[aria-label="Close the dialog"]:hover:not(:disabled):not(.button--disabled):not(:active)
 {
  background-color: transparent !important;
  border-color: currentColor;
}
.btn_not_found
{
  background-image:linear-gradient(45deg, #6e2d0a  -6%, #6e2d0a  46%, #6e2d0a  69%);
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
background-color: #6e2d0a;
border: 1px solid #6e2d0a  !important;

}
.btn_not_found:hover
{
  background-image:linear-gradient(-45deg, #6e2d0a  -6%, #6e2d0a  46%, #6e2d0a  69%);

border: 1px solid #6e2d0a  !important;
box-shadow: inset 0px 0px 0px rgba(14,14,44,0.4);
border-radius:32px !important;
opacity:0.8;
}
.menulink.comingsoon
{
  box-shadow: none !important;
}
.grid_100
{
  grid-column: span 12 !important;
}
.comingsoon div
{
  background-image: url('/images/swap.png');
  background-position: right 15px center;
  background-repeat:no-repeat;
  background-size:50px;
}
.bg_candy
{
  background-image: url('/images/home.png');
  background-position: right -10px bottom 50px;
  background-repeat:no-repeat;
  background-size:300px;
  padding-bottom:100px;
}
// .grid_100
// {
//   background-image: url('/images/egg/bg_candy_2.png');
//   background-position: right top;
//   background-repeat:no-repeat;
//   background-size:contain;
// }
// @media only screen and (min-width:768px)
// {
//   .home_bg
//   {
//     background-image: url('/images/coin_bg_01.png');
//     background-position: bottom -100px center;
//     background-repeat:no-repeat;
//     background-size:cover;
//   }
// }

`

export default GlobalStyle
