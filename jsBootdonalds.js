let productos = {
    menus: {
        'Grand Big Boot': 8.5,
        'Big Boot': 8,
        'BootPollo': 7.50,
        'Cuarto de libra': 7,
        'BootRoyal Deluxe': 7
    },
    burgers: {
        'Grand Big Boot': 6,
        'Big Boot': 5.5,
        'BootPollo': 5,
        'Cuarto de libra': 4.5,
        'BootRoyal Deluxe': 4.5
    },
    drinks: {
        'CocaCola': 2,
        'Fanta': 2,
        'Agua': 1,
        'Cerveza': 2.5
    },
    fries: 1,
};

let pedidoArray = [];

function firstMenu() {
    let firstOption = parseInt(prompt("Escoje una opcion:\n1.Menu\n2.Hamburguesa\n3.Bebida\n4.Salir"));
    do {
        switch (firstOption) {
            case 1:
                menuOption();
                break;
            case 2:
                burguerOption();
                break;
            case 3:
                drinkOption();
                break;
            case 4:
                exit();
                break;

            default:
                break;
        }
    } while (firstOption > 4)
}

function menuOption() {
    let selectedMenu;
    let error;
    do {
        error = false;
        selectedMenu = prompt("Escoge un menú:\nGrand Big Boot\nBigBoot\nBootPollo\nCuarto de libra\nBootRoyal Deluxe")
        if (productos.menus[selectedMenu]) {
            console.log("Ha elegido el menú " + selectedMenu);
            pedidoArray.push({ name: selectedMenu, price: productos.menus[selectedMenu] })
        } else {
            console.log("Menú no reconocido. Introduce uno válido");
            error = true;
        }
    } while (error)

    let selectedBebida;

    do {
        error = false;
        selectedBebida = prompt("Escoge una bebida:\nCocaCola\nAgua\nFanta\nCerveza")
        if (productos.drinks[selectedBebida]) {
            console.log("Con la bebida " + selectedBebida);
            pedidoArray.push({ name: selectedBebida, price: 0 })
        } else {
            console.log("Bebida no reconocida. Introduce una válida");
            error = true;
        }
    } while (error)

    let fries;

    do {
        error = false;
        fries = prompt("¿Patatas?\n Si\n No")
        if (fries == "Si") {
            console.log("Con patatas fritas");
            pedidoArray.push({ name: "fries", price: 0 })
        } else {
            console.log("Patatas no reconocidas. Introduce unas válidas");
            error = true;
        }
    } while (error)

    for (let i = 0; i < pedidoArray.length; i++) {
        console.log(pedidoArray[i].name);

    }
    console.log("Te ha costado " + pedidoArray[0].price + "€");
    pedidoArray = []
}

function burguerOption() {
    let selectedBurguer;
    let error;
    do {
        error = false;
        selectedBurguer = prompt("Escoge una hamburguesa:\nGrand Big Boot\nBigBoot\nBootPollo\nCuarto de libra\nBootRoyal Deluxe")
        if (productos.burgers[selectedBurguer]) {
            console.log("Ha elegido la hamburguesa " + selectedBurguer);
            pedidoArray.push({ name: selectedBurguer, price: productos.burgers[selectedBurguer] })
        } else {
            console.log("Hamburguesa no reconocida. Introduce una válida");
            error = true;
        }
    } while (error)

    let fries;

    do {
        error = false;
        fries = prompt("¿Patatas?\n Si\n No")
        if (fries == "Si") {
            console.log("Con patatas fritas");
            pedidoArray.push({ name: "fries", price: 0 })
        } else {
            console.log("Patatas no reconocidas. Introduce unas válidas");
            error = true;
        }
    } while (error)

    for (let i = 0; i < pedidoArray.length; i++) {
        console.log(pedidoArray[i].name);

    }
    console.log("Te ha costado " + pedidoArray[0].price + "€");
    pedidoArray = []
}

function drinkOption() {
    let selectedBebida;

    do {
        error = false;
        selectedBebida = prompt("Escoge una bebida:\nCocaCola\nAgua\nFanta\nCerveza")
        if (productos.drinks[selectedBebida]) {
            console.log("Con la bebida " + selectedBebida);
            pedidoArray.push({ name: selectedBebida, price: 0 })
        } else {
            console.log("Bebida no reconocida. Introduce una válida");
            error = true;
        }
    } while (error)

    for (let i = 0; i < pedidoArray.length; i++) {
        console.log(pedidoArray[i].name);

    }
    console.log("Te ha costado " + pedidoArray[0].price + "€");
    pedidoArray = []
}

function friesOption() {
    let fries;

    do {
        error = false;
        fries = prompt("¿Patatas?\n Si\n No")
        if (fries == "Si") {
            console.log("Con patatas fritas");
            pedidoArray.push({ name: "fries", price: 0 })
        } else {
            console.log("Patatas no reconocidas. Introduce unas válidas");
            error = true;
        }
    } while (error)

    for (let i = 0; i < pedidoArray.length; i++) {
        console.log(pedidoArray[i].name);

    }
    console.log("Te ha costado " + pedidoArray[0].price + "€");
    pedidoArray = []
}

function exit() {
    console.log("Gracias por venir, que tenga buen dia!");
}

firstMenu()