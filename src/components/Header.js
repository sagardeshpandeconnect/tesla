import { Close, Language, MenuOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars)
  return (
    <Container>
      <a><img src="/images/logo.svg" alt="" /></a>
      <Menu>
        {cars && cars.map((car, index) => (

          <a href="#">{car}</a>
        ))}
        {/* <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a> */}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => { setBurgerStatus(true) }} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => { setBurgerStatus(false) }} />
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#"><Language /> United States</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

position: fixed;
top: 0;
left: 0;
right: 0;
min-height: 60px;
padding: 0 20px;
z-index:1;

`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
a{
  font-weight:600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}
@media (max-width:768px){
    display: none;
  }
`
const RightMenu = styled.div`
display:flex;
align-items: center;
a{
    font-weight:600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`
const CustomMenu = styled(MenuOutlined)`
cursor: pointer;
`
const BurgerNav = styled.div`
position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 270px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform : ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.5s ease-in;
  li{
    padding: 12.5px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a{
      font-weight:600;
    }
  }

`
const CustomClose = styled(Close)`

&:hover{
  cursor:pointer;
  border-radius: 50%;
  background-color:gainsboro;

};
`
const CloseWrapper = styled.div`
display: flex;
  justify-content: flex-end;
`
