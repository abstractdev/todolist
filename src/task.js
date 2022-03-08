class Task {
    constructor (id, title, project = 'default', description, dueDate, priority, notes, complete = false) {
        this._id = id
        this._title = title
        this._project = project
        this._description = description
        this._dueDate = dueDate
        this._priority = priority
        this._notes = notes
        this._complete = complete
    }

    get id() {
        return this._id
    }
    set id(userid) {
        this._id = userid
    }

    get title() {
        return this._title
    }
    set title(userTitle) {
        this._title = userTitle
    }
    get project() {
        return this._project
    }
    set project(userProject) {
        this._project = userProject
    }
    get description() {
        return this._description
    }
    set description(userDescription) {
        this._description = userDescription
    }
    get dueDate() {
        return this._dueDate
    }
    set dueDate(userDueDate) {
        this._dueDate = userDueDate
    }
    get priority() {
        return this._priority
    }
    set priority(userPriority) {
        this._priority = userPriority
    }
    get notes() {
        return this._notes
    }
    set notes(userNotes) {
        this._notes = userNotes
    }
    get complete() {
        return this._complete
    }
    set complete(input) {
        this._complete = input
    }

}

export {Task}