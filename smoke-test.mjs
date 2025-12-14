import { execSync } from "node:child_process";
import { ethers } from "ethers";

function run(cmd) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

console.log("Node:", process.version);
console.log("Ethers:", ethers.version);


run("npm run build");


const rpc = process.env.RPC_URL || "https://rpc.ankr.com/eth";
const provider = new ethers.JsonRpcProvider(rpc);

const block = await provider.getBlockNumber();
console.log("RPC OK. Latest block:", block);

console.log("\n✅ SMOKE TEST PASSED");
