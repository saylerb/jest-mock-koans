import { getStarWarsCharacterById } from './starWarsApiClient'

const getPersonalizedMessage = async (id) => {
  const character = await getStarWarsCharacterById(id)
  return `May the Force be with you, ${character.name}!`
}

export default getPersonalizedMessage
