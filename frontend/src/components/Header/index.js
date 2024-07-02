import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader"
import IconesHeader from "../IconesHeader"
import styled from 'styled-components';
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
background-image: linear-gradient(90deg,#FCDCBC, #FBCCC3 33%, #FCDCBC 130%);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
  top: 15px;
  left: 0px;
  margin-bottom: 1px;
  `


function Header(){
    return (
        <HeaderContainer>
          <Link to="/">        
            <Logo /> 
          </Link>
        <OptionsHeader />
        <IconesHeader />
      </HeaderContainer>
    )
}

export default Header