import { useState } from "react";
import factoryABI from "../Factory.json";
import fundABI from "../FundABI.json";
import { ethers } from "ethers";
import NavBar from "./NavBar";
import CircularProgress from "@mui/material/CircularProgress";
import Form from "./Form";

function App() {
  const [Address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const factoryAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  async function ConnectWallet() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
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

  async function CreateFund() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const FactoryData = new ethers.Contract(
      factoryAddress,
      factoryABI,
      provider.getSigner()
    );
  }

  return (
    <div className="App">
      <NavBar
        address={Address}
        ConnectWallet={ConnectWallet}
        DisconnectWallet={DisconnectWallet}
      />
      {isLoading ? (
        <CircularProgress style={{ marginTop: "18%" }} color="success" />
      ) : (
        <>
          <h1>Welcome to Croud Funding Dashboard</h1>
          <Form />
        </>
      )}
    </div>
  );
}

export default App;
