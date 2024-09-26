import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header />
            <ContainerDiv className="App">
                <Outlet />
            </ContainerDiv>
        </>
    )
}

export default Layout

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  height: 100vh;
`