class Car {
  driving() {
    console.log("driving a car");
  }
}

class truck {
  truckhorn() {
    console.log("truck is horning");
  }
  driving() {
    console.log("driving a truck");
  }
}

type vehicle = Car | truck;
const v1 = new Car();
function drivingacar(vehicle: vehicle) {
  vehicle.driving();
  if (vehicle instanceof truck) {
    vehicle.truckhorn();
  }
}

drivingacar(v1);
