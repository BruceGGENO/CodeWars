function setAlarm(employed, vacation) {
    return vacation === true || employed === false ? false : true
}