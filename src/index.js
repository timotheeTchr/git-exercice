function addFactory(valueToAdd) {
    return function (value) {
        return valueToAdd + value;
    }
}


const fnAdd2 = addFactory(2);
const fnAdd5 = addFactory(5);
const fnAdd10 = addFactory(10);

console.log("wazaaa");
console.log("wazaaaaaaaaaaa");
console.log("wazaaaaaaaaaaaaaaaaaaaaaaaaaa");
