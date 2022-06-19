export interface UserType {
  username: string,
  id: string,
}

export interface AuthResponseType {
  accessToken: string,
  refreshToken: string,
  user: UserType,
}
