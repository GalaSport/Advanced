function extensibleObject() {
    let parent = {};
    let childObject = Object.create(parent);
    childObject.extend = function (obj) {
        let objAsArray = Object.entries(obj);
        for (let [key, value] of objAsArray) {
            if (typeof (value) == "function") {
                parent[key] = value;
            } else {
                childObject[key] = value;
            }
        }
    }
    return childObject;
}
const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template); 