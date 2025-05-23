// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v6.30.1
// source: proto/auth.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "auth";

export interface LoginResponseDto {
  user: User | undefined;
  tokens: Tokens | undefined;
}

export interface Payload {
  email: string;
  sub: Sub | undefined;
}

export interface Sub {
  userId: string;
}

export interface EmailDto {
  email: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
}

export interface LoginOauthDto {
  email: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refreshToken?: string | undefined;
  accessToken?: string | undefined;
  expiresAt?: number | undefined;
  tokenType?: string | undefined;
  scope?: string | undefined;
  idToken?: string | undefined;
  sessionState?: string | undefined;
  image: string;
  name: string;
}

/** Empty message for methods that require no input */
export interface Empty {
}

/** User Model */
export interface User {
  id?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
  emailVerified?: string | undefined;
  image?: string | undefined;
  hashedPassword?: string | undefined;
  favoriteIds: number[];
  createdAt?:
    | string
    | undefined;
  /** repeated Account accounts = 10;   // User can have multiple accounts */
  updatedAt?: string | undefined;
}

/** DTOs for User */
export interface CreateUserDto {
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refreshToken?: string | undefined;
  accessToken?: string | undefined;
  expiresAt?: number | undefined;
  tokenType?: string | undefined;
  scope?: string | undefined;
  idToken?: string | undefined;
  sessionState?: string | undefined;
  email: string;
  password: string;
  name: string;
}

export interface UpdateUserDto {
  id: string;
  name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  image?: string | undefined;
  favoriteIds: number[];
  /** repeated string favoriteIds = 5; */
  isEmptyFavoriteIds?: boolean | undefined;
}

export interface FindOneUserDto {
  id: string;
}

export interface RemoveUserDto {
  id: string;
}

export interface RegisterDto {
  email: string;
  name: string;
  password: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface Users {
  users: User[];
}

/** Account Model */
export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refreshToken?: string | undefined;
  accessToken?: string | undefined;
  expiresAt?: number | undefined;
  tokenType?: string | undefined;
  scope?: string | undefined;
  idToken?: string | undefined;
  sessionState?: string | undefined;
}

/** DTOs for Account */
export interface CreateAccountDto {
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refreshToken?: string | undefined;
  accessToken?: string | undefined;
  expiresAt?: number | undefined;
  tokenType?: string | undefined;
  scope?: string | undefined;
  idToken?: string | undefined;
  sessionState?: string | undefined;
}

export interface AccountIdRequest {
  id: string;
}

export interface UserIdRequest {
  userId: string;
}

export interface Accounts {
  accounts: Account[];
}

export const AUTH_PACKAGE_NAME = "auth";

export interface UserServiceClient {
  createUser(request: CreateUserDto): Observable<User>;

  findAllUsers(request: Empty): Observable<Users>;

  findOneUser(request: FindOneUserDto): Observable<User>;

  updateUser(request: UpdateUserDto): Observable<User>;

  removeUser(request: RemoveUserDto): Observable<User>;

  findUserByEmail(request: EmailDto): Observable<User>;
}

export interface UserServiceController {
  createUser(request: CreateUserDto): Promise<User> | Observable<User> | User;

  findAllUsers(request: Empty): Promise<Users> | Observable<Users> | Users;

  findOneUser(request: FindOneUserDto): Promise<User> | Observable<User> | User;

  updateUser(request: UpdateUserDto): Promise<User> | Observable<User> | User;

  removeUser(request: RemoveUserDto): Promise<User> | Observable<User> | User;

  findUserByEmail(request: EmailDto): Promise<User> | Observable<User> | User;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "createUser",
      "findAllUsers",
      "findOneUser",
      "updateUser",
      "removeUser",
      "findUserByEmail",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";

export interface AuthServiceClient {
  login(request: LoginDto): Observable<LoginResponseDto>;

  register(request: RegisterDto): Observable<User>;

  loginWithOauth(request: LoginOauthDto): Observable<LoginResponseDto>;

  refreshToken(request: Payload): Observable<Tokens>;
}

export interface AuthServiceController {
  login(request: LoginDto): Promise<LoginResponseDto> | Observable<LoginResponseDto> | LoginResponseDto;

  register(request: RegisterDto): Promise<User> | Observable<User> | User;

  loginWithOauth(request: LoginOauthDto): Promise<LoginResponseDto> | Observable<LoginResponseDto> | LoginResponseDto;

  refreshToken(request: Payload): Promise<Tokens> | Observable<Tokens> | Tokens;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["login", "register", "loginWithOauth", "refreshToken"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_SERVICE_NAME = "AuthService";

export interface AccountServiceClient {
  findAccountById(request: AccountIdRequest): Observable<Account>;

  findAccountsByUserId(request: UserIdRequest): Observable<Accounts>;

  createAccount(request: CreateAccountDto): Observable<Account>;

  deleteAccount(request: AccountIdRequest): Observable<Empty>;
}

export interface AccountServiceController {
  findAccountById(request: AccountIdRequest): Promise<Account> | Observable<Account> | Account;

  findAccountsByUserId(request: UserIdRequest): Promise<Accounts> | Observable<Accounts> | Accounts;

  createAccount(request: CreateAccountDto): Promise<Account> | Observable<Account> | Account;

  deleteAccount(request: AccountIdRequest): Promise<Empty> | Observable<Empty> | Empty;
}

export function AccountServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findAccountById", "findAccountsByUserId", "createAccount", "deleteAccount"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AccountService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AccountService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const ACCOUNT_SERVICE_NAME = "AccountService";
