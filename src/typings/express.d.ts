type UserModel = import('../models').Users;

declare namespace Express {
  export interface User extends UserModel {}
}
