class Car {
    constructor(){}
    
    honk() {
        console.log("Honk")
    } 
}

class Mazda extends Car {
    constructor() {
        super()
    }

    honk() {
        console.log("zoom zoom")
    }
}

class F150 extends Car {
    constructor() {
        super()
    }

    honk() {
        super.honk()
        console.log("Merica")
    }
}

class Hyundai extends Car {
    constructor() {
        super()
    }
}


const traffic = (cars) => {
    cars.forEach( (car) => {
        car.honk();
    });
}

let truck = new F150()
let myCar = new Mazda()
let daisyCar = new Hyundai()

traffic([truck,myCar, daisyCar])
