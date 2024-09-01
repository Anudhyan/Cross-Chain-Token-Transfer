async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const PolygonAmoyToken = await ethers.getContractFactory("PolygonAmoyToken");
  const polygonAmoyToken = await PolygonAmoyToken.deploy();
  console.log("PolygonAmoyToken deployed to:", polygonAmoyToken.address);

  const PolygonCardonaToken = await ethers.getContractFactory("PolygonCardonaToken");
  const polygonCardonaToken = await PolygonCardonaToken.deploy();
  console.log("PolygonCardonaToken deployed to:", polygonCardonaToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
