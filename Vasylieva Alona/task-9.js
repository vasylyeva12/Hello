db.users.updateMany(
  {
    country: { $ne: "France" },
    is_blocked: { $ne: true },
    balance: { $lt: 0 },
  },
  {
    $mul: { balance: 1.155 },
  }
);
