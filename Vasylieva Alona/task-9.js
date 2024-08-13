db.users.updateMany(
  {
    country: { $ne: "China" },
    is_blocked: { $ne: true },
    balance: { $gt: 0 },
  },
  {
    $mul: { balance: 1.155 },
  }
);
