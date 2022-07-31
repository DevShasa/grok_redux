import { Link } from "react-router-dom";
import styled from "styled-components"


const Header = () => {
    return (
        <HeaderBox>
            <p>Redux blog</p>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="post">Post</Link></li>
            </ul>
        </HeaderBox>
    )
}

export default Header

const HeaderBox = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    & p{
        border: 1px solid #3f3f3f;
        padding: 5px 10px;
        background-color: #000000;
        font-weight: bold;
        border-radius: 6px;
        color:#ffff;
        box-shadow:5px 6px 0px rgb(156, 156, 156);

    }

    & ul{
        list-style-type: none;
        display: flex;
        padding-left: 0;
    }

    & li{
        text-decoration: none;
        
        a{
            text-decoration: none;
            border: 1px solid #3f3f3f;
            padding: 5px 10px;
            background-color: #FFFF;
            font-weight: bold;
            border-radius: 6px;
            color: black;
            margin-left: 1rem;
            box-shadow:5px 6px 0px rgb(0, 0, 0);
            transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95)
        }
        a:hover{
            color: white;
            background-color:black;
            box-shadow:5px 6px 0px rgb(156, 156, 156);

        }
    }
`