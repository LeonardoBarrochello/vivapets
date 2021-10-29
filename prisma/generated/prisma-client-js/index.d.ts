
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Usuario
 */

export type Usuario = {
  usuario_id: string
  name: string
  email: string
  password: string
}

/**
 * Model Dono
 */

export type Dono = {
  dono_id: string
  nome: string
  idade: number
  endereco: string
  telefone: string
  cidade: string
  usuario_id: string
}

/**
 * Model Adocao
 */

export type Adocao = {
  id: string
  data_adocao: Date
  animal_id: string
  dono_id: string
}

/**
 * Model Animal
 */

export type Animal = {
  animal_id: string
  raca: string
  tipo: string
  nome: string
  cor: string
  dono_id: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<GlobalReject>;

  /**
   * `prisma.dono`: Exposes CRUD operations for the **Dono** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donos
    * const donos = await prisma.dono.findMany()
    * ```
    */
  get dono(): Prisma.DonoDelegate<GlobalReject>;

  /**
   * `prisma.adocao`: Exposes CRUD operations for the **Adocao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adocaos
    * const adocaos = await prisma.adocao.findMany()
    * ```
    */
  get adocao(): Prisma.AdocaoDelegate<GlobalReject>;

  /**
   * `prisma.animal`: Exposes CRUD operations for the **Animal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animals
    * const animals = await prisma.animal.findMany()
    * ```
    */
  get animal(): Prisma.AnimalDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.3.0
   * Query Engine version: 33838b0f78f1fe9052cf9a00e9761c9dc097a63c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Usuario: 'Usuario',
    Dono: 'Dono',
    Adocao: 'Adocao',
    Animal: 'Animal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DonoCountOutputType
   */


  export type DonoCountOutputType = {
    animals: number
    adocao: number
  }

  export type DonoCountOutputTypeSelect = {
    animals?: boolean
    adocao?: boolean
  }

  export type DonoCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DonoCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DonoCountOutputType
    : S extends undefined
    ? never
    : S extends DonoCountOutputTypeArgs
    ?'include' extends U
    ? DonoCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof DonoCountOutputType ?DonoCountOutputType [P]
  : 
     never
  } 
    : DonoCountOutputType
  : DonoCountOutputType




  // Custom InputTypes

  /**
   * DonoCountOutputType without action
   */
  export type DonoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DonoCountOutputType
     * 
    **/
    select?: DonoCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Usuario
   */


  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    usuario_id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    usuario_id: string | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    usuario_id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    usuario_id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UsuarioMaxAggregateInputType = {
    usuario_id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UsuarioCountAggregateInputType = {
    usuario_id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UsuarioAggregateArgs = {
    /**
     * Filter which Usuario to aggregate.
     * 
    **/
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     * 
    **/
    orderBy?: Enumerable<UsuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }


    
    
  export type UsuarioGroupByArgs = {
    where?: UsuarioWhereInput
    orderBy?: Enumerable<UsuarioOrderByWithAggregationInput>
    by: Array<UsuarioScalarFieldEnum>
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }


  export type UsuarioGroupByOutputType = {
    usuario_id: string
    name: string
    email: string
    password: string
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Promise<
    Array<
      PickArray<UsuarioGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]> 
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      > 
    >


  export type UsuarioSelect = {
    usuario_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    dono?: boolean | DonoArgs
  }

  export type UsuarioInclude = {
    dono?: boolean | DonoArgs
  }

  export type UsuarioGetPayload<
    S extends boolean | null | undefined | UsuarioArgs,
    U = keyof S
      > = S extends true
        ? Usuario
    : S extends undefined
    ? never
    : S extends UsuarioArgs | UsuarioFindManyArgs
    ?'include' extends U
    ? Usuario  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'dono'
        ? DonoGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Usuario ?Usuario [P]
  : 
          P extends 'dono'
        ? DonoGetPayload<S['select'][P]> | null : never
  } 
    : Usuario
  : Usuario


  type UsuarioCountArgs = Merge<
    Omit<UsuarioFindManyArgs, 'select' | 'include'> & {
      select?: UsuarioCountAggregateInputType | true
    }
  >

  export interface UsuarioDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuarioFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsuarioFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Usuario'> extends True ? CheckSelect<T, Prisma__UsuarioClient<Usuario>, Prisma__UsuarioClient<UsuarioGetPayload<T>>> : CheckSelect<T, Prisma__UsuarioClient<Usuario | null >, Prisma__UsuarioClient<UsuarioGetPayload<T> | null >>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuarioFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsuarioFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Usuario'> extends True ? CheckSelect<T, Prisma__UsuarioClient<Usuario>, Prisma__UsuarioClient<UsuarioGetPayload<T>>> : CheckSelect<T, Prisma__UsuarioClient<Usuario | null >, Prisma__UsuarioClient<UsuarioGetPayload<T> | null >>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `usuario_id`
     * const usuarioWithUsuario_idOnly = await prisma.usuario.findMany({ select: { usuario_id: true } })
     * 
    **/
    findMany<T extends UsuarioFindManyArgs>(
      args?: SelectSubset<T, UsuarioFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Usuario>>, PrismaPromise<Array<UsuarioGetPayload<T>>>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends UsuarioCreateArgs>(
      args: SelectSubset<T, UsuarioCreateArgs>
    ): CheckSelect<T, Prisma__UsuarioClient<Usuario>, Prisma__UsuarioClient<UsuarioGetPayload<T>>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends UsuarioDeleteArgs>(
      args: SelectSubset<T, UsuarioDeleteArgs>
    ): CheckSelect<T, Prisma__UsuarioClient<Usuario>, Prisma__UsuarioClient<UsuarioGetPayload<T>>>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuarioUpdateArgs>(
      args: SelectSubset<T, UsuarioUpdateArgs>
    ): CheckSelect<T, Prisma__UsuarioClient<Usuario>, Prisma__UsuarioClient<UsuarioGetPayload<T>>>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuarioDeleteManyArgs>(
      args?: SelectSubset<T, UsuarioDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuarioUpdateManyArgs>(
      args: SelectSubset<T, UsuarioUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends UsuarioUpsertArgs>(
      args: SelectSubset<T, UsuarioUpsertArgs>
    ): CheckSelect<T, Prisma__UsuarioClient<Usuario>, Prisma__UsuarioClient<UsuarioGetPayload<T>>>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsuarioClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    dono<T extends DonoArgs = {}>(args?: Subset<T, DonoArgs>): CheckSelect<T, Prisma__DonoClient<Dono | null >, Prisma__DonoClient<DonoGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * Throw an Error if a Usuario can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Usuario to fetch.
     * 
    **/
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * Throw an Error if a Usuario can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Usuario to fetch.
     * 
    **/
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     * 
    **/
    orderBy?: Enumerable<UsuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     * 
    **/
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     * 
    **/
    distinct?: Enumerable<UsuarioScalarFieldEnum>
  }


  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * Filter, which Usuarios to fetch.
     * 
    **/
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     * 
    **/
    orderBy?: Enumerable<UsuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     * 
    **/
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsuarioScalarFieldEnum>
  }


  /**
   * Usuario create
   */
  export type UsuarioCreateArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * The data needed to create a Usuario.
     * 
    **/
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }


  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * The data needed to update a Usuario.
     * 
    **/
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     * 
    **/
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs = {
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    where?: UsuarioWhereInput
  }


  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     * 
    **/
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     * 
    **/
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }


  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * Filter which Usuario to delete.
     * 
    **/
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs = {
    where?: UsuarioWhereInput
  }


  /**
   * Usuario without action
   */
  export type UsuarioArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
  }



  /**
   * Model Dono
   */


  export type AggregateDono = {
    _count: DonoCountAggregateOutputType | null
    _avg: DonoAvgAggregateOutputType | null
    _sum: DonoSumAggregateOutputType | null
    _min: DonoMinAggregateOutputType | null
    _max: DonoMaxAggregateOutputType | null
  }

  export type DonoAvgAggregateOutputType = {
    idade: number | null
  }

  export type DonoSumAggregateOutputType = {
    idade: number | null
  }

  export type DonoMinAggregateOutputType = {
    dono_id: string | null
    nome: string | null
    idade: number | null
    endereco: string | null
    telefone: string | null
    cidade: string | null
    usuario_id: string | null
  }

  export type DonoMaxAggregateOutputType = {
    dono_id: string | null
    nome: string | null
    idade: number | null
    endereco: string | null
    telefone: string | null
    cidade: string | null
    usuario_id: string | null
  }

  export type DonoCountAggregateOutputType = {
    dono_id: number
    nome: number
    idade: number
    endereco: number
    telefone: number
    cidade: number
    usuario_id: number
    _all: number
  }


  export type DonoAvgAggregateInputType = {
    idade?: true
  }

  export type DonoSumAggregateInputType = {
    idade?: true
  }

  export type DonoMinAggregateInputType = {
    dono_id?: true
    nome?: true
    idade?: true
    endereco?: true
    telefone?: true
    cidade?: true
    usuario_id?: true
  }

  export type DonoMaxAggregateInputType = {
    dono_id?: true
    nome?: true
    idade?: true
    endereco?: true
    telefone?: true
    cidade?: true
    usuario_id?: true
  }

  export type DonoCountAggregateInputType = {
    dono_id?: true
    nome?: true
    idade?: true
    endereco?: true
    telefone?: true
    cidade?: true
    usuario_id?: true
    _all?: true
  }

  export type DonoAggregateArgs = {
    /**
     * Filter which Dono to aggregate.
     * 
    **/
    where?: DonoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donos to fetch.
     * 
    **/
    orderBy?: Enumerable<DonoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DonoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donos
    **/
    _count?: true | DonoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonoMaxAggregateInputType
  }

  export type GetDonoAggregateType<T extends DonoAggregateArgs> = {
        [P in keyof T & keyof AggregateDono]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDono[P]>
      : GetScalarType<T[P], AggregateDono[P]>
  }


    
    
  export type DonoGroupByArgs = {
    where?: DonoWhereInput
    orderBy?: Enumerable<DonoOrderByWithAggregationInput>
    by: Array<DonoScalarFieldEnum>
    having?: DonoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonoCountAggregateInputType | true
    _avg?: DonoAvgAggregateInputType
    _sum?: DonoSumAggregateInputType
    _min?: DonoMinAggregateInputType
    _max?: DonoMaxAggregateInputType
  }


  export type DonoGroupByOutputType = {
    dono_id: string
    nome: string
    idade: number
    endereco: string
    telefone: string
    cidade: string
    usuario_id: string
    _count: DonoCountAggregateOutputType | null
    _avg: DonoAvgAggregateOutputType | null
    _sum: DonoSumAggregateOutputType | null
    _min: DonoMinAggregateOutputType | null
    _max: DonoMaxAggregateOutputType | null
  }

  type GetDonoGroupByPayload<T extends DonoGroupByArgs> = Promise<
    Array<
      PickArray<DonoGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof DonoGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], DonoGroupByOutputType[P]> 
            : GetScalarType<T[P], DonoGroupByOutputType[P]>
        }
      > 
    >


  export type DonoSelect = {
    dono_id?: boolean
    nome?: boolean
    idade?: boolean
    endereco?: boolean
    telefone?: boolean
    cidade?: boolean
    animals?: boolean | AnimalFindManyArgs
    adocao?: boolean | AdocaoFindManyArgs
    usuario_id?: boolean
    usuario?: boolean | UsuarioArgs
    _count?: boolean | DonoCountOutputTypeArgs
  }

  export type DonoInclude = {
    animals?: boolean | AnimalFindManyArgs
    adocao?: boolean | AdocaoFindManyArgs
    usuario?: boolean | UsuarioArgs
    _count?: boolean | DonoCountOutputTypeArgs
  }

  export type DonoGetPayload<
    S extends boolean | null | undefined | DonoArgs,
    U = keyof S
      > = S extends true
        ? Dono
    : S extends undefined
    ? never
    : S extends DonoArgs | DonoFindManyArgs
    ?'include' extends U
    ? Dono  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'animals'
        ? Array < AnimalGetPayload<S['include'][P]>>  :
        P extends 'adocao'
        ? Array < AdocaoGetPayload<S['include'][P]>>  :
        P extends 'usuario'
        ? UsuarioGetPayload<S['include'][P]> :
        P extends '_count'
        ? DonoCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Dono ?Dono [P]
  : 
          P extends 'animals'
        ? Array < AnimalGetPayload<S['select'][P]>>  :
        P extends 'adocao'
        ? Array < AdocaoGetPayload<S['select'][P]>>  :
        P extends 'usuario'
        ? UsuarioGetPayload<S['select'][P]> :
        P extends '_count'
        ? DonoCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Dono
  : Dono


  type DonoCountArgs = Merge<
    Omit<DonoFindManyArgs, 'select' | 'include'> & {
      select?: DonoCountAggregateInputType | true
    }
  >

  export interface DonoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Dono that matches the filter.
     * @param {DonoFindUniqueArgs} args - Arguments to find a Dono
     * @example
     * // Get one Dono
     * const dono = await prisma.dono.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DonoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DonoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Dono'> extends True ? CheckSelect<T, Prisma__DonoClient<Dono>, Prisma__DonoClient<DonoGetPayload<T>>> : CheckSelect<T, Prisma__DonoClient<Dono | null >, Prisma__DonoClient<DonoGetPayload<T> | null >>

    /**
     * Find the first Dono that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonoFindFirstArgs} args - Arguments to find a Dono
     * @example
     * // Get one Dono
     * const dono = await prisma.dono.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DonoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DonoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Dono'> extends True ? CheckSelect<T, Prisma__DonoClient<Dono>, Prisma__DonoClient<DonoGetPayload<T>>> : CheckSelect<T, Prisma__DonoClient<Dono | null >, Prisma__DonoClient<DonoGetPayload<T> | null >>

    /**
     * Find zero or more Donos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donos
     * const donos = await prisma.dono.findMany()
     * 
     * // Get first 10 Donos
     * const donos = await prisma.dono.findMany({ take: 10 })
     * 
     * // Only select the `dono_id`
     * const donoWithDono_idOnly = await prisma.dono.findMany({ select: { dono_id: true } })
     * 
    **/
    findMany<T extends DonoFindManyArgs>(
      args?: SelectSubset<T, DonoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Dono>>, PrismaPromise<Array<DonoGetPayload<T>>>>

    /**
     * Create a Dono.
     * @param {DonoCreateArgs} args - Arguments to create a Dono.
     * @example
     * // Create one Dono
     * const Dono = await prisma.dono.create({
     *   data: {
     *     // ... data to create a Dono
     *   }
     * })
     * 
    **/
    create<T extends DonoCreateArgs>(
      args: SelectSubset<T, DonoCreateArgs>
    ): CheckSelect<T, Prisma__DonoClient<Dono>, Prisma__DonoClient<DonoGetPayload<T>>>

    /**
     * Delete a Dono.
     * @param {DonoDeleteArgs} args - Arguments to delete one Dono.
     * @example
     * // Delete one Dono
     * const Dono = await prisma.dono.delete({
     *   where: {
     *     // ... filter to delete one Dono
     *   }
     * })
     * 
    **/
    delete<T extends DonoDeleteArgs>(
      args: SelectSubset<T, DonoDeleteArgs>
    ): CheckSelect<T, Prisma__DonoClient<Dono>, Prisma__DonoClient<DonoGetPayload<T>>>

    /**
     * Update one Dono.
     * @param {DonoUpdateArgs} args - Arguments to update one Dono.
     * @example
     * // Update one Dono
     * const dono = await prisma.dono.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DonoUpdateArgs>(
      args: SelectSubset<T, DonoUpdateArgs>
    ): CheckSelect<T, Prisma__DonoClient<Dono>, Prisma__DonoClient<DonoGetPayload<T>>>

    /**
     * Delete zero or more Donos.
     * @param {DonoDeleteManyArgs} args - Arguments to filter Donos to delete.
     * @example
     * // Delete a few Donos
     * const { count } = await prisma.dono.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DonoDeleteManyArgs>(
      args?: SelectSubset<T, DonoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donos
     * const dono = await prisma.dono.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DonoUpdateManyArgs>(
      args: SelectSubset<T, DonoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Dono.
     * @param {DonoUpsertArgs} args - Arguments to update or create a Dono.
     * @example
     * // Update or create a Dono
     * const dono = await prisma.dono.upsert({
     *   create: {
     *     // ... data to create a Dono
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dono we want to update
     *   }
     * })
    **/
    upsert<T extends DonoUpsertArgs>(
      args: SelectSubset<T, DonoUpsertArgs>
    ): CheckSelect<T, Prisma__DonoClient<Dono>, Prisma__DonoClient<DonoGetPayload<T>>>

    /**
     * Count the number of Donos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonoCountArgs} args - Arguments to filter Donos to count.
     * @example
     * // Count the number of Donos
     * const count = await prisma.dono.count({
     *   where: {
     *     // ... the filter for the Donos we want to count
     *   }
     * })
    **/
    count<T extends DonoCountArgs>(
      args?: Subset<T, DonoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dono.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonoAggregateArgs>(args: Subset<T, DonoAggregateArgs>): PrismaPromise<GetDonoAggregateType<T>>

    /**
     * Group by Dono.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonoGroupByArgs['orderBy'] }
        : { orderBy?: DonoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dono.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DonoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    animals<T extends AnimalFindManyArgs = {}>(args?: Subset<T, AnimalFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Animal>>, PrismaPromise<Array<AnimalGetPayload<T>>>>;

    adocao<T extends AdocaoFindManyArgs = {}>(args?: Subset<T, AdocaoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Adocao>>, PrismaPromise<Array<AdocaoGetPayload<T>>>>;

    usuario<T extends UsuarioArgs = {}>(args?: Subset<T, UsuarioArgs>): CheckSelect<T, Prisma__UsuarioClient<Usuario | null >, Prisma__UsuarioClient<UsuarioGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Dono findUnique
   */
  export type DonoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Dono
     * 
    **/
    select?: DonoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DonoInclude | null
    /**
     * Throw an Error if a Dono can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Dono to fetch.
     * 
    **/
    where: DonoWhereUniqueInput
  }


  /**
   * Dono findFirst
   */
  export type DonoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Dono
     * 
    **/
    select?: DonoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DonoInclude | null
    /**
     * Throw an Error if a Dono can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Dono to fetch.
     * 
    **/
    where?: DonoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donos to fetch.
     * 
    **/
    orderBy?: Enumerable<DonoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donos.
     * 
    **/
    cursor?: DonoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donos.
     * 
    **/
    distinct?: Enumerable<DonoScalarFieldEnum>
  }


  /**
   * Dono findMany
   */
  export type DonoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Dono
     * 
    **/
    select?: DonoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DonoInclude | null
    /**
     * Filter, which Donos to fetch.
     * 
    **/
    where?: DonoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donos to fetch.
     * 
    **/
    orderBy?: Enumerable<DonoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donos.
     * 
    **/
    cursor?: DonoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DonoScalarFieldEnum>
  }


  /**
   * Dono create
   */
  export type DonoCreateArgs = {
    /**
     * Select specific fields to fetch from the Dono
     * 
    **/
    select?: DonoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DonoInclude | null
    /**
     * The data needed to create a Dono.
     * 
    **/
    data: XOR<DonoCreateInput, DonoUncheckedCreateInput>
  }


  /**
   * Dono update
   */
  export type DonoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Dono
     * 
    **/
    select?: DonoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DonoInclude | null
    /**
     * The data needed to update a Dono.
     * 
    **/
    data: XOR<DonoUpdateInput, DonoUncheckedUpdateInput>
    /**
     * Choose, which Dono to update.
     * 
    **/
    where: DonoWhereUniqueInput
  }


  /**
   * Dono updateMany
   */
  export type DonoUpdateManyArgs = {
    data: XOR<DonoUpdateManyMutationInput, DonoUncheckedUpdateManyInput>
    where?: DonoWhereInput
  }


  /**
   * Dono upsert
   */
  export type DonoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Dono
     * 
    **/
    select?: DonoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DonoInclude | null
    /**
     * The filter to search for the Dono to update in case it exists.
     * 
    **/
    where: DonoWhereUniqueInput
    /**
     * In case the Dono found by the `where` argument doesn't exist, create a new Dono with this data.
     * 
    **/
    create: XOR<DonoCreateInput, DonoUncheckedCreateInput>
    /**
     * In case the Dono was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DonoUpdateInput, DonoUncheckedUpdateInput>
  }


  /**
   * Dono delete
   */
  export type DonoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Dono
     * 
    **/
    select?: DonoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DonoInclude | null
    /**
     * Filter which Dono to delete.
     * 
    **/
    where: DonoWhereUniqueInput
  }


  /**
   * Dono deleteMany
   */
  export type DonoDeleteManyArgs = {
    where?: DonoWhereInput
  }


  /**
   * Dono without action
   */
  export type DonoArgs = {
    /**
     * Select specific fields to fetch from the Dono
     * 
    **/
    select?: DonoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DonoInclude | null
  }



  /**
   * Model Adocao
   */


  export type AggregateAdocao = {
    _count: AdocaoCountAggregateOutputType | null
    _min: AdocaoMinAggregateOutputType | null
    _max: AdocaoMaxAggregateOutputType | null
  }

  export type AdocaoMinAggregateOutputType = {
    id: string | null
    data_adocao: Date | null
    animal_id: string | null
    dono_id: string | null
  }

  export type AdocaoMaxAggregateOutputType = {
    id: string | null
    data_adocao: Date | null
    animal_id: string | null
    dono_id: string | null
  }

  export type AdocaoCountAggregateOutputType = {
    id: number
    data_adocao: number
    animal_id: number
    dono_id: number
    _all: number
  }


  export type AdocaoMinAggregateInputType = {
    id?: true
    data_adocao?: true
    animal_id?: true
    dono_id?: true
  }

  export type AdocaoMaxAggregateInputType = {
    id?: true
    data_adocao?: true
    animal_id?: true
    dono_id?: true
  }

  export type AdocaoCountAggregateInputType = {
    id?: true
    data_adocao?: true
    animal_id?: true
    dono_id?: true
    _all?: true
  }

  export type AdocaoAggregateArgs = {
    /**
     * Filter which Adocao to aggregate.
     * 
    **/
    where?: AdocaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adocaos to fetch.
     * 
    **/
    orderBy?: Enumerable<AdocaoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AdocaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adocaos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adocaos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adocaos
    **/
    _count?: true | AdocaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdocaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdocaoMaxAggregateInputType
  }

  export type GetAdocaoAggregateType<T extends AdocaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAdocao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdocao[P]>
      : GetScalarType<T[P], AggregateAdocao[P]>
  }


    
    
  export type AdocaoGroupByArgs = {
    where?: AdocaoWhereInput
    orderBy?: Enumerable<AdocaoOrderByWithAggregationInput>
    by: Array<AdocaoScalarFieldEnum>
    having?: AdocaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdocaoCountAggregateInputType | true
    _min?: AdocaoMinAggregateInputType
    _max?: AdocaoMaxAggregateInputType
  }


  export type AdocaoGroupByOutputType = {
    id: string
    data_adocao: Date
    animal_id: string
    dono_id: string
    _count: AdocaoCountAggregateOutputType | null
    _min: AdocaoMinAggregateOutputType | null
    _max: AdocaoMaxAggregateOutputType | null
  }

  type GetAdocaoGroupByPayload<T extends AdocaoGroupByArgs> = Promise<
    Array<
      PickArray<AdocaoGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof AdocaoGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], AdocaoGroupByOutputType[P]> 
            : GetScalarType<T[P], AdocaoGroupByOutputType[P]>
        }
      > 
    >


  export type AdocaoSelect = {
    id?: boolean
    data_adocao?: boolean
    animal_id?: boolean
    dono_id?: boolean
    animal?: boolean | AnimalArgs
    dono?: boolean | DonoArgs
  }

  export type AdocaoInclude = {
    animal?: boolean | AnimalArgs
    dono?: boolean | DonoArgs
  }

  export type AdocaoGetPayload<
    S extends boolean | null | undefined | AdocaoArgs,
    U = keyof S
      > = S extends true
        ? Adocao
    : S extends undefined
    ? never
    : S extends AdocaoArgs | AdocaoFindManyArgs
    ?'include' extends U
    ? Adocao  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'animal'
        ? AnimalGetPayload<S['include'][P]> :
        P extends 'dono'
        ? DonoGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Adocao ?Adocao [P]
  : 
          P extends 'animal'
        ? AnimalGetPayload<S['select'][P]> :
        P extends 'dono'
        ? DonoGetPayload<S['select'][P]> : never
  } 
    : Adocao
  : Adocao


  type AdocaoCountArgs = Merge<
    Omit<AdocaoFindManyArgs, 'select' | 'include'> & {
      select?: AdocaoCountAggregateInputType | true
    }
  >

  export interface AdocaoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Adocao that matches the filter.
     * @param {AdocaoFindUniqueArgs} args - Arguments to find a Adocao
     * @example
     * // Get one Adocao
     * const adocao = await prisma.adocao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdocaoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdocaoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Adocao'> extends True ? CheckSelect<T, Prisma__AdocaoClient<Adocao>, Prisma__AdocaoClient<AdocaoGetPayload<T>>> : CheckSelect<T, Prisma__AdocaoClient<Adocao | null >, Prisma__AdocaoClient<AdocaoGetPayload<T> | null >>

    /**
     * Find the first Adocao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdocaoFindFirstArgs} args - Arguments to find a Adocao
     * @example
     * // Get one Adocao
     * const adocao = await prisma.adocao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdocaoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdocaoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Adocao'> extends True ? CheckSelect<T, Prisma__AdocaoClient<Adocao>, Prisma__AdocaoClient<AdocaoGetPayload<T>>> : CheckSelect<T, Prisma__AdocaoClient<Adocao | null >, Prisma__AdocaoClient<AdocaoGetPayload<T> | null >>

    /**
     * Find zero or more Adocaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdocaoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adocaos
     * const adocaos = await prisma.adocao.findMany()
     * 
     * // Get first 10 Adocaos
     * const adocaos = await prisma.adocao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adocaoWithIdOnly = await prisma.adocao.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdocaoFindManyArgs>(
      args?: SelectSubset<T, AdocaoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Adocao>>, PrismaPromise<Array<AdocaoGetPayload<T>>>>

    /**
     * Create a Adocao.
     * @param {AdocaoCreateArgs} args - Arguments to create a Adocao.
     * @example
     * // Create one Adocao
     * const Adocao = await prisma.adocao.create({
     *   data: {
     *     // ... data to create a Adocao
     *   }
     * })
     * 
    **/
    create<T extends AdocaoCreateArgs>(
      args: SelectSubset<T, AdocaoCreateArgs>
    ): CheckSelect<T, Prisma__AdocaoClient<Adocao>, Prisma__AdocaoClient<AdocaoGetPayload<T>>>

    /**
     * Delete a Adocao.
     * @param {AdocaoDeleteArgs} args - Arguments to delete one Adocao.
     * @example
     * // Delete one Adocao
     * const Adocao = await prisma.adocao.delete({
     *   where: {
     *     // ... filter to delete one Adocao
     *   }
     * })
     * 
    **/
    delete<T extends AdocaoDeleteArgs>(
      args: SelectSubset<T, AdocaoDeleteArgs>
    ): CheckSelect<T, Prisma__AdocaoClient<Adocao>, Prisma__AdocaoClient<AdocaoGetPayload<T>>>

    /**
     * Update one Adocao.
     * @param {AdocaoUpdateArgs} args - Arguments to update one Adocao.
     * @example
     * // Update one Adocao
     * const adocao = await prisma.adocao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdocaoUpdateArgs>(
      args: SelectSubset<T, AdocaoUpdateArgs>
    ): CheckSelect<T, Prisma__AdocaoClient<Adocao>, Prisma__AdocaoClient<AdocaoGetPayload<T>>>

    /**
     * Delete zero or more Adocaos.
     * @param {AdocaoDeleteManyArgs} args - Arguments to filter Adocaos to delete.
     * @example
     * // Delete a few Adocaos
     * const { count } = await prisma.adocao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdocaoDeleteManyArgs>(
      args?: SelectSubset<T, AdocaoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adocaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdocaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adocaos
     * const adocao = await prisma.adocao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdocaoUpdateManyArgs>(
      args: SelectSubset<T, AdocaoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Adocao.
     * @param {AdocaoUpsertArgs} args - Arguments to update or create a Adocao.
     * @example
     * // Update or create a Adocao
     * const adocao = await prisma.adocao.upsert({
     *   create: {
     *     // ... data to create a Adocao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adocao we want to update
     *   }
     * })
    **/
    upsert<T extends AdocaoUpsertArgs>(
      args: SelectSubset<T, AdocaoUpsertArgs>
    ): CheckSelect<T, Prisma__AdocaoClient<Adocao>, Prisma__AdocaoClient<AdocaoGetPayload<T>>>

    /**
     * Count the number of Adocaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdocaoCountArgs} args - Arguments to filter Adocaos to count.
     * @example
     * // Count the number of Adocaos
     * const count = await prisma.adocao.count({
     *   where: {
     *     // ... the filter for the Adocaos we want to count
     *   }
     * })
    **/
    count<T extends AdocaoCountArgs>(
      args?: Subset<T, AdocaoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdocaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adocao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdocaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdocaoAggregateArgs>(args: Subset<T, AdocaoAggregateArgs>): PrismaPromise<GetAdocaoAggregateType<T>>

    /**
     * Group by Adocao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdocaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdocaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdocaoGroupByArgs['orderBy'] }
        : { orderBy?: AdocaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdocaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdocaoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adocao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdocaoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    animal<T extends AnimalArgs = {}>(args?: Subset<T, AnimalArgs>): CheckSelect<T, Prisma__AnimalClient<Animal | null >, Prisma__AnimalClient<AnimalGetPayload<T> | null >>;

    dono<T extends DonoArgs = {}>(args?: Subset<T, DonoArgs>): CheckSelect<T, Prisma__DonoClient<Dono | null >, Prisma__DonoClient<DonoGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Adocao findUnique
   */
  export type AdocaoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Adocao
     * 
    **/
    select?: AdocaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdocaoInclude | null
    /**
     * Throw an Error if a Adocao can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Adocao to fetch.
     * 
    **/
    where: AdocaoWhereUniqueInput
  }


  /**
   * Adocao findFirst
   */
  export type AdocaoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Adocao
     * 
    **/
    select?: AdocaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdocaoInclude | null
    /**
     * Throw an Error if a Adocao can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Adocao to fetch.
     * 
    **/
    where?: AdocaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adocaos to fetch.
     * 
    **/
    orderBy?: Enumerable<AdocaoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adocaos.
     * 
    **/
    cursor?: AdocaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adocaos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adocaos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adocaos.
     * 
    **/
    distinct?: Enumerable<AdocaoScalarFieldEnum>
  }


  /**
   * Adocao findMany
   */
  export type AdocaoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Adocao
     * 
    **/
    select?: AdocaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdocaoInclude | null
    /**
     * Filter, which Adocaos to fetch.
     * 
    **/
    where?: AdocaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adocaos to fetch.
     * 
    **/
    orderBy?: Enumerable<AdocaoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adocaos.
     * 
    **/
    cursor?: AdocaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adocaos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adocaos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AdocaoScalarFieldEnum>
  }


  /**
   * Adocao create
   */
  export type AdocaoCreateArgs = {
    /**
     * Select specific fields to fetch from the Adocao
     * 
    **/
    select?: AdocaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdocaoInclude | null
    /**
     * The data needed to create a Adocao.
     * 
    **/
    data: XOR<AdocaoCreateInput, AdocaoUncheckedCreateInput>
  }


  /**
   * Adocao update
   */
  export type AdocaoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Adocao
     * 
    **/
    select?: AdocaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdocaoInclude | null
    /**
     * The data needed to update a Adocao.
     * 
    **/
    data: XOR<AdocaoUpdateInput, AdocaoUncheckedUpdateInput>
    /**
     * Choose, which Adocao to update.
     * 
    **/
    where: AdocaoWhereUniqueInput
  }


  /**
   * Adocao updateMany
   */
  export type AdocaoUpdateManyArgs = {
    data: XOR<AdocaoUpdateManyMutationInput, AdocaoUncheckedUpdateManyInput>
    where?: AdocaoWhereInput
  }


  /**
   * Adocao upsert
   */
  export type AdocaoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Adocao
     * 
    **/
    select?: AdocaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdocaoInclude | null
    /**
     * The filter to search for the Adocao to update in case it exists.
     * 
    **/
    where: AdocaoWhereUniqueInput
    /**
     * In case the Adocao found by the `where` argument doesn't exist, create a new Adocao with this data.
     * 
    **/
    create: XOR<AdocaoCreateInput, AdocaoUncheckedCreateInput>
    /**
     * In case the Adocao was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AdocaoUpdateInput, AdocaoUncheckedUpdateInput>
  }


  /**
   * Adocao delete
   */
  export type AdocaoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Adocao
     * 
    **/
    select?: AdocaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdocaoInclude | null
    /**
     * Filter which Adocao to delete.
     * 
    **/
    where: AdocaoWhereUniqueInput
  }


  /**
   * Adocao deleteMany
   */
  export type AdocaoDeleteManyArgs = {
    where?: AdocaoWhereInput
  }


  /**
   * Adocao without action
   */
  export type AdocaoArgs = {
    /**
     * Select specific fields to fetch from the Adocao
     * 
    **/
    select?: AdocaoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdocaoInclude | null
  }



  /**
   * Model Animal
   */


  export type AggregateAnimal = {
    _count: AnimalCountAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  export type AnimalMinAggregateOutputType = {
    animal_id: string | null
    raca: string | null
    tipo: string | null
    nome: string | null
    cor: string | null
    dono_id: string | null
  }

  export type AnimalMaxAggregateOutputType = {
    animal_id: string | null
    raca: string | null
    tipo: string | null
    nome: string | null
    cor: string | null
    dono_id: string | null
  }

  export type AnimalCountAggregateOutputType = {
    animal_id: number
    raca: number
    tipo: number
    nome: number
    cor: number
    dono_id: number
    _all: number
  }


  export type AnimalMinAggregateInputType = {
    animal_id?: true
    raca?: true
    tipo?: true
    nome?: true
    cor?: true
    dono_id?: true
  }

  export type AnimalMaxAggregateInputType = {
    animal_id?: true
    raca?: true
    tipo?: true
    nome?: true
    cor?: true
    dono_id?: true
  }

  export type AnimalCountAggregateInputType = {
    animal_id?: true
    raca?: true
    tipo?: true
    nome?: true
    cor?: true
    dono_id?: true
    _all?: true
  }

  export type AnimalAggregateArgs = {
    /**
     * Filter which Animal to aggregate.
     * 
    **/
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     * 
    **/
    orderBy?: Enumerable<AnimalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animals
    **/
    _count?: true | AnimalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimalMaxAggregateInputType
  }

  export type GetAnimalAggregateType<T extends AnimalAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimal[P]>
      : GetScalarType<T[P], AggregateAnimal[P]>
  }


    
    
  export type AnimalGroupByArgs = {
    where?: AnimalWhereInput
    orderBy?: Enumerable<AnimalOrderByWithAggregationInput>
    by: Array<AnimalScalarFieldEnum>
    having?: AnimalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimalCountAggregateInputType | true
    _min?: AnimalMinAggregateInputType
    _max?: AnimalMaxAggregateInputType
  }


  export type AnimalGroupByOutputType = {
    animal_id: string
    raca: string
    tipo: string
    nome: string
    cor: string
    dono_id: string
    _count: AnimalCountAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  type GetAnimalGroupByPayload<T extends AnimalGroupByArgs> = Promise<
    Array<
      PickArray<AnimalGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof AnimalGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], AnimalGroupByOutputType[P]> 
            : GetScalarType<T[P], AnimalGroupByOutputType[P]>
        }
      > 
    >


  export type AnimalSelect = {
    animal_id?: boolean
    raca?: boolean
    tipo?: boolean
    nome?: boolean
    cor?: boolean
    dono_id?: boolean
    dono?: boolean | DonoArgs
    adocao?: boolean | AdocaoArgs
  }

  export type AnimalInclude = {
    dono?: boolean | DonoArgs
    adocao?: boolean | AdocaoArgs
  }

  export type AnimalGetPayload<
    S extends boolean | null | undefined | AnimalArgs,
    U = keyof S
      > = S extends true
        ? Animal
    : S extends undefined
    ? never
    : S extends AnimalArgs | AnimalFindManyArgs
    ?'include' extends U
    ? Animal  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'dono'
        ? DonoGetPayload<S['include'][P]> :
        P extends 'adocao'
        ? AdocaoGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Animal ?Animal [P]
  : 
          P extends 'dono'
        ? DonoGetPayload<S['select'][P]> :
        P extends 'adocao'
        ? AdocaoGetPayload<S['select'][P]> | null : never
  } 
    : Animal
  : Animal


  type AnimalCountArgs = Merge<
    Omit<AnimalFindManyArgs, 'select' | 'include'> & {
      select?: AnimalCountAggregateInputType | true
    }
  >

  export interface AnimalDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Animal that matches the filter.
     * @param {AnimalFindUniqueArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnimalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AnimalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Animal'> extends True ? CheckSelect<T, Prisma__AnimalClient<Animal>, Prisma__AnimalClient<AnimalGetPayload<T>>> : CheckSelect<T, Prisma__AnimalClient<Animal | null >, Prisma__AnimalClient<AnimalGetPayload<T> | null >>

    /**
     * Find the first Animal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnimalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AnimalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Animal'> extends True ? CheckSelect<T, Prisma__AnimalClient<Animal>, Prisma__AnimalClient<AnimalGetPayload<T>>> : CheckSelect<T, Prisma__AnimalClient<Animal | null >, Prisma__AnimalClient<AnimalGetPayload<T> | null >>

    /**
     * Find zero or more Animals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animals
     * const animals = await prisma.animal.findMany()
     * 
     * // Get first 10 Animals
     * const animals = await prisma.animal.findMany({ take: 10 })
     * 
     * // Only select the `animal_id`
     * const animalWithAnimal_idOnly = await prisma.animal.findMany({ select: { animal_id: true } })
     * 
    **/
    findMany<T extends AnimalFindManyArgs>(
      args?: SelectSubset<T, AnimalFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Animal>>, PrismaPromise<Array<AnimalGetPayload<T>>>>

    /**
     * Create a Animal.
     * @param {AnimalCreateArgs} args - Arguments to create a Animal.
     * @example
     * // Create one Animal
     * const Animal = await prisma.animal.create({
     *   data: {
     *     // ... data to create a Animal
     *   }
     * })
     * 
    **/
    create<T extends AnimalCreateArgs>(
      args: SelectSubset<T, AnimalCreateArgs>
    ): CheckSelect<T, Prisma__AnimalClient<Animal>, Prisma__AnimalClient<AnimalGetPayload<T>>>

    /**
     * Delete a Animal.
     * @param {AnimalDeleteArgs} args - Arguments to delete one Animal.
     * @example
     * // Delete one Animal
     * const Animal = await prisma.animal.delete({
     *   where: {
     *     // ... filter to delete one Animal
     *   }
     * })
     * 
    **/
    delete<T extends AnimalDeleteArgs>(
      args: SelectSubset<T, AnimalDeleteArgs>
    ): CheckSelect<T, Prisma__AnimalClient<Animal>, Prisma__AnimalClient<AnimalGetPayload<T>>>

    /**
     * Update one Animal.
     * @param {AnimalUpdateArgs} args - Arguments to update one Animal.
     * @example
     * // Update one Animal
     * const animal = await prisma.animal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnimalUpdateArgs>(
      args: SelectSubset<T, AnimalUpdateArgs>
    ): CheckSelect<T, Prisma__AnimalClient<Animal>, Prisma__AnimalClient<AnimalGetPayload<T>>>

    /**
     * Delete zero or more Animals.
     * @param {AnimalDeleteManyArgs} args - Arguments to filter Animals to delete.
     * @example
     * // Delete a few Animals
     * const { count } = await prisma.animal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnimalDeleteManyArgs>(
      args?: SelectSubset<T, AnimalDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnimalUpdateManyArgs>(
      args: SelectSubset<T, AnimalUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Animal.
     * @param {AnimalUpsertArgs} args - Arguments to update or create a Animal.
     * @example
     * // Update or create a Animal
     * const animal = await prisma.animal.upsert({
     *   create: {
     *     // ... data to create a Animal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animal we want to update
     *   }
     * })
    **/
    upsert<T extends AnimalUpsertArgs>(
      args: SelectSubset<T, AnimalUpsertArgs>
    ): CheckSelect<T, Prisma__AnimalClient<Animal>, Prisma__AnimalClient<AnimalGetPayload<T>>>

    /**
     * Count the number of Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalCountArgs} args - Arguments to filter Animals to count.
     * @example
     * // Count the number of Animals
     * const count = await prisma.animal.count({
     *   where: {
     *     // ... the filter for the Animals we want to count
     *   }
     * })
    **/
    count<T extends AnimalCountArgs>(
      args?: Subset<T, AnimalCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnimalAggregateArgs>(args: Subset<T, AnimalAggregateArgs>): PrismaPromise<GetAnimalAggregateType<T>>

    /**
     * Group by Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnimalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimalGroupByArgs['orderBy'] }
        : { orderBy?: AnimalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnimalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimalGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AnimalClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    dono<T extends DonoArgs = {}>(args?: Subset<T, DonoArgs>): CheckSelect<T, Prisma__DonoClient<Dono | null >, Prisma__DonoClient<DonoGetPayload<T> | null >>;

    adocao<T extends AdocaoArgs = {}>(args?: Subset<T, AdocaoArgs>): CheckSelect<T, Prisma__AdocaoClient<Adocao | null >, Prisma__AdocaoClient<AdocaoGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Animal findUnique
   */
  export type AnimalFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Animal
     * 
    **/
    select?: AnimalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnimalInclude | null
    /**
     * Throw an Error if a Animal can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Animal to fetch.
     * 
    **/
    where: AnimalWhereUniqueInput
  }


  /**
   * Animal findFirst
   */
  export type AnimalFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Animal
     * 
    **/
    select?: AnimalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnimalInclude | null
    /**
     * Throw an Error if a Animal can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Animal to fetch.
     * 
    **/
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     * 
    **/
    orderBy?: Enumerable<AnimalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     * 
    **/
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     * 
    **/
    distinct?: Enumerable<AnimalScalarFieldEnum>
  }


  /**
   * Animal findMany
   */
  export type AnimalFindManyArgs = {
    /**
     * Select specific fields to fetch from the Animal
     * 
    **/
    select?: AnimalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnimalInclude | null
    /**
     * Filter, which Animals to fetch.
     * 
    **/
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     * 
    **/
    orderBy?: Enumerable<AnimalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animals.
     * 
    **/
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AnimalScalarFieldEnum>
  }


  /**
   * Animal create
   */
  export type AnimalCreateArgs = {
    /**
     * Select specific fields to fetch from the Animal
     * 
    **/
    select?: AnimalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnimalInclude | null
    /**
     * The data needed to create a Animal.
     * 
    **/
    data: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
  }


  /**
   * Animal update
   */
  export type AnimalUpdateArgs = {
    /**
     * Select specific fields to fetch from the Animal
     * 
    **/
    select?: AnimalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnimalInclude | null
    /**
     * The data needed to update a Animal.
     * 
    **/
    data: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
    /**
     * Choose, which Animal to update.
     * 
    **/
    where: AnimalWhereUniqueInput
  }


  /**
   * Animal updateMany
   */
  export type AnimalUpdateManyArgs = {
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    where?: AnimalWhereInput
  }


  /**
   * Animal upsert
   */
  export type AnimalUpsertArgs = {
    /**
     * Select specific fields to fetch from the Animal
     * 
    **/
    select?: AnimalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnimalInclude | null
    /**
     * The filter to search for the Animal to update in case it exists.
     * 
    **/
    where: AnimalWhereUniqueInput
    /**
     * In case the Animal found by the `where` argument doesn't exist, create a new Animal with this data.
     * 
    **/
    create: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
    /**
     * In case the Animal was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
  }


  /**
   * Animal delete
   */
  export type AnimalDeleteArgs = {
    /**
     * Select specific fields to fetch from the Animal
     * 
    **/
    select?: AnimalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnimalInclude | null
    /**
     * Filter which Animal to delete.
     * 
    **/
    where: AnimalWhereUniqueInput
  }


  /**
   * Animal deleteMany
   */
  export type AnimalDeleteManyArgs = {
    where?: AnimalWhereInput
  }


  /**
   * Animal without action
   */
  export type AnimalArgs = {
    /**
     * Select specific fields to fetch from the Animal
     * 
    **/
    select?: AnimalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AnimalInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UsuarioScalarFieldEnum: {
    usuario_id: 'usuario_id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const DonoScalarFieldEnum: {
    dono_id: 'dono_id',
    nome: 'nome',
    idade: 'idade',
    endereco: 'endereco',
    telefone: 'telefone',
    cidade: 'cidade',
    usuario_id: 'usuario_id'
  };

  export type DonoScalarFieldEnum = (typeof DonoScalarFieldEnum)[keyof typeof DonoScalarFieldEnum]


  export const AdocaoScalarFieldEnum: {
    id: 'id',
    data_adocao: 'data_adocao',
    animal_id: 'animal_id',
    dono_id: 'dono_id'
  };

  export type AdocaoScalarFieldEnum = (typeof AdocaoScalarFieldEnum)[keyof typeof AdocaoScalarFieldEnum]


  export const AnimalScalarFieldEnum: {
    animal_id: 'animal_id',
    raca: 'raca',
    tipo: 'tipo',
    nome: 'nome',
    cor: 'cor',
    dono_id: 'dono_id'
  };

  export type AnimalScalarFieldEnum = (typeof AnimalScalarFieldEnum)[keyof typeof AnimalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: Enumerable<UsuarioWhereInput>
    OR?: Enumerable<UsuarioWhereInput>
    NOT?: Enumerable<UsuarioWhereInput>
    usuario_id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    dono?: XOR<DonoRelationFilter, DonoWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    usuario_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dono?: DonoOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = {
    usuario_id?: string
  }

  export type UsuarioOrderByWithAggregationInput = {
    usuario_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsuarioScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsuarioScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsuarioScalarWhereWithAggregatesInput>
    usuario_id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
  }

  export type DonoWhereInput = {
    AND?: Enumerable<DonoWhereInput>
    OR?: Enumerable<DonoWhereInput>
    NOT?: Enumerable<DonoWhereInput>
    dono_id?: StringFilter | string
    nome?: StringFilter | string
    idade?: IntFilter | number
    endereco?: StringFilter | string
    telefone?: StringFilter | string
    cidade?: StringFilter | string
    animals?: AnimalListRelationFilter
    adocao?: AdocaoListRelationFilter
    usuario_id?: StringFilter | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type DonoOrderByWithRelationInput = {
    dono_id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    animals?: AnimalOrderByRelationAggregateInput
    adocao?: AdocaoOrderByRelationAggregateInput
    usuario_id?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type DonoWhereUniqueInput = {
    dono_id?: string
    usuario_id?: string
  }

  export type DonoOrderByWithAggregationInput = {
    dono_id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    usuario_id?: SortOrder
    _count?: DonoCountOrderByAggregateInput
    _avg?: DonoAvgOrderByAggregateInput
    _max?: DonoMaxOrderByAggregateInput
    _min?: DonoMinOrderByAggregateInput
    _sum?: DonoSumOrderByAggregateInput
  }

  export type DonoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DonoScalarWhereWithAggregatesInput>
    OR?: Enumerable<DonoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DonoScalarWhereWithAggregatesInput>
    dono_id?: StringWithAggregatesFilter | string
    nome?: StringWithAggregatesFilter | string
    idade?: IntWithAggregatesFilter | number
    endereco?: StringWithAggregatesFilter | string
    telefone?: StringWithAggregatesFilter | string
    cidade?: StringWithAggregatesFilter | string
    usuario_id?: StringWithAggregatesFilter | string
  }

  export type AdocaoWhereInput = {
    AND?: Enumerable<AdocaoWhereInput>
    OR?: Enumerable<AdocaoWhereInput>
    NOT?: Enumerable<AdocaoWhereInput>
    id?: StringFilter | string
    data_adocao?: DateTimeFilter | Date | string
    animal_id?: StringFilter | string
    dono_id?: StringFilter | string
    animal?: XOR<AnimalRelationFilter, AnimalWhereInput>
    dono?: XOR<DonoRelationFilter, DonoWhereInput>
  }

  export type AdocaoOrderByWithRelationInput = {
    id?: SortOrder
    data_adocao?: SortOrder
    animal_id?: SortOrder
    dono_id?: SortOrder
    animal?: AnimalOrderByWithRelationInput
    dono?: DonoOrderByWithRelationInput
  }

  export type AdocaoWhereUniqueInput = {
    id?: string
    animal_id?: string
  }

  export type AdocaoOrderByWithAggregationInput = {
    id?: SortOrder
    data_adocao?: SortOrder
    animal_id?: SortOrder
    dono_id?: SortOrder
    _count?: AdocaoCountOrderByAggregateInput
    _max?: AdocaoMaxOrderByAggregateInput
    _min?: AdocaoMinOrderByAggregateInput
  }

  export type AdocaoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdocaoScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdocaoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdocaoScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    data_adocao?: DateTimeWithAggregatesFilter | Date | string
    animal_id?: StringWithAggregatesFilter | string
    dono_id?: StringWithAggregatesFilter | string
  }

  export type AnimalWhereInput = {
    AND?: Enumerable<AnimalWhereInput>
    OR?: Enumerable<AnimalWhereInput>
    NOT?: Enumerable<AnimalWhereInput>
    animal_id?: StringFilter | string
    raca?: StringFilter | string
    tipo?: StringFilter | string
    nome?: StringFilter | string
    cor?: StringFilter | string
    dono_id?: StringFilter | string
    dono?: XOR<DonoRelationFilter, DonoWhereInput>
    adocao?: XOR<AdocaoRelationFilter, AdocaoWhereInput> | null
  }

  export type AnimalOrderByWithRelationInput = {
    animal_id?: SortOrder
    raca?: SortOrder
    tipo?: SortOrder
    nome?: SortOrder
    cor?: SortOrder
    dono_id?: SortOrder
    dono?: DonoOrderByWithRelationInput
    adocao?: AdocaoOrderByWithRelationInput
  }

  export type AnimalWhereUniqueInput = {
    animal_id?: string
  }

  export type AnimalOrderByWithAggregationInput = {
    animal_id?: SortOrder
    raca?: SortOrder
    tipo?: SortOrder
    nome?: SortOrder
    cor?: SortOrder
    dono_id?: SortOrder
    _count?: AnimalCountOrderByAggregateInput
    _max?: AnimalMaxOrderByAggregateInput
    _min?: AnimalMinOrderByAggregateInput
  }

  export type AnimalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AnimalScalarWhereWithAggregatesInput>
    OR?: Enumerable<AnimalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AnimalScalarWhereWithAggregatesInput>
    animal_id?: StringWithAggregatesFilter | string
    raca?: StringWithAggregatesFilter | string
    tipo?: StringWithAggregatesFilter | string
    nome?: StringWithAggregatesFilter | string
    cor?: StringWithAggregatesFilter | string
    dono_id?: StringWithAggregatesFilter | string
  }

  export type UsuarioCreateInput = {
    usuario_id?: string
    name: string
    email: string
    password: string
    dono?: DonoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    usuario_id?: string
    name: string
    email: string
    password: string
    dono?: DonoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dono?: DonoUpdateOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedUpdateInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dono?: DonoUncheckedUpdateOneWithoutUsuarioInput
  }

  export type UsuarioUpdateManyMutationInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DonoCreateInput = {
    dono_id?: string
    nome: string
    idade: number
    endereco: string
    telefone: string
    cidade: string
    animals?: AnimalCreateNestedManyWithoutDonoInput
    adocao?: AdocaoCreateNestedManyWithoutDonoInput
    usuario: UsuarioCreateNestedOneWithoutDonoInput
  }

  export type DonoUncheckedCreateInput = {
    dono_id?: string
    nome: string
    idade: number
    endereco: string
    telefone: string
    cidade: string
    usuario_id: string
    animals?: AnimalUncheckedCreateNestedManyWithoutDonoInput
    adocao?: AdocaoUncheckedCreateNestedManyWithoutDonoInput
  }

  export type DonoUpdateInput = {
    dono_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUpdateManyWithoutDonoInput
    adocao?: AdocaoUpdateManyWithoutDonoInput
    usuario?: UsuarioUpdateOneRequiredWithoutDonoInput
  }

  export type DonoUncheckedUpdateInput = {
    dono_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUncheckedUpdateManyWithoutDonoInput
    adocao?: AdocaoUncheckedUpdateManyWithoutDonoInput
  }

  export type DonoUpdateManyMutationInput = {
    dono_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
  }

  export type DonoUncheckedUpdateManyInput = {
    dono_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
  }

  export type AdocaoCreateInput = {
    id?: string
    data_adocao?: Date | string
    animal: AnimalCreateNestedOneWithoutAdocaoInput
    dono: DonoCreateNestedOneWithoutAdocaoInput
  }

  export type AdocaoUncheckedCreateInput = {
    id?: string
    data_adocao?: Date | string
    animal_id: string
    dono_id: string
  }

  export type AdocaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_adocao?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalUpdateOneRequiredWithoutAdocaoInput
    dono?: DonoUpdateOneRequiredWithoutAdocaoInput
  }

  export type AdocaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_adocao?: DateTimeFieldUpdateOperationsInput | Date | string
    animal_id?: StringFieldUpdateOperationsInput | string
    dono_id?: StringFieldUpdateOperationsInput | string
  }

  export type AdocaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_adocao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdocaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_adocao?: DateTimeFieldUpdateOperationsInput | Date | string
    animal_id?: StringFieldUpdateOperationsInput | string
    dono_id?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalCreateInput = {
    animal_id?: string
    raca: string
    tipo: string
    nome: string
    cor: string
    dono: DonoCreateNestedOneWithoutAnimalsInput
    adocao?: AdocaoCreateNestedOneWithoutAnimalInput
  }

  export type AnimalUncheckedCreateInput = {
    animal_id?: string
    raca: string
    tipo: string
    nome: string
    cor: string
    dono_id: string
    adocao?: AdocaoUncheckedCreateNestedOneWithoutAnimalInput
  }

  export type AnimalUpdateInput = {
    animal_id?: StringFieldUpdateOperationsInput | string
    raca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    dono?: DonoUpdateOneRequiredWithoutAnimalsInput
    adocao?: AdocaoUpdateOneWithoutAnimalInput
  }

  export type AnimalUncheckedUpdateInput = {
    animal_id?: StringFieldUpdateOperationsInput | string
    raca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    dono_id?: StringFieldUpdateOperationsInput | string
    adocao?: AdocaoUncheckedUpdateOneWithoutAnimalInput
  }

  export type AnimalUpdateManyMutationInput = {
    animal_id?: StringFieldUpdateOperationsInput | string
    raca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalUncheckedUpdateManyInput = {
    animal_id?: StringFieldUpdateOperationsInput | string
    raca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    dono_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DonoRelationFilter = {
    is?: DonoWhereInput
    isNot?: DonoWhereInput
  }

  export type UsuarioCountOrderByAggregateInput = {
    usuario_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    usuario_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    usuario_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type AnimalListRelationFilter = {
    every?: AnimalWhereInput
    some?: AnimalWhereInput
    none?: AnimalWhereInput
  }

  export type AdocaoListRelationFilter = {
    every?: AdocaoWhereInput
    some?: AdocaoWhereInput
    none?: AdocaoWhereInput
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type AnimalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdocaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonoCountOrderByAggregateInput = {
    dono_id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    usuario_id?: SortOrder
  }

  export type DonoAvgOrderByAggregateInput = {
    idade?: SortOrder
  }

  export type DonoMaxOrderByAggregateInput = {
    dono_id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    usuario_id?: SortOrder
  }

  export type DonoMinOrderByAggregateInput = {
    dono_id?: SortOrder
    nome?: SortOrder
    idade?: SortOrder
    endereco?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    usuario_id?: SortOrder
  }

  export type DonoSumOrderByAggregateInput = {
    idade?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type AnimalRelationFilter = {
    is?: AnimalWhereInput
    isNot?: AnimalWhereInput
  }

  export type AdocaoCountOrderByAggregateInput = {
    id?: SortOrder
    data_adocao?: SortOrder
    animal_id?: SortOrder
    dono_id?: SortOrder
  }

  export type AdocaoMaxOrderByAggregateInput = {
    id?: SortOrder
    data_adocao?: SortOrder
    animal_id?: SortOrder
    dono_id?: SortOrder
  }

  export type AdocaoMinOrderByAggregateInput = {
    id?: SortOrder
    data_adocao?: SortOrder
    animal_id?: SortOrder
    dono_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type AdocaoRelationFilter = {
    is?: AdocaoWhereInput | null
    isNot?: AdocaoWhereInput | null
  }

  export type AnimalCountOrderByAggregateInput = {
    animal_id?: SortOrder
    raca?: SortOrder
    tipo?: SortOrder
    nome?: SortOrder
    cor?: SortOrder
    dono_id?: SortOrder
  }

  export type AnimalMaxOrderByAggregateInput = {
    animal_id?: SortOrder
    raca?: SortOrder
    tipo?: SortOrder
    nome?: SortOrder
    cor?: SortOrder
    dono_id?: SortOrder
  }

  export type AnimalMinOrderByAggregateInput = {
    animal_id?: SortOrder
    raca?: SortOrder
    tipo?: SortOrder
    nome?: SortOrder
    cor?: SortOrder
    dono_id?: SortOrder
  }

  export type DonoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<DonoCreateWithoutUsuarioInput, DonoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: DonoCreateOrConnectWithoutUsuarioInput
    connect?: DonoWhereUniqueInput
  }

  export type DonoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<DonoCreateWithoutUsuarioInput, DonoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: DonoCreateOrConnectWithoutUsuarioInput
    connect?: DonoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DonoUpdateOneWithoutUsuarioInput = {
    create?: XOR<DonoCreateWithoutUsuarioInput, DonoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: DonoCreateOrConnectWithoutUsuarioInput
    upsert?: DonoUpsertWithoutUsuarioInput
    connect?: DonoWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<DonoUpdateWithoutUsuarioInput, DonoUncheckedUpdateWithoutUsuarioInput>
  }

  export type DonoUncheckedUpdateOneWithoutUsuarioInput = {
    create?: XOR<DonoCreateWithoutUsuarioInput, DonoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: DonoCreateOrConnectWithoutUsuarioInput
    upsert?: DonoUpsertWithoutUsuarioInput
    connect?: DonoWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<DonoUpdateWithoutUsuarioInput, DonoUncheckedUpdateWithoutUsuarioInput>
  }

  export type AnimalCreateNestedManyWithoutDonoInput = {
    create?: XOR<Enumerable<AnimalCreateWithoutDonoInput>, Enumerable<AnimalUncheckedCreateWithoutDonoInput>>
    connectOrCreate?: Enumerable<AnimalCreateOrConnectWithoutDonoInput>
    connect?: Enumerable<AnimalWhereUniqueInput>
  }

  export type AdocaoCreateNestedManyWithoutDonoInput = {
    create?: XOR<Enumerable<AdocaoCreateWithoutDonoInput>, Enumerable<AdocaoUncheckedCreateWithoutDonoInput>>
    connectOrCreate?: Enumerable<AdocaoCreateOrConnectWithoutDonoInput>
    connect?: Enumerable<AdocaoWhereUniqueInput>
  }

  export type UsuarioCreateNestedOneWithoutDonoInput = {
    create?: XOR<UsuarioCreateWithoutDonoInput, UsuarioUncheckedCreateWithoutDonoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDonoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type AnimalUncheckedCreateNestedManyWithoutDonoInput = {
    create?: XOR<Enumerable<AnimalCreateWithoutDonoInput>, Enumerable<AnimalUncheckedCreateWithoutDonoInput>>
    connectOrCreate?: Enumerable<AnimalCreateOrConnectWithoutDonoInput>
    connect?: Enumerable<AnimalWhereUniqueInput>
  }

  export type AdocaoUncheckedCreateNestedManyWithoutDonoInput = {
    create?: XOR<Enumerable<AdocaoCreateWithoutDonoInput>, Enumerable<AdocaoUncheckedCreateWithoutDonoInput>>
    connectOrCreate?: Enumerable<AdocaoCreateOrConnectWithoutDonoInput>
    connect?: Enumerable<AdocaoWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnimalUpdateManyWithoutDonoInput = {
    create?: XOR<Enumerable<AnimalCreateWithoutDonoInput>, Enumerable<AnimalUncheckedCreateWithoutDonoInput>>
    connectOrCreate?: Enumerable<AnimalCreateOrConnectWithoutDonoInput>
    upsert?: Enumerable<AnimalUpsertWithWhereUniqueWithoutDonoInput>
    connect?: Enumerable<AnimalWhereUniqueInput>
    set?: Enumerable<AnimalWhereUniqueInput>
    disconnect?: Enumerable<AnimalWhereUniqueInput>
    delete?: Enumerable<AnimalWhereUniqueInput>
    update?: Enumerable<AnimalUpdateWithWhereUniqueWithoutDonoInput>
    updateMany?: Enumerable<AnimalUpdateManyWithWhereWithoutDonoInput>
    deleteMany?: Enumerable<AnimalScalarWhereInput>
  }

  export type AdocaoUpdateManyWithoutDonoInput = {
    create?: XOR<Enumerable<AdocaoCreateWithoutDonoInput>, Enumerable<AdocaoUncheckedCreateWithoutDonoInput>>
    connectOrCreate?: Enumerable<AdocaoCreateOrConnectWithoutDonoInput>
    upsert?: Enumerable<AdocaoUpsertWithWhereUniqueWithoutDonoInput>
    connect?: Enumerable<AdocaoWhereUniqueInput>
    set?: Enumerable<AdocaoWhereUniqueInput>
    disconnect?: Enumerable<AdocaoWhereUniqueInput>
    delete?: Enumerable<AdocaoWhereUniqueInput>
    update?: Enumerable<AdocaoUpdateWithWhereUniqueWithoutDonoInput>
    updateMany?: Enumerable<AdocaoUpdateManyWithWhereWithoutDonoInput>
    deleteMany?: Enumerable<AdocaoScalarWhereInput>
  }

  export type UsuarioUpdateOneRequiredWithoutDonoInput = {
    create?: XOR<UsuarioCreateWithoutDonoInput, UsuarioUncheckedCreateWithoutDonoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDonoInput
    upsert?: UsuarioUpsertWithoutDonoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<UsuarioUpdateWithoutDonoInput, UsuarioUncheckedUpdateWithoutDonoInput>
  }

  export type AnimalUncheckedUpdateManyWithoutDonoInput = {
    create?: XOR<Enumerable<AnimalCreateWithoutDonoInput>, Enumerable<AnimalUncheckedCreateWithoutDonoInput>>
    connectOrCreate?: Enumerable<AnimalCreateOrConnectWithoutDonoInput>
    upsert?: Enumerable<AnimalUpsertWithWhereUniqueWithoutDonoInput>
    connect?: Enumerable<AnimalWhereUniqueInput>
    set?: Enumerable<AnimalWhereUniqueInput>
    disconnect?: Enumerable<AnimalWhereUniqueInput>
    delete?: Enumerable<AnimalWhereUniqueInput>
    update?: Enumerable<AnimalUpdateWithWhereUniqueWithoutDonoInput>
    updateMany?: Enumerable<AnimalUpdateManyWithWhereWithoutDonoInput>
    deleteMany?: Enumerable<AnimalScalarWhereInput>
  }

  export type AdocaoUncheckedUpdateManyWithoutDonoInput = {
    create?: XOR<Enumerable<AdocaoCreateWithoutDonoInput>, Enumerable<AdocaoUncheckedCreateWithoutDonoInput>>
    connectOrCreate?: Enumerable<AdocaoCreateOrConnectWithoutDonoInput>
    upsert?: Enumerable<AdocaoUpsertWithWhereUniqueWithoutDonoInput>
    connect?: Enumerable<AdocaoWhereUniqueInput>
    set?: Enumerable<AdocaoWhereUniqueInput>
    disconnect?: Enumerable<AdocaoWhereUniqueInput>
    delete?: Enumerable<AdocaoWhereUniqueInput>
    update?: Enumerable<AdocaoUpdateWithWhereUniqueWithoutDonoInput>
    updateMany?: Enumerable<AdocaoUpdateManyWithWhereWithoutDonoInput>
    deleteMany?: Enumerable<AdocaoScalarWhereInput>
  }

  export type AnimalCreateNestedOneWithoutAdocaoInput = {
    create?: XOR<AnimalCreateWithoutAdocaoInput, AnimalUncheckedCreateWithoutAdocaoInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutAdocaoInput
    connect?: AnimalWhereUniqueInput
  }

  export type DonoCreateNestedOneWithoutAdocaoInput = {
    create?: XOR<DonoCreateWithoutAdocaoInput, DonoUncheckedCreateWithoutAdocaoInput>
    connectOrCreate?: DonoCreateOrConnectWithoutAdocaoInput
    connect?: DonoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnimalUpdateOneRequiredWithoutAdocaoInput = {
    create?: XOR<AnimalCreateWithoutAdocaoInput, AnimalUncheckedCreateWithoutAdocaoInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutAdocaoInput
    upsert?: AnimalUpsertWithoutAdocaoInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<AnimalUpdateWithoutAdocaoInput, AnimalUncheckedUpdateWithoutAdocaoInput>
  }

  export type DonoUpdateOneRequiredWithoutAdocaoInput = {
    create?: XOR<DonoCreateWithoutAdocaoInput, DonoUncheckedCreateWithoutAdocaoInput>
    connectOrCreate?: DonoCreateOrConnectWithoutAdocaoInput
    upsert?: DonoUpsertWithoutAdocaoInput
    connect?: DonoWhereUniqueInput
    update?: XOR<DonoUpdateWithoutAdocaoInput, DonoUncheckedUpdateWithoutAdocaoInput>
  }

  export type DonoCreateNestedOneWithoutAnimalsInput = {
    create?: XOR<DonoCreateWithoutAnimalsInput, DonoUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: DonoCreateOrConnectWithoutAnimalsInput
    connect?: DonoWhereUniqueInput
  }

  export type AdocaoCreateNestedOneWithoutAnimalInput = {
    create?: XOR<AdocaoCreateWithoutAnimalInput, AdocaoUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: AdocaoCreateOrConnectWithoutAnimalInput
    connect?: AdocaoWhereUniqueInput
  }

  export type AdocaoUncheckedCreateNestedOneWithoutAnimalInput = {
    create?: XOR<AdocaoCreateWithoutAnimalInput, AdocaoUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: AdocaoCreateOrConnectWithoutAnimalInput
    connect?: AdocaoWhereUniqueInput
  }

  export type DonoUpdateOneRequiredWithoutAnimalsInput = {
    create?: XOR<DonoCreateWithoutAnimalsInput, DonoUncheckedCreateWithoutAnimalsInput>
    connectOrCreate?: DonoCreateOrConnectWithoutAnimalsInput
    upsert?: DonoUpsertWithoutAnimalsInput
    connect?: DonoWhereUniqueInput
    update?: XOR<DonoUpdateWithoutAnimalsInput, DonoUncheckedUpdateWithoutAnimalsInput>
  }

  export type AdocaoUpdateOneWithoutAnimalInput = {
    create?: XOR<AdocaoCreateWithoutAnimalInput, AdocaoUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: AdocaoCreateOrConnectWithoutAnimalInput
    upsert?: AdocaoUpsertWithoutAnimalInput
    connect?: AdocaoWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<AdocaoUpdateWithoutAnimalInput, AdocaoUncheckedUpdateWithoutAnimalInput>
  }

  export type AdocaoUncheckedUpdateOneWithoutAnimalInput = {
    create?: XOR<AdocaoCreateWithoutAnimalInput, AdocaoUncheckedCreateWithoutAnimalInput>
    connectOrCreate?: AdocaoCreateOrConnectWithoutAnimalInput
    upsert?: AdocaoUpsertWithoutAnimalInput
    connect?: AdocaoWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<AdocaoUpdateWithoutAnimalInput, AdocaoUncheckedUpdateWithoutAnimalInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DonoCreateWithoutUsuarioInput = {
    dono_id?: string
    nome: string
    idade: number
    endereco: string
    telefone: string
    cidade: string
    animals?: AnimalCreateNestedManyWithoutDonoInput
    adocao?: AdocaoCreateNestedManyWithoutDonoInput
  }

  export type DonoUncheckedCreateWithoutUsuarioInput = {
    dono_id?: string
    nome: string
    idade: number
    endereco: string
    telefone: string
    cidade: string
    animals?: AnimalUncheckedCreateNestedManyWithoutDonoInput
    adocao?: AdocaoUncheckedCreateNestedManyWithoutDonoInput
  }

  export type DonoCreateOrConnectWithoutUsuarioInput = {
    where: DonoWhereUniqueInput
    create: XOR<DonoCreateWithoutUsuarioInput, DonoUncheckedCreateWithoutUsuarioInput>
  }

  export type DonoUpsertWithoutUsuarioInput = {
    update: XOR<DonoUpdateWithoutUsuarioInput, DonoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DonoCreateWithoutUsuarioInput, DonoUncheckedCreateWithoutUsuarioInput>
  }

  export type DonoUpdateWithoutUsuarioInput = {
    dono_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUpdateManyWithoutDonoInput
    adocao?: AdocaoUpdateManyWithoutDonoInput
  }

  export type DonoUncheckedUpdateWithoutUsuarioInput = {
    dono_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUncheckedUpdateManyWithoutDonoInput
    adocao?: AdocaoUncheckedUpdateManyWithoutDonoInput
  }

  export type AnimalCreateWithoutDonoInput = {
    animal_id?: string
    raca: string
    tipo: string
    nome: string
    cor: string
    adocao?: AdocaoCreateNestedOneWithoutAnimalInput
  }

  export type AnimalUncheckedCreateWithoutDonoInput = {
    animal_id?: string
    raca: string
    tipo: string
    nome: string
    cor: string
    adocao?: AdocaoUncheckedCreateNestedOneWithoutAnimalInput
  }

  export type AnimalCreateOrConnectWithoutDonoInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutDonoInput, AnimalUncheckedCreateWithoutDonoInput>
  }

  export type AdocaoCreateWithoutDonoInput = {
    id?: string
    data_adocao?: Date | string
    animal: AnimalCreateNestedOneWithoutAdocaoInput
  }

  export type AdocaoUncheckedCreateWithoutDonoInput = {
    id?: string
    data_adocao?: Date | string
    animal_id: string
  }

  export type AdocaoCreateOrConnectWithoutDonoInput = {
    where: AdocaoWhereUniqueInput
    create: XOR<AdocaoCreateWithoutDonoInput, AdocaoUncheckedCreateWithoutDonoInput>
  }

  export type UsuarioCreateWithoutDonoInput = {
    usuario_id?: string
    name: string
    email: string
    password: string
  }

  export type UsuarioUncheckedCreateWithoutDonoInput = {
    usuario_id?: string
    name: string
    email: string
    password: string
  }

  export type UsuarioCreateOrConnectWithoutDonoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDonoInput, UsuarioUncheckedCreateWithoutDonoInput>
  }

  export type AnimalUpsertWithWhereUniqueWithoutDonoInput = {
    where: AnimalWhereUniqueInput
    update: XOR<AnimalUpdateWithoutDonoInput, AnimalUncheckedUpdateWithoutDonoInput>
    create: XOR<AnimalCreateWithoutDonoInput, AnimalUncheckedCreateWithoutDonoInput>
  }

  export type AnimalUpdateWithWhereUniqueWithoutDonoInput = {
    where: AnimalWhereUniqueInput
    data: XOR<AnimalUpdateWithoutDonoInput, AnimalUncheckedUpdateWithoutDonoInput>
  }

  export type AnimalUpdateManyWithWhereWithoutDonoInput = {
    where: AnimalScalarWhereInput
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyWithoutAnimalsInput>
  }

  export type AnimalScalarWhereInput = {
    AND?: Enumerable<AnimalScalarWhereInput>
    OR?: Enumerable<AnimalScalarWhereInput>
    NOT?: Enumerable<AnimalScalarWhereInput>
    animal_id?: StringFilter | string
    raca?: StringFilter | string
    tipo?: StringFilter | string
    nome?: StringFilter | string
    cor?: StringFilter | string
    dono_id?: StringFilter | string
  }

  export type AdocaoUpsertWithWhereUniqueWithoutDonoInput = {
    where: AdocaoWhereUniqueInput
    update: XOR<AdocaoUpdateWithoutDonoInput, AdocaoUncheckedUpdateWithoutDonoInput>
    create: XOR<AdocaoCreateWithoutDonoInput, AdocaoUncheckedCreateWithoutDonoInput>
  }

  export type AdocaoUpdateWithWhereUniqueWithoutDonoInput = {
    where: AdocaoWhereUniqueInput
    data: XOR<AdocaoUpdateWithoutDonoInput, AdocaoUncheckedUpdateWithoutDonoInput>
  }

  export type AdocaoUpdateManyWithWhereWithoutDonoInput = {
    where: AdocaoScalarWhereInput
    data: XOR<AdocaoUpdateManyMutationInput, AdocaoUncheckedUpdateManyWithoutAdocaoInput>
  }

  export type AdocaoScalarWhereInput = {
    AND?: Enumerable<AdocaoScalarWhereInput>
    OR?: Enumerable<AdocaoScalarWhereInput>
    NOT?: Enumerable<AdocaoScalarWhereInput>
    id?: StringFilter | string
    data_adocao?: DateTimeFilter | Date | string
    animal_id?: StringFilter | string
    dono_id?: StringFilter | string
  }

  export type UsuarioUpsertWithoutDonoInput = {
    update: XOR<UsuarioUpdateWithoutDonoInput, UsuarioUncheckedUpdateWithoutDonoInput>
    create: XOR<UsuarioCreateWithoutDonoInput, UsuarioUncheckedCreateWithoutDonoInput>
  }

  export type UsuarioUpdateWithoutDonoInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateWithoutDonoInput = {
    usuario_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalCreateWithoutAdocaoInput = {
    animal_id?: string
    raca: string
    tipo: string
    nome: string
    cor: string
    dono: DonoCreateNestedOneWithoutAnimalsInput
  }

  export type AnimalUncheckedCreateWithoutAdocaoInput = {
    animal_id?: string
    raca: string
    tipo: string
    nome: string
    cor: string
    dono_id: string
  }

  export type AnimalCreateOrConnectWithoutAdocaoInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutAdocaoInput, AnimalUncheckedCreateWithoutAdocaoInput>
  }

  export type DonoCreateWithoutAdocaoInput = {
    dono_id?: string
    nome: string
    idade: number
    endereco: string
    telefone: string
    cidade: string
    animals?: AnimalCreateNestedManyWithoutDonoInput
    usuario: UsuarioCreateNestedOneWithoutDonoInput
  }

  export type DonoUncheckedCreateWithoutAdocaoInput = {
    dono_id?: string
    nome: string
    idade: number
    endereco: string
    telefone: string
    cidade: string
    usuario_id: string
    animals?: AnimalUncheckedCreateNestedManyWithoutDonoInput
  }

  export type DonoCreateOrConnectWithoutAdocaoInput = {
    where: DonoWhereUniqueInput
    create: XOR<DonoCreateWithoutAdocaoInput, DonoUncheckedCreateWithoutAdocaoInput>
  }

  export type AnimalUpsertWithoutAdocaoInput = {
    update: XOR<AnimalUpdateWithoutAdocaoInput, AnimalUncheckedUpdateWithoutAdocaoInput>
    create: XOR<AnimalCreateWithoutAdocaoInput, AnimalUncheckedCreateWithoutAdocaoInput>
  }

  export type AnimalUpdateWithoutAdocaoInput = {
    animal_id?: StringFieldUpdateOperationsInput | string
    raca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    dono?: DonoUpdateOneRequiredWithoutAnimalsInput
  }

  export type AnimalUncheckedUpdateWithoutAdocaoInput = {
    animal_id?: StringFieldUpdateOperationsInput | string
    raca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    dono_id?: StringFieldUpdateOperationsInput | string
  }

  export type DonoUpsertWithoutAdocaoInput = {
    update: XOR<DonoUpdateWithoutAdocaoInput, DonoUncheckedUpdateWithoutAdocaoInput>
    create: XOR<DonoCreateWithoutAdocaoInput, DonoUncheckedCreateWithoutAdocaoInput>
  }

  export type DonoUpdateWithoutAdocaoInput = {
    dono_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUpdateManyWithoutDonoInput
    usuario?: UsuarioUpdateOneRequiredWithoutDonoInput
  }

  export type DonoUncheckedUpdateWithoutAdocaoInput = {
    dono_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    animals?: AnimalUncheckedUpdateManyWithoutDonoInput
  }

  export type DonoCreateWithoutAnimalsInput = {
    dono_id?: string
    nome: string
    idade: number
    endereco: string
    telefone: string
    cidade: string
    adocao?: AdocaoCreateNestedManyWithoutDonoInput
    usuario: UsuarioCreateNestedOneWithoutDonoInput
  }

  export type DonoUncheckedCreateWithoutAnimalsInput = {
    dono_id?: string
    nome: string
    idade: number
    endereco: string
    telefone: string
    cidade: string
    usuario_id: string
    adocao?: AdocaoUncheckedCreateNestedManyWithoutDonoInput
  }

  export type DonoCreateOrConnectWithoutAnimalsInput = {
    where: DonoWhereUniqueInput
    create: XOR<DonoCreateWithoutAnimalsInput, DonoUncheckedCreateWithoutAnimalsInput>
  }

  export type AdocaoCreateWithoutAnimalInput = {
    id?: string
    data_adocao?: Date | string
    dono: DonoCreateNestedOneWithoutAdocaoInput
  }

  export type AdocaoUncheckedCreateWithoutAnimalInput = {
    id?: string
    data_adocao?: Date | string
    dono_id: string
  }

  export type AdocaoCreateOrConnectWithoutAnimalInput = {
    where: AdocaoWhereUniqueInput
    create: XOR<AdocaoCreateWithoutAnimalInput, AdocaoUncheckedCreateWithoutAnimalInput>
  }

  export type DonoUpsertWithoutAnimalsInput = {
    update: XOR<DonoUpdateWithoutAnimalsInput, DonoUncheckedUpdateWithoutAnimalsInput>
    create: XOR<DonoCreateWithoutAnimalsInput, DonoUncheckedCreateWithoutAnimalsInput>
  }

  export type DonoUpdateWithoutAnimalsInput = {
    dono_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    adocao?: AdocaoUpdateManyWithoutDonoInput
    usuario?: UsuarioUpdateOneRequiredWithoutDonoInput
  }

  export type DonoUncheckedUpdateWithoutAnimalsInput = {
    dono_id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    endereco?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    usuario_id?: StringFieldUpdateOperationsInput | string
    adocao?: AdocaoUncheckedUpdateManyWithoutDonoInput
  }

  export type AdocaoUpsertWithoutAnimalInput = {
    update: XOR<AdocaoUpdateWithoutAnimalInput, AdocaoUncheckedUpdateWithoutAnimalInput>
    create: XOR<AdocaoCreateWithoutAnimalInput, AdocaoUncheckedCreateWithoutAnimalInput>
  }

  export type AdocaoUpdateWithoutAnimalInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_adocao?: DateTimeFieldUpdateOperationsInput | Date | string
    dono?: DonoUpdateOneRequiredWithoutAdocaoInput
  }

  export type AdocaoUncheckedUpdateWithoutAnimalInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_adocao?: DateTimeFieldUpdateOperationsInput | Date | string
    dono_id?: StringFieldUpdateOperationsInput | string
  }

  export type AnimalUpdateWithoutDonoInput = {
    animal_id?: StringFieldUpdateOperationsInput | string
    raca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    adocao?: AdocaoUpdateOneWithoutAnimalInput
  }

  export type AnimalUncheckedUpdateWithoutDonoInput = {
    animal_id?: StringFieldUpdateOperationsInput | string
    raca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    adocao?: AdocaoUncheckedUpdateOneWithoutAnimalInput
  }

  export type AnimalUncheckedUpdateManyWithoutAnimalsInput = {
    animal_id?: StringFieldUpdateOperationsInput | string
    raca?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
  }

  export type AdocaoUpdateWithoutDonoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_adocao?: DateTimeFieldUpdateOperationsInput | Date | string
    animal?: AnimalUpdateOneRequiredWithoutAdocaoInput
  }

  export type AdocaoUncheckedUpdateWithoutDonoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_adocao?: DateTimeFieldUpdateOperationsInput | Date | string
    animal_id?: StringFieldUpdateOperationsInput | string
  }

  export type AdocaoUncheckedUpdateManyWithoutAdocaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_adocao?: DateTimeFieldUpdateOperationsInput | Date | string
    animal_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}