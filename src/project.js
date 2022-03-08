class Project {
  constructor(id, title = "Default") {
    this._id = id
    this._title = title
    this._array = []
  }
  get id() {
    return this._id;
  }
  set id(userid) {
    this._id = userid;
  }
  get title() {
    return this._title;
  }
  set title(userTitle) {
    this._title = userTitle;
  }
  get array() {
    return this._array;
  }
  set array(userArray) {
    this._array = userArray
  }

}

export {Project}