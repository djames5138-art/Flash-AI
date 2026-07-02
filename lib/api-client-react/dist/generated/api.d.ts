import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ApiError, ChatInput, ChatResult, DeleteResult, FlashcardSet, FlashcardSetInput, GenerateResult, HealthStatus, ImageInput, ShareTokenResult, StreakUpdate, TextInput, UrlInput, UserInfo } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getGetHealthUrl: () => string;
/**
 * @summary Health check
 */
export declare const getHealth: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getGetHealthQueryKey: () => readonly ["/api/healthz"];
export declare const getGetHealthQueryOptions: <TData = Awaited<ReturnType<typeof getHealth>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getHealth>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getHealth>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetHealthQueryResult = NonNullable<Awaited<ReturnType<typeof getHealth>>>;
export type GetHealthQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useGetHealth<TData = Awaited<ReturnType<typeof getHealth>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getHealth>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetSetsUrl: () => string;
/**
 * @summary List all flashcard sets
 */
export declare const getSets: (options?: RequestInit) => Promise<FlashcardSet[]>;
export declare const getGetSetsQueryKey: () => readonly ["/api/sets"];
export declare const getGetSetsQueryOptions: <TData = Awaited<ReturnType<typeof getSets>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSets>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSetsQueryResult = NonNullable<Awaited<ReturnType<typeof getSets>>>;
export type GetSetsQueryError = ErrorType<unknown>;
/**
 * @summary List all flashcard sets
 */
export declare function useGetSets<TData = Awaited<ReturnType<typeof getSets>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSets>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateSetUrl: () => string;
/**
 * @summary Save a new flashcard set
 */
