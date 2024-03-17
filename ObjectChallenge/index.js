const obj1 = {
    title: "Title1",
    author: "Author1",
    status: {
        own: true,
        reading: false,
        read: false,
    }
}

const obj2 = {
    title: "Title2",
    author: "Author2",
    status: {
        own: true,
        reading: false,
        read: false,
    }
}

const obj3 = {
    title: "Title3",
    author: "Author3",
    status: {
        own: true,
        reading: false,
        read: false,
    }
}

const library = [obj1, obj2, obj3];

obj1.status.read = true;

library[1].status.read = true;

obj3.status.read = true;

console.log(library);

const { title : firstBook } = library[0];

console.log(firstBook);

const str = JSON.stringify(library);

console.log(str);