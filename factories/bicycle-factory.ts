import { VehicleFactory } from './vehicle-factory';
import { Vehicle } from '../vehicle/vehicle';
import { Bicycle } from "../";

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}