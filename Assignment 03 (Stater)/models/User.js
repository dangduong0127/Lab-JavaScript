"use strict";
// Khởi tạo class User
class User {
  constructor(
    firstName,
    lastName,
    username,
    password,
    pageSize = 6,
    category = "Business"
  ) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.username = username),
      (this.password = password),
      (this.pageSize = pageSize),
      (this.category = category);
  }
}
// Khởi tạo class Task
class Task {
  constructor(task, owner, isDone) {
    (this.task = task), (this.owner = owner), (this.isDone = isDone);
  }
}
