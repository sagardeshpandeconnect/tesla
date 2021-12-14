import { Close, Language, MenuOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  // console.log(cars)
  return (
    <Container>
      <img src="/images/logo.svg" alt="" />
      <Menu>
        {cars && cars.map((car, index) => (

          <Button key={index} >{car}</Button>
        ))}
        {/* <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a> */}
      </Menu>
      <RightMenu>
        <Button>Shop</Button>
        {/* <Button>hello</Button> */}
        <Button >Account</Button>
        <CustomMenu onClick={() => { setBurgerStatus(true) }} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => { setBurgerStatus(false) }} />
        </CloseWrapper>
        {cars && cars.map((car, index) => (

          <li key={index}><Button>{car}</Button></li>
        ))}
        <li><Button>Used Inventory</Button></li>
        <li><Button>Trade-In</Button></li>
        <li><Button>Cybertruck</Button></li>
        <li><Button>Existing Inventory</Button></li>
        <li><Button>Roadster</Button></li>
        <li><Button>Semi</Button></li>
        <li><Button>Charging</Button></li>
        <li><Button>Powerwall</Button></li>
        <li><Button>Commercial Energy</Button></li>
        <li><Button>Powerwall</Button></li>
        <li><Button>Find Us</Button></li>
        <li><Button>Support</Button></li>
        <li><Button>Investor Relations</Button></li>
        <li><Button><Language /> United States</Button></li>
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Button = styled.button`
background-color:transparent;
border:none;
font-weight:800;
  text-transform: uppercase;
  padding: 0 10px;
  cursor:pointer;
`

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
  overflow-y: scroll;
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
