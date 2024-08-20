// Задача. Вывести общее ко-во клиентов из France (предложить несколько вариантов)

db.users.countDocuments({ country: "France" });

db.users.find({ country: "France" }).count();

db.users.aggregate([
  { $match: { country: "France" } },
  { $count: "total_users" },
]);
