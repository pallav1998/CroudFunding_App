import { useEffect, useState } from "react";
import { factoryABI } from "../Factory";
import { fundABI } from "../FundABI";
import { ethers } from "ethers";
import NavBar from "./NavBar";
import CircularProgress from "@mui/material/CircularProgress";
import AuthenticationSVG from "../login.svg";
import DashBoard from "../DashBoard1.png";
import FundDetails from "./FundDetails";
import FormModal from "./FormModal";

function App() {
  const [Address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const factoryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

  async function ConnectWallet() {
    if (window.ethereum) {
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log("signer:", await signer.getAddress());
      setAddress(await signer.getAddress());
    } else {
      alert("No ETH Browser Exension Detected");
    }
  }

  function DisconnectWallet() {
    setAddress("");
  }

  async function CreateFund(formData) {
    const { Target, Deadline, Description, Image } = formData;
    if (window.ethereum) {
      const signer = await provider.getSigner();
      await provider.send("eth_requestAccounts", []);
      const FactoryData = new ethers.Contract(
        factoryAddress,
        factoryABI,
        signer
      );

      await FactoryData.CreateNewFund(Target, Deadline, Description, Image)
        .wait()
        .then(() => window.location.reload());
    }
  }

  async function getAllFund() {
    await provider.send("eth_requestAccounts", []);
    const FactoryData = new ethers.Contract(
      factoryAddress,
      factoryABI,
      provider.getSigner()
    );

    const FundCount = (await FactoryData.FundCount()).toNumber();
    console.log("FundCount:", FundCount);
  }

  useEffect(() => {
    // const formData = {
    //   Target: 1000,
    //   Deadline: 3600,
    //   Description: "Partt",
    //   Image: "jncdjcnjkn",
    // };
    // CreateFund(formData);

    getAllFund();
  }, []);

  return (
    <div className="App">
      <NavBar
        address={Address}
        ConnectWallet={ConnectWallet}
        DisconnectWallet={DisconnectWallet}
      />
      {!Address ? (
        <>
          <h1>Welcome to the CroudFunding App</h1>
          <h3>You Need to Authenticate First to access the App</h3>
          <img
            style={{ maxHeight: "65vh" }}
            src={AuthenticationSVG}
            alt="SVG"
          />
        </>
      ) : (
        <>
          {isLoading ? (
            <div style={{ marginTop: "18%" }}>
              <CircularProgress color="success" />
              <strong>Loading....</strong>
            </div>
          ) : (
            <div>
              <>
                <img
                  style={{ width: "98vw", height: "100vh", marginTop: "1%" }}
                  src={DashBoard}
                  alt="dashboard"
                />
                <FormModal />
              </>

              <div>
                <FundDetails />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
