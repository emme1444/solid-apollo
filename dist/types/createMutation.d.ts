import type { DefaultContext, OperationVariables, MutationOptions } from '@apollo/client/core';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type { Accessor } from 'solid-js';
interface BaseOptions<TData, TVariables, TContext> extends Omit<MutationOptions<TData, TVariables, TContext>, 'mutation'> {
    ignoreResults?: boolean;
}
declare type CreateMutationOptions<TData, TVariables, TContext> = BaseOptions<TData, TVariables, TContext> | Accessor<BaseOptions<TData, TVariables, TContext>>;
export declare const createMutation: <TData = any, TVariables = OperationVariables, TContext = DefaultContext>(mutation: DocumentNode<TData, TVariables>, options?: CreateMutationOptions<TData, TVariables, TContext>) => readonly [(opts?: BaseOptions<TData, TVariables, TContext>) => Promise<TData>, import("solid-js").Resource<TData | null | undefined>];
export {};
