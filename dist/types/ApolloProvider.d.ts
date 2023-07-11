import type { ApolloClient } from '@apollo/client/core/index.js';
import type { ParentComponent } from 'solid-js';
export interface ApolloProviderProps {
    client: ApolloClient<any>;
}
export declare const ApolloProvider: ParentComponent<ApolloProviderProps>;
export declare const useApollo: () => ApolloClient<any>;
