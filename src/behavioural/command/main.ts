import { LightIntensityCommand } from "./light-intensity-command";
import { LightPowerCommand } from "./light-power-command";
import { SmartHouseApp } from "./smart-house-app";
import { SmartHouseLight } from "./smart-house-light";

// Receiver
const bedroomLight = new SmartHouseLight("Bedroom Light");
const bathroomLight = new SmartHouseLight("Bathroom Light");

// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomIntensityCommand = new LightIntensityCommand(bedroomLight);

// Controller - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand("bedroom-light-001", bedroomLightPowerCommand);
smartHouseApp.addCommand("bathroom-light-001", bathroomLightPowerCommand);
smartHouseApp.addCommand("bedroom-light-intensity", bedroomIntensityCommand);

smartHouseApp.executeCommand("bedroom-light-001");
for (let i = 0; i < 3; i++) smartHouseApp.executeCommand("bedroom-light-intensity");
for (let i = 0; i < 2; i++) smartHouseApp.undoCommand("bedroom-light-intensity");
smartHouseApp.undoCommand("bedroom-light-001");
smartHouseApp.executeCommand("bathroom-light-001");
smartHouseApp.undoCommand("bathroom-light-001");
