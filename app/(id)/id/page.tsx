import Landing from "@/components/Landing";
import { buildMetadata } from "@/lib/rootShell";

export const metadata = buildMetadata("id", true);

export default function Page() {
  return <Landing lang="id" />;
}
