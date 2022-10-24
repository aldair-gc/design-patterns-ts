import { SystemUserProxy } from "./system-user/system-user-proxy";

const user = new SystemUserProxy("Aldair", "aldairgc");

async function clientCode(): Promise<void> {
  console.log("Wait 2 seconds.");
  console.log(await user.getAdressess());

  for (let i = 0; i < 5; i++) {
    console.log(`Repeat ${i + 1} of 5 (cache):`);
    console.log(await user.getAdressess());
  }
}

clientCode();
