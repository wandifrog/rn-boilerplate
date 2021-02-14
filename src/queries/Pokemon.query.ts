import { ApolloClient, InMemoryCache, gql, ApolloQueryResult } from '@apollo/client'

const pokeApi = 'https://graphql-pokeapi.vercel.app/api/graphql'

const client = new ApolloClient({
  uri: pokeApi,
  cache: new InMemoryCache()
})

export function getPokemons(limit = 10, offset = 1): Promise<ApolloQueryResult<{ pokemons: Pokemons }>> {
  return new Promise((resolve, reject) => {
    client.query({
      query: gql`
        query pokemons($limit: Int = ${limit}, $offset: Int = ${offset}) {
          pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            status
            message
            results {
              id
              url
              name
              image
            }
          }
        }
      `
    }).then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function getPokemon(name = 'ditto'): Promise<ApolloQueryResult<{ pokemon: Pokemon }>> {
  return new Promise((resolve, reject) => {
    client.query({
      query: gql`
        query pokemon($name: String! = "${name}") {
          pokemon(name: $name) {
            id
            name
            height
            weight
            sprites {
              front_default
            }
            base_experience
            message
            status
            order
            moves {
              move {
                name
              }
            }
            abilities {
              ability {
                name
              }
              is_hidden
              slot
            }
            types {
              slot
              type {
                name
              }
            }
        
          }
        }
      `
    }).then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
}
