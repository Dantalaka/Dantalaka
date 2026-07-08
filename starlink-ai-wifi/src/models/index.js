const User = require('./User');
const Plan = require('./Plan');
const Subscription = require('./Subscription');
const WifiAccount = require('./WifiAccount');
const Transaction = require('./Transaction');
const ChatMessage = require('./ChatMessage');

// User relationships
User.hasMany(Subscription, { foreignKey: 'userId', as: 'subscriptions' });
Subscription.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(WifiAccount, { foreignKey: 'userId', as: 'wifiAccounts' });
WifiAccount.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(Transaction, { foreignKey: 'userId', as: 'transactions' });
Transaction.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(ChatMessage, { foreignKey: 'userId', as: 'messages' });
ChatMessage.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Plan relationships
Plan.hasMany(Subscription, { foreignKey: 'planId', as: 'subscriptions' });
Subscription.belongsTo(Plan, { foreignKey: 'planId', as: 'plan' });

// Subscription relationships
Subscription.hasMany(Transaction, { foreignKey: 'subscriptionId' });
Transaction.belongsTo(Subscription, { foreignKey: 'subscriptionId' });

module.exports = {
  User,
  Plan,
  Subscription,
  WifiAccount,
  Transaction,
  ChatMessage,
};
