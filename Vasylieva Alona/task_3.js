db.users.updateMany(
  {
    country: "China",
    is_blocked: true,
  },
  {
    $unset: { is_blocked: null },
    $inc: { balance: 50 }
  }
);


