import type { ApolloClient } from '@apollo/client/core';
import type { ParentComponent } from 'solid-js';
export interface ApolloProviderProps {
    client: ApolloClient<any>;
}
export declare const ApolloProvider: ParentComponent<ApolloProviderProps>;
export declare const useApollo: () => ApolloClient<any>;
