// Import stylesheets
import './style.css';
import { Car } from './vehicle/car';
import { CarFactory } from './factories/car-factory';
import { BicycleFactory } from './factories/bicycle-factory';

// Write TypeScript code!

const customerNames = ['Ana', 'Joana', 'Helena', 'João'];

const carFactory = new CarFactory();
const bicycleFactory = new BicycleFactory();
const car1 = carFactory.getVehicle('Fusca');
const car2 = carFactory.getVehicle('Celta Preto');
const bicycle = bicycleFactory.getVehicle('Bicycle');

car1.pickUp('Rafael');
car1.stop();

bicycle.pickUp('Julia');
bicycle.stop();
