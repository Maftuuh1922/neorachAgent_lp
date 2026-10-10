import Landing from "@/components/Landing";
import { buildMetadata } from "@/lib/rootShell";

export const metadata = buildMetadata("en", true);

export default function Page() {
  return <Landing lang="en" />;
}
