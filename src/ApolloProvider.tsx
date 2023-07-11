import type { ApolloClient } from '@apollo/client/core/index.js'
import type { ParentComponent } from 'solid-js'
import { createContext, useContext } from 'solid-js'

const ApolloContext = createContext<ApolloClient<any>>()

export interface ApolloProviderProps {
  client: ApolloClient<any>
}

export const ApolloProvider: ParentComponent<ApolloProviderProps> = props => (
  <ApolloContext.Provider value={props.client}>{props.children}</ApolloContext.Provider>
)

export const useApollo = () => {
  const apolloClient = useContext(ApolloContext)
  if (!apolloClient) {
    throw new Error(
      'apolloClient could not be found in context. Did you wrap your Component with <ApolloProvider client={...} /> ?'
    )
  }
  return apolloClient
}
