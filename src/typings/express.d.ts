// eslint-disable-next-line no-undef
type UserModel = import('../models').Users;

declare namespace Express {
  interface User extends UserModel {}
  interface Request {
    user?: User;
  }
}
