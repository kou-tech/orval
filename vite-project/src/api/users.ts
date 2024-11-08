/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * User API
 * API for managing users
 * OpenAPI spec version: 1.0.0
 */
import useSwr from 'swr'
import type {
  Arguments,
  Key,
  SWRConfiguration
} from 'swr'
import useSWRMutation from 'swr/mutation'
import type {
  SWRMutationConfiguration
} from 'swr/mutation'
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  User
} from '../model'



  
  /**
 * @summary Get list of users
 */
export type getUsersResponse = {
  data: User[];
  status: number;
}

export const getGetUsersUrl = () => {


  return `/users`
}

export const getUsers = async ( options?: RequestInit): Promise<getUsersResponse> => {
  
  const res = await fetch(getGetUsersUrl(),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data }
}




export const getGetUsersKey = () => [`/users`] as const;

export type GetUsersQueryResult = NonNullable<Awaited<ReturnType<typeof getUsers>>>
export type GetUsersQueryError = Promise<unknown>

/**
 * @summary Get list of users
 */
export const useGetUsers = <TError = Promise<unknown>>(
   options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getUsers>>, TError> & { swrKey?: Key, enabled?: boolean }, fetch?: RequestInit }
) => {
  const {swr: swrOptions, fetch: fetchOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetUsersKey() : null);
  const swrFn = () => getUsers(fetchOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Create a new user
 */
export type postUsersResponse = {
  data: User;
  status: number;
}

export const getPostUsersUrl = () => {


  return `/users`
}

export const postUsers = async (user: User, options?: RequestInit): Promise<postUsersResponse> => {
  
  const res = await fetch(getPostUsersUrl(),
  {      
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      user,)
  }

  )
  const data = await res.json()

  return { status: res.status, data }
}




export const getPostUsersMutationFetcher = ( options?: RequestInit) => {
  return (_: Key, { arg }: { arg: User }): Promise<postUsersResponse> => {
    return postUsers(arg, options);
  }
}
export const getPostUsersMutationKey = () => [`/users`] as const;

export type PostUsersMutationResult = NonNullable<Awaited<ReturnType<typeof postUsers>>>
export type PostUsersMutationError = Promise<unknown>

/**
 * @summary Create a new user
 */
export const usePostUsers = <TError = Promise<unknown>>(
   options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof postUsers>>, TError, Key, User, Awaited<ReturnType<typeof postUsers>>> & { swrKey?: string }, fetch?: RequestInit}
) => {

  const {swr: swrOptions, fetch: fetchOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getPostUsersMutationKey();
  const swrFn = getPostUsersMutationFetcher(fetchOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Get a user by ID
 */
export type getUsersIdResponse = {
  data: User;
  status: number;
}

export const getGetUsersIdUrl = (id: string,) => {


  return `/users/${id}`
}

export const getUsersId = async (id: string, options?: RequestInit): Promise<getUsersIdResponse> => {
  
  const res = await fetch(getGetUsersIdUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data }
}




export const getGetUsersIdKey = (id: string,) => [`/users/${id}`] as const;

export type GetUsersIdQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersId>>>
export type GetUsersIdQueryError = Promise<void>

/**
 * @summary Get a user by ID
 */
export const useGetUsersId = <TError = Promise<void>>(
  id: string, options?: { swr?:SWRConfiguration<Awaited<ReturnType<typeof getUsersId>>, TError> & { swrKey?: Key, enabled?: boolean }, fetch?: RequestInit }
) => {
  const {swr: swrOptions, fetch: fetchOptions} = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!(id)
  const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? getGetUsersIdKey(id) : null);
  const swrFn = () => getUsersId(id, fetchOptions)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Update a user by ID
 */
export type putUsersIdResponse = {
  data: User;
  status: number;
}

export const getPutUsersIdUrl = (id: string,) => {


  return `/users/${id}`
}

export const putUsersId = async (id: string,
    user: User, options?: RequestInit): Promise<putUsersIdResponse> => {
  
  const res = await fetch(getPutUsersIdUrl(id),
  {      
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(
      user,)
  }

  )
  const data = await res.json()

  return { status: res.status, data }
}




export const getPutUsersIdMutationFetcher = (id: string, options?: RequestInit) => {
  return (_: Key, { arg }: { arg: User }): Promise<putUsersIdResponse> => {
    return putUsersId(id, arg, options);
  }
}
export const getPutUsersIdMutationKey = (id: string,) => [`/users/${id}`] as const;

export type PutUsersIdMutationResult = NonNullable<Awaited<ReturnType<typeof putUsersId>>>
export type PutUsersIdMutationError = Promise<void>

/**
 * @summary Update a user by ID
 */
export const usePutUsersId = <TError = Promise<void>>(
  id: string, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof putUsersId>>, TError, Key, User, Awaited<ReturnType<typeof putUsersId>>> & { swrKey?: string }, fetch?: RequestInit}
) => {

  const {swr: swrOptions, fetch: fetchOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getPutUsersIdMutationKey(id);
  const swrFn = getPutUsersIdMutationFetcher(id, fetchOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}
/**
 * @summary Delete a user by ID
 */
export type deleteUsersIdResponse = {
  data: void;
  status: number;
}

export const getDeleteUsersIdUrl = (id: string,) => {


  return `/users/${id}`
}

export const deleteUsersId = async (id: string, options?: RequestInit): Promise<deleteUsersIdResponse> => {
  
  const res = await fetch(getDeleteUsersIdUrl(id),
  {      
    ...options,
    method: 'DELETE'
    
    
  }

  )
  const data = await res.json()

  return { status: res.status, data }
}




export const getDeleteUsersIdMutationFetcher = (id: string, options?: RequestInit) => {
  return (_: Key, __: { arg: Arguments }): Promise<deleteUsersIdResponse> => {
    return deleteUsersId(id, options);
  }
}
export const getDeleteUsersIdMutationKey = (id: string,) => [`/users/${id}`] as const;

export type DeleteUsersIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteUsersId>>>
export type DeleteUsersIdMutationError = Promise<void>

/**
 * @summary Delete a user by ID
 */
export const useDeleteUsersId = <TError = Promise<void>>(
  id: string, options?: { swr?:SWRMutationConfiguration<Awaited<ReturnType<typeof deleteUsersId>>, TError, Key, Arguments, Awaited<ReturnType<typeof deleteUsersId>>> & { swrKey?: string }, fetch?: RequestInit}
) => {

  const {swr: swrOptions, fetch: fetchOptions} = options ?? {}

  const swrKey = swrOptions?.swrKey ?? getDeleteUsersIdMutationKey(id);
  const swrFn = getDeleteUsersIdMutationFetcher(id, fetchOptions);

  const query = useSWRMutation(swrKey, swrFn, swrOptions)

  return {
    swrKey,
    ...query
  }
}


export const getGetUsersResponseMock = (): User[] => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({createdAt: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), email: faker.word.sample(), id: faker.word.sample(), name: faker.word.sample(), updatedAt: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined])})))

