import Rect from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-gap: 25px;
    align-items: center;
`

const Image = styled.div`
    width: 60px;
    height: 60px;
    background: black;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 60px;
`

const Title = styled.div`
    font-size: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 30px 0;
`

const Cell = props => {
    <CellGroup>
        <Image image={props.image}></Image>
        <Title>{props.title}</Title>
    </CellGroup>
}

export default Cell