function list() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.find = find;
  this.append = append;
  this.remove = remove;
  this.toString = toString;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
  this.listSize + 1;
}

function find(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

function remove(element) {
  let elementexist = this.find(element);
  if (elementexist > -1) {
    this.dataStore.splice(elementexist, 1);
    --this.listSize;
    return true
  }
  return false
}

function toString() {
  return this.dataStore;
}

const newList = new list();
newList.append(1);
newList.append(2);
newList.append(3);
newList.remove(2)
console.log(newList.toString());
console.log(newList.listSize);
