// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json()); // middleware
// const PATH = "/posts";
let id = 1;

// TODO: your code to handle requests
server.post("/posts", (req, res) => {
    const {author, title, contents} = req.body;
    // let author = req.body.author;
    // console.log(author, title, contents);
    if (!author || !title || !contents) {
        return res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"});
    }

    const post = {
        author, title, contents, id: id++
    };
    posts.push(post);
    res.status(200).json(post);
    // .json => content type json
    // .send => content type text
});

server.post("/posts/author/:author", (req, res) => {
    // let author = req.params.author;
    console.log(req.body);
    let {author} = req.params;
    let {title, contents} = req.body;

    if (!author || !title || !contents) {
        return res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"});
    }

    const post = {
        author, title, contents, id: id++
    };
    console.log("muestra: ", post);
    posts.push(post);
    console.log("pusheado: ", posts);
    res.status(200).json(post);
});

server.get("/posts", (req, res) => {
    let { term } = req.query; // /posts?term=qwerty
    // si !term por query => term = undefined
    console.log(term);
    if (term) {
        const termPosts = posts.filter((p) => p.title.includes(term) || p.contents.includes(term));
        console.log(termPosts);
        return res.json(termPosts);
    }
    res.json(posts); // por default manda status 200
});

server.get("/posts/:author", (req, res) => {
    let { author } = req.params;
    // devuelvo un nuevo arreglo que coincida con author 
    const postAuthor = posts.filter(p => p.author === author);
    if (postAuthor.length > 0) {
        res.json(postAuthor);
    } else {
        return res.status(STATUS_USER_ERROR).json({error: "No existe ningun post del autor indicado"});
    }
});

server.get("/posts/:author/:title", (req, res) => {
    let { author, title } = req.params;

    if (author && title) {
        const newPosts = posts.filter(p => p.author === author && p.title === title);
        if (newPosts.length > 0) {
            res.json(newPosts);
        } else {
            res.status(STATUS_USER_ERROR).json({error: "No existe ningun post con dicho titulo y autor indicado"});
        }
    } else {
        res.status(STATUS_USER_ERROR).json({error: "No existe ningun post con dicho titulo y autor indicado"});
    }
});

server.put("/posts", (req, res) => {
    let { id, title, contents } = req.body;
    if (id && title && contents) {
        // find => devuelve el primer element que coincida
        // como el id es unico, deberia de encontrar un unico element con el id pasado por body
        console.log(id, title, contents);
        let post = posts.find(p => p.id === parseInt(id)); // parseInt cuando uso req.query o req.params
        if (post) {
            post.title = title;
            post.contents = contents;
            res.json(post);
        } else {
            res.status(STATUS_USER_ERROR).json({error: "No se encuentra el ID necesario"});
        }
    } else {
        res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para modificar el Post"});
    }
});

// const posts = [] ==> let posts = [] // para modificar posts
server.delete("/posts", (req, res) => {
    let { id } = req.body;

    const post = posts.find((p) => p.id === parseInt(id));
    if (!id || !post) {
        return res.status(STATUS_USER_ERROR).json({error: "Mensaje de error"});
    }

    posts = posts.filter(p => p.id !== parseInt(id));
    res.json({ success: true });
});

server.delete("/author", (req, res) => {
    let { author } = req.body;

    const authorFound = posts.find(p => p.author === author);
    if (!author || !authorFound) {
        return res.status(STATUS_USER_ERROR).json({error: "No existe el autor indicado"});
    }

    let deleteAuthor = [];
    // option 1:
    // deleteAuthor = posts.filter(p => p.author === author);
    // posts = posts.filter(p => p.author !== author);
    // option 2:
    posts = posts.filter(p => {
        if (p.author !== author) {
            return true;
        } else {
            deleteAuthor.push(p);
        }
    });

    return res.json(deleteAuthor);
})

module.exports = { posts, server };
