import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

import { Account } from "../components";

function Page() {
  const { isConnected } = useAccount();
  return (
    <>
      <h1>LSD Ultra</h1>
      <ConnectKitButton />
      {isConnected && <Account />}
    </>
  );
}

export default Page;
