import {useState, useEffect} from 'react';
import styled from 'styled-components'

const Frame = styled.div`
    border: 1px solid black;
    margin: 0 15px;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const FrameAlive = styled.div`
    width: 150px;
    height: 150px;
    background-color: green;
`

const FrameDead = styled.div`
    width: 150px;
    height: 150px;
    background-color: red;
`

const FrameUnknown = styled.div`
    width: 150px;
    height: 150px;
    background-color: grey;
`


export function CharacterCard(props){
    const [character, setCharacter] = useState([])

    useEffect( () => {
        fetch(`https://rickandmortyapi.com/api/character/${props.id}`)
        .then(response => response.json())
        .then( data => {
            setCharacter({name: data.name, species: data.species, status: data.status, image: data.image})  
        })
    }, [])


    return (
        
        <Frame>
            <img src={`${character.image}`} />
            <h2>Name: {character.name}</h2>
            <h2>Species: {character.species}</h2>
            <h2>Status: {character.status}</h2>

            {character.status == 'Dead' && (<FrameDead />)}
            {character.status == 'Alive' && (<FrameAlive />)}
            {character.status == 'unknown' && (<FrameUnknown />)}

        </Frame>
    )
}