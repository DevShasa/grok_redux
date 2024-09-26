import { useSelector } from "react-redux";
import { fetchAllUsers } from "../redux/features/usersSlice";
import styled from "styled-components"

const AuthorByline = ({ authorId }) => {

    const users = useSelector(fetchAllUsers)
    const author = users.find((user)=> user.id === authorId)

    return (
        <Byline>by {author ? author.name : "Unknown"}</Byline>
    )
}

export default AuthorByline

const Byline = styled.span`
    display: inline-block;
    font-size: 0.9rem;
    color: #868686;
    margin-top: 10px;
`;