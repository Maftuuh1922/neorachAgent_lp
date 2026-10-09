import { RootShell, buildMetadata, viewport } from "@/lib/rootShell";

export const metadata = buildMetadata("id");
export { viewport };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="id">{children}</RootShell>;
}
