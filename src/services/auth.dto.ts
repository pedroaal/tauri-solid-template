export interface IUser {
  id: string
  email: string
  role: string
}

export interface IAuthResponse {
  user: IUser
  session: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    access_token: string
    // eslint-disable-next-line @typescript-eslint/naming-convention
    refresh_token: string
  }
}

export interface ISession {
  accessToken: string
  refreshToken: string
}

export interface IAuth {
  user: IUser
  session: ISession
}

export const authDto = (data: IAuthResponse): IAuth => ({
  user: data.user,
  session: {
    accessToken: data.session.access_token,
    refreshToken: data.session.refresh_token,
  },
})