export declare const createSet: (flashcardSetInput: FlashcardSetInput, options?: RequestInit) => Promise<FlashcardSet>;
export declare const getCreateSetMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSet>>, TError, {
        data: BodyType<FlashcardSetInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createSet>>, TError, {
    data: BodyType<FlashcardSetInput>;
}, TContext>;
export type CreateSetMutationResult = NonNullable<Awaited<ReturnType<typeof createSet>>>;
export type CreateSetMutationBody = BodyType<FlashcardSetInput>;
export type CreateSetMutationError = ErrorType<unknown>;
/**
* @summary Save a new flashcard set
*/
export declare const useCreateSet: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createSet>>, TError, {
        data: BodyType<FlashcardSetInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createSet>>, TError, {
    data: BodyType<FlashcardSetInput>;
}, TContext>;
export declare const getGetSetUrl: (id: number) => string;
/**
 * @summary Get a single flashcard set
 */
export declare const getSet: (id: number, options?: RequestInit) => Promise<FlashcardSet>;
export declare const getGetSetQueryKey: (id: number) => readonly [`/api/sets/${number}`];
export declare const getGetSetQueryOptions: <TData = Awaited<ReturnType<typeof getSet>>, TError = ErrorType<ApiError>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSet>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSet>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSetQueryResult = NonNullable<Awaited<ReturnType<typeof getSet>>>;
export type GetSetQueryError = ErrorType<ApiError>;
/**
 * @summary Get a single flashcard set
 */
export declare function useGetSet<TData = Awaited<ReturnType<typeof getSet>>, TError = ErrorType<ApiError>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSet>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getDeleteSetUrl: (id: number) => string;
/**
 * @summary Delete a flashcard set
 */
export declare const deleteSet: (id: number, options?: RequestInit) => Promise<DeleteResult>;
export declare const getDeleteSetMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteSet>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteSet>>, TError, {
    id: number;
}, TContext>;
export type DeleteSetMutationResult = NonNullable<Awaited<ReturnType<typeof deleteSet>>>;
export type DeleteSetMutationError = ErrorType<unknown>;
/**
* @summary Delete a flashcard set
*/
export declare const useDeleteSet: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteSet>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteSet>>, TError, {
    id: number;
}, TContext>;
export declare const getShareSetUrl: (id: number) => string;
/**
 * @summary Generate or retrieve a shareable token for a set
 */
export declare const shareSet: (id: number, options?: RequestInit) => Promise<ShareTokenResult>;
export declare const getShareSetMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof shareSet>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof shareSet>>, TError, {
    id: number;
}, TContext>;
export type ShareSetMutationResult = NonNullable<Awaited<ReturnType<typeof shareSet>>>;
export type ShareSetMutationError = ErrorType<ApiError>;
/**
* @summary Generate or retrieve a shareable token for a set
*/
export declare const useShareSet: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof shareSet>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof shareSet>>, TError, {
    id: number;
}, TContext>;
export declare const getGetSharedSetUrl: (token: string) => string;
/**
 * @summary Get a shared flashcard set by token
 */
export declare const getSharedSet: (token: string, options?: RequestInit) => Promise<FlashcardSet>;
export declare const getGetSharedSetQueryKey: (token: string) => readonly [`/api/sets/share/${string}`];
export declare const getGetSharedSetQueryOptions: <TData = Awaited<ReturnType<typeof getSharedSet>>, TError = ErrorType<ApiError>>(token: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSharedSet>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getSharedSet>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetSharedSetQueryResult = NonNullable<Awaited<ReturnType<typeof getSharedSet>>>;
export type GetSharedSetQueryError = ErrorType<ApiError>;
/**
 * @summary Get a shared flashcard set by token
 */
export declare function useGetSharedSet<TData = Awaited<ReturnType<typeof getSharedSet>>, TError = ErrorType<ApiError>>(token: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getSharedSet>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGenerateFromTextUrl: () => string;
/**
 * @summary Generate flashcards from pasted text
 */
export declare const generateFromText: (textInput: TextInput, options?: RequestInit) => Promise<GenerateResult>;
export declare const getGenerateFromTextMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateFromText>>, TError, {
        data: BodyType<TextInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generateFromText>>, TError, {
    data: BodyType<TextInput>;
}, TContext>;
export type GenerateFromTextMutationResult = NonNullable<Awaited<ReturnType<typeof generateFromText>>>;
export type GenerateFromTextMutationBody = BodyType<TextInput>;
export type GenerateFromTextMutationError = ErrorType<unknown>;
/**
* @summary Generate flashcards from pasted text
*/
export declare const useGenerateFromText: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateFromText>>, TError, {
        data: BodyType<TextInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generateFromText>>, TError, {
    data: BodyType<TextInput>;
}, TContext>;
export declare const getGenerateFromImageUrl: () => string;
/**
 * @summary Generate flashcards from a photo of notes
 */
export declare const generateFromImage: (imageInput: ImageInput, options?: RequestInit) => Promise<GenerateResult>;
export declare const getGenerateFromImageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateFromImage>>, TError, {
        data: BodyType<ImageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generateFromImage>>, TError, {
    data: BodyType<ImageInput>;
}, TContext>;
export type GenerateFromImageMutationResult = NonNullable<Awaited<ReturnType<typeof generateFromImage>>>;
export type GenerateFromImageMutationBody = BodyType<ImageInput>;
export type GenerateFromImageMutationError = ErrorType<unknown>;
/**
* @summary Generate flashcards from a photo of notes
*/
export declare const useGenerateFromImage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateFromImage>>, TError, {
        data: BodyType<ImageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generateFromImage>>, TError, {
    data: BodyType<ImageInput>;
}, TContext>;
export declare const getGenerateFromUrlUrl: () => string;
/**
 * @summary Generate flashcards from a YouTube video or Google Docs URL
 */
export declare const generateFromUrl: (urlInput: UrlInput, options?: RequestInit) => Promise<GenerateResult>;
export declare const getGenerateFromUrlMutationOptions: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateFromUrl>>, TError, {
        data: BodyType<UrlInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generateFromUrl>>, TError, {
    data: BodyType<UrlInput>;
}, TContext>;
export type GenerateFromUrlMutationResult = NonNullable<Awaited<ReturnType<typeof generateFromUrl>>>;
export type GenerateFromUrlMutationBody = BodyType<UrlInput>;
export type GenerateFromUrlMutationError = ErrorType<ApiError>;
/**
* @summary Generate flashcards from a YouTube video or Google Docs URL
*/
export declare const useGenerateFromUrl: <TError = ErrorType<ApiError>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateFromUrl>>, TError, {
        data: BodyType<UrlInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generateFromUrl>>, TError, {
    data: BodyType<UrlInput>;
}, TContext>;
export declare const getChatWithTutorUrl: () => string;
/**
 * @summary Send a message to the AI tutor
 */
export declare const chatWithTutor: (chatInput: ChatInput, options?: RequestInit) => Promise<ChatResult>;
export declare const getChatWithTutorMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof chatWithTutor>>, TError, {
        data: BodyType<ChatInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof chatWithTutor>>, TError, {
    data: BodyType<ChatInput>;
}, TContext>;
export type ChatWithTutorMutationResult = NonNullable<Awaited<ReturnType<typeof chatWithTutor>>>;
export type ChatWithTutorMutationBody = BodyType<ChatInput>;
export type ChatWithTutorMutationError = ErrorType<unknown>;
/**
* @summary Send a message to the AI tutor
*/
export declare const useChatWithTutor: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof chatWithTutor>>, TError, {
        data: BodyType<ChatInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof chatWithTutor>>, TError, {
    data: BodyType<ChatInput>;
}, TContext>;
export declare const getGetUserUrl: () => string;
/**
 * @summary Get current user info and stats
 */
export declare const getUser: (options?: RequestInit) => Promise<UserInfo>;
export declare const getGetUserQueryKey: () => readonly ["/api/user"];
export declare const getGetUserQueryOptions: <TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetUserQueryResult = NonNullable<Awaited<ReturnType<typeof getUser>>>;
export type GetUserQueryError = ErrorType<unknown>;
/**
 * @summary Get current user info and stats
 */
export declare function useGetUser<TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateStreakUrl: () => string;
/**
 * @summary Record a study session to update the streak
 */
export declare const updateStreak: (streakUpdate: StreakUpdate, options?: RequestInit) => Promise<UserInfo>;
export declare const getUpdateStreakMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateStreak>>, TError, {
        data: BodyType<StreakUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateStreak>>, TError, {
    data: BodyType<StreakUpdate>;
}, TContext>;
export type UpdateStreakMutationResult = NonNullable<Awaited<ReturnType<typeof updateStreak>>>;
export type UpdateStreakMutationBody = BodyType<StreakUpdate>;
export type UpdateStreakMutationError = ErrorType<unknown>;
/**
* @summary Record a study session to update the streak
*/
export declare const useUpdateStreak: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateStreak>>, TError, {
        data: BodyType<StreakUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateStreak>>, TError, {
    data: BodyType<StreakUpdate>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map