import { resolve } from "path";
import { CustomerDataParserJson } from "./customer-data-parser-json";
import { CustomerDataParserTxt } from "./customer-data-parser-txt";

async function run() {
  const txtFilePath = resolve(__dirname, "files", "customer.txt");
  const customerDataParserTxt = new CustomerDataParserTxt(txtFilePath);
  await customerDataParserTxt.fixCustomerData();
  console.log(customerDataParserTxt.customerData);

  const jsonFilePath = resolve(__dirname, "files", "customer.json");
  const customerDataParserJson = new CustomerDataParserJson(jsonFilePath);
  await customerDataParserJson.fixCustomerData();
  console.log(customerDataParserJson.customerData);
}

run();
