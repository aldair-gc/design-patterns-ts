import { RemoteControl } from "./remote-control/remote-control";
import { RemoteControlWithVolume } from "./remote-control/remote-control-with-volume";
import { Tv } from "./device/tv";
import { Radio } from "./device/radio";

function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void {
  abstraction.togglePower();

  // Type Guard
  if (!("volumeUp" in abstraction)) return;
  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeDown();
  abstraction.volumeDown();
}

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControlWithVolume(radio);
clientCode(radioRemoteControl);
const tvRemoteControl = new RemoteControl(tv);
clientCode(tvRemoteControl);
