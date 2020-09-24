// eslint-disable-next-line no-undef
type UserModel = import('../models').Users;

declare namespace Express {
  export interface User extends UserModel {}
}
