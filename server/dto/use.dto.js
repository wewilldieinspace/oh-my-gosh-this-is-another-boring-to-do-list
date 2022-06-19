module.exports = class UserDto {
  username;

  id;

  constructor(model) {
    this.username = model.name;
    this.id = model.id;
  }
};
