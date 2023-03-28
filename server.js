const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req,res){
    const items = [
        { 
            title: "D",
            message: "amos muito amor e carinho"
        },
        { 
            title: "E",
            message: "stamos sempre com você"
        },
        { 
            title: "M",
            message: "uita energia pra brincar"
        },
        { 
            title: "A",
            message: "legria da casa, entendemos qualquer idioma"
        },
        { 
            title: "I",
            message: "ndependente de classe social, credo ou cor "
        },
        { 
            title: "S",
            message: "eu verdadeiro amigo(a)"
        },
    ];

    const subtitle = "Estamos sempre prontos"
    res.render("pages/index",{
        infos: items,
        subtitle:subtitle,
    });
}) 

app.get("/sobre", function (req,res){

    const animals = [
            {
                name: "Torrada",
                especie: "Canina",
                raca: "Poodle",
                paws: "🐾"
            },
            {
                name: "Shrek",
                especie: "Ave",
                raca: "Periquito",
                paws: "🦜"
            },
            {
                name: "Mei",
                especie: "Canina",
                raca: "Yorkshire",
                paws: "🐾"
            },   
        ];
    res.render("pages/about", {
        animals: animals
    });
})

app.get("/Contato", function (req,res){

    const contacts = [
        {
            name: "Torrada",
            tel: "1234-5678"
        },
        {
            name: "Shrek",
            tel: "4567-6677"
        },
        {
            name: "Mei",
            tel: "9876-5432"
        },   
    ];
    res.render("pages/contact", {
        contacts: contacts
    });
   
})

app.listen(8080);
console.log("Rodando na porta localhost:8080");