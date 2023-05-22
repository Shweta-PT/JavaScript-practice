const cookie = {
    name: "butter cookie",
    isGlutenFree: false,
    shape: "round",
};
console.log(cookie);

class Cookie {
    constructor(name, isGlutenFree) {
        this.name=name;
        this.isGlutenFree=isGlutenFree;
    } 
}
const myCookie = new Cookie("red velvet",false);
console.log(myCookie);
