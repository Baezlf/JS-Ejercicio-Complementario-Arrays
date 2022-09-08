class Mangas{
    constructor (id, nombre, autor, tomos, precio){
        this.id = id;
        this.nombre = nombre;
        this.autor = autor;
        this.tomos = tomos;
        this.precio = precio;
    }
};

const manga = [
    new Mangas(1, "Shaman king", "Hiroyuki Takei", 17, 1550),
    new Mangas(2, "Chainsaw man", "Tatsuki Fujimoto", 11, 750),
    new Mangas(3, "Berserk", "Kentaro Miura", 41, 1100),
    new Mangas(4, "Mushihime", "Masaya Hokazono", 3, 850)
];

let mostrarLista = () => {
    let titulos = manga.map(item => item.nombre).join("\n");
    alert(titulos)
};

let validar = (a) => {while(a !== "si" && a !== "no"){
    a = prompt(`Opcion incorrecta.
    Desea cargar mangas a la base de datos? (si / no)`).toLowerCase();
    }
    return a;
}

mostrarLista();

let opcion = prompt(`Desea cargar mangas a la base de datos? (si / no)`);
opcion = validar(opcion);

while (opcion === "si"){
    let num = manga.length;
    manga.push(
        new Mangas(
            num++,
            prompt(`Indique el nombre del manga`), 
            prompt(`Indique el autor del manga`),
            parseInt(prompt(`Indique la cantidad de tomos`)),
            parseInt(prompt(`Idique el precio unitario`))
        )
    )
    opcion = prompt(`Desea continuar cargando mangas a la base de datos? (si / no)`)
    opcion = validar(opcion);
}

mostrarLista();