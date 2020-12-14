import * as Sequelize from 'sequelize';

export interface Invoice {
  id: string;
  approved: boolean;
  workCompleted: boolean;
  quoteDate: Date;
  approvalDate: Date;
  invoiceDate: Date;
  dueDate: Date;
  memo: string;
  description: string;
  items?: {
    description: string;
    category: string;
    workCompleted?: Date;
    amount: number;
  }[];
  total: number;
  clientId: string;
  projectId: string;
}

export class Invoices extends Sequelize.Model<Invoice> {}

const definition = {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  approved: {
    type: Sequelize.BOOLEAN,
    default: false,
  },
  workCompleted: {
    type: Sequelize.BOOLEAN,
    default: false,
  },
  quoteDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  approvalDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  invoiceDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  dueDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  memo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  total: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  clientId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  projectId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
};

export default (sequelize: Sequelize.Sequelize) => {
  Invoices.init(definition, { sequelize, modelName: 'users' });
};
