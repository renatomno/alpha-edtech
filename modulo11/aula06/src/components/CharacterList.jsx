import { CharacterCard } from "./CharacterCard"
import styled from 'styled-components'

const Frame = styled.div`
    display: flex;
    flex-wrap: wrap;
`

function randomizeCharacters(){
    const charactersId = []
    for(let i = 0; i < 20; i++){
        charactersId.push(Math.floor(Math.random() * 825) + 1)
    }

    return charactersId
}

export function CharacterList(){
    
    const charactersId = randomizeCharacters()

    return (
        <Frame>
        {charactersId.map( id => {
            return <CharacterCard key={id} id={id} />
        })}
        </Frame>
    )
}