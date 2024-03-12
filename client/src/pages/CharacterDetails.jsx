import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const FETCH_DETAIL_QUERY = gql`
  query FetchCharacter($characterId: ID!) {
    character(characterId: $characterId) {
    _id
    characterName
    characterBackground
    characterRace
    characterClass
    inventory {
      itemName
      collectedOn
    }
  }
  }
`;

function CharacterDetails() {
  let { characterId } = useParams();
  const { data, loading, error } = useQuery(FETCH_DETAIL_QUERY, {
    variables: { characterId },
  });

  if (loading) return <p>Loading character details...</p>;
  if (error) return <p>Error loading character details: {error.message}</p>;

  const character = data?.character;

  return (
    <div className='characterDetailsContainer'>
    <div className="character-details">
      <h2>Character Details: {character.characterName}</h2>
      <p>Race: {character.characterRace}</p>
      <p>Class: {character.characterClass}</p>
      <p>Background: {character.characterBackground}</p>
    </div>
    </div>
  );
}

export default CharacterDetails;
