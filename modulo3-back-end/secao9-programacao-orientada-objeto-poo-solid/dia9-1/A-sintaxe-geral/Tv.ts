class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[],
  ) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn = (): void => {
    console.log(`Tv ${this.brand} ${this.size}" is on!
  Resolution: ${this.resolution}
  Available connections: ${this.connections}`);
  };
}

const tv = new Tv('Samsung', 40, '1080p', ['HDMI', 'VGA', 'AVI', 'Bluetooth']);
tv.turnOn();
