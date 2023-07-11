import type { WatchQueryOptions, OperationVariables } from '@apollo/client/core';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type { Accessor } from 'solid-js';
interface BaseOptions<TData, TVariables> extends Omit<WatchQueryOptions<TVariables, TData>, 'query'> {
    skip?: boolean;
}
declare type CreateQueryOptions<TData, TVariables> = BaseOptions<TData, TVariables> | Accessor<BaseOptions<TData, TVariables>>;
export declare const createQuery: <TData = {}, TVariables = OperationVariables>(query: DocumentNode<TData, TVariables>, options?: CreateQueryOptions<TData, TVariables>) => import("solid-js").Resource<TData>;
export {};