export const getPostUsersResponseMock = (overrideResponse: Partial< User > = {}): User => ({createdAt: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), email: faker.word.sample(), id: faker.word.sample(), name: faker.word.sample(), updatedAt: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), ...overrideResponse})

export const getGetUsersIdResponseMock = (overrideResponse: Partial< User > = {}): User => ({createdAt: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), email: faker.word.sample(), id: faker.word.sample(), name: faker.word.sample(), updatedAt: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), ...overrideResponse})

export const getPutUsersIdResponseMock = (overrideResponse: Partial< User > = {}): User => ({createdAt: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), email: faker.word.sample(), id: faker.word.sample(), name: faker.word.sample(), updatedAt: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), ...overrideResponse})


export const getGetUsersMockHandler = (overrideResponse?: User[] | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<User[]> | User[])) => {
  return http.get('*/users', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetUsersResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPostUsersMockHandler = (overrideResponse?: User | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<User> | User)) => {
  return http.post('*/users', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getPostUsersResponseMock()),
      { status: 201,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetUsersIdMockHandler = (overrideResponse?: User | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<User> | User)) => {
  return http.get('*/users/:id', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetUsersIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPutUsersIdMockHandler = (overrideResponse?: User | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<User> | User)) => {
  return http.put('*/users/:id', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getPutUsersIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getDeleteUsersIdMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<void> | void)) => {
  return http.delete('*/users/:id', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 204,
        
      })
  })
}
export const getUsersMock = () => [
  getGetUsersMockHandler(),
  getPostUsersMockHandler(),
  getGetUsersIdMockHandler(),
  getPutUsersIdMockHandler(),
  getDeleteUsersIdMockHandler()
]
