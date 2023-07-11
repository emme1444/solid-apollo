import type { SubscriptionOptions, OperationVariables } from '@apollo/client/core';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type { Accessor } from 'solid-js';
declare type BaseOptions<TData, TVariables> = Omit<SubscriptionOptions<TVariables, TData>, 'query'>;
declare type CreateSubscriptionOptions<TData, TVariables> = BaseOptions<TData, TVariables> | Accessor<BaseOptions<TData, TVariables>>;
export declare const createSubscription: <TData = {}, TVariables = OperationVariables>(subscription: DocumentNode<TData, TVariables>, options?: CreateSubscriptionOptions<TData, TVariables>) => import("solid-js").Resource<TData>;
export {};
