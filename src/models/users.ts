import { BaseUser } from '@tygr/auth-server';
import * as Sequelize from 'sequelize';
import type { PushSubscriptions } from './push-subscriptions';

export interface User extends BaseUser {
  createdAt?: string;
  updatedAt?: string;
}

export class Users extends Sequelize.Model {
  public static sanitize(user: User) {
    return {
      id: user.id,
      email: user.email,
      provider: user.provider,
    };
  }

  public static async findByEmail(email: string) {
    return Users.findOne({ where: { email } }).then((u) =>
      u ? u.toJSON() : null
    ) as Promise<User>;
  }

  public static async findAndUpdate(user: User) {
    return Users.update(user, { where: { email: user.email } });
  }

  public static async findAndDestroy({ email }: User) {
    return Users.destroy({ where: { email } });
  }

  public id!: string;

  public getPushSubscriptions!: (
    options?: Sequelize.FindOptions
  ) => Promise<PushSubscriptions[]>;
}

const definition = {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  provider: {
    type: Sequelize.STRING,
    allowNull: true,
  },
};

export default (sequelize: Sequelize.Sequelize) => {
  Users.init(definition, { sequelize, modelName: 'users' });
};
