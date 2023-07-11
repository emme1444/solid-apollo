import type { QueryOptions, OperationVariables } from '@apollo/client/core';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type { Accessor } from 'solid-js';
interface BaseOptions<TData, TVariables> extends Omit<QueryOptions<TVariables, TData>, 'query'> {
    suspend?: boolean;
    ignoreResults?: boolean;
}
declare type CreateQueryOptions<TData, TVariables> = BaseOptions<TData, TVariables> | Accessor<BaseOptions<TData, TVariables>>;
export declare const createLazyQuery: <TData = {}, TVariables = OperationVariables>(query: DocumentNode<TData, TVariables>, options?: CreateQueryOptions<TData, TVariables>) => readonly [(opts?: BaseOptions<TData, TVariables>) => Promise<TData>, import("solid-js").Resource<TData>];
export {};
