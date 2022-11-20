class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[],
  ) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn = (): void => {
    console.log(`Tv ${this._brand} ${this._size}" is on!
  Resolution: ${this._resolution}
  Available connections: ${this._connections}`);
  };

  get connectedTo() {
    if (this._connectedTo) return this._connectedTo;
    return 'The TV is not connected';
  }

  set connectedTo(connection: string) {
    if (this._connections.includes(connection)) {
      this._connectedTo = connection;
    } else {
      console.log('Unavailable connection port');
    }
  }
}

const tv = new Tv('Samsung', 40, '1080p', ['HDMI', 'VGA', 'AVI', 'Bluetooth']);
tv.turnOn();
tv.connectedTo = 'HDMI';
console.log(tv.connectedTo);
