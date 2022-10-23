import { RemoteControl } from "./remote-control";

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const volume = this.device.getVolume();
    this.device.setVolume(volume + 1);
    console.log(`Volume of device ${this.device.getName()} changed from ${volume} to ${this.device.getVolume()}.`);
  }
  volumeDown(): void {
    const volume = this.device.getVolume();
    this.device.setVolume(volume - 1);
    console.log(`Volume of device ${this.device.getName()} changed from ${volume} to ${this.device.getVolume()}.`);
  }
}
