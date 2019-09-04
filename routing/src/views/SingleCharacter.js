import React, {Fragment} from 'react'

const SingleCharacter = props => {

    const characterID = props.match.params.id - 1

    const character = props.characters[characterID]
    const priorCharacter = parseInt(characterID,10) === 0 ? props.characters.length : parseInt(character.id,10)-1
    const nextCharacter = characterID === 8 ? 1 : parseInt(character.id,10)+1

    return(
        <Fragment>
            <img
                className='character-image'
                src={character.img}
                alt={character.name}
            />
            
            <div className='nav-buttons'>
                <button onClick={() => props.history.push(`/characters/${priorCharacter}`)}>Back</button>
                <button onClick={() => props.history.push('/characters/')}>Back To List</button>
                <button onClick={() => props.history.push(`/characters/${nextCharacter}`)}>Next</button>
            </div>

            <div className='character-info-wrapper'>
                <h1>{character.name}</h1>
                <h4>{character.nickname}</h4>
                <p>{character.description}</p>
            </div>
        </Fragment>
    )
}

export default SingleCharacter