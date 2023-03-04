import { useAccount, useEnsName } from "wagmi";
import { configureChains, createClient } from "wagmi";
import { mainnet, optimism } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";

const { chains, provider } = configureChains(
  [mainnet, optimism],
  [alchemyProvider({ apiKey: "yourAlchemyApiKey" }), publicProvider()]
);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  provider,
});

export function Account() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });

  return (
    <p>
      {ensName ?? address}
      {ensName ? ` (${address})` : null}
    </p>
  );
}
