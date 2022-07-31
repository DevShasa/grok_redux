import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
    return (
        <ContainerDiv className="App">
            <Outlet />
        </ContainerDiv>
    )
}

export default Layout

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  height: 100vh;
`