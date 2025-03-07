function submit() {
    console.log("Hello World");
    var name = document .getElementsByName("name").item(0).value;
    var message = document .getElementsByName("message").item(0).value;
    console.log(name);
    console.log(message);
    alert("Hello " + name + "! You said: " + message);
    document.getElementById("message").innerHTML = message;
}

function createNav() {
    var nav = '<a href="/">Home</a>';
    nav+='|<a href="/newpage/">My New Page</a>';
    nav+='|<a href="/more/">More Pages</a>';
    document.getElementById("topnav").innerHTML = nav;
}

document.addEventListener("DOMContentLoaded", () => {
    createNav();
});

class anchor {
    constructor(name, url) {
        this.name = url;
        this.url = this.url;
    }
    toHTML() {
        return '<a href="' + this.url + '">' + this.name + '</a>';
    }
}