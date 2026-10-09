import { RootShell, buildMetadata, viewport } from "@/lib/rootShell";

export const metadata = buildMetadata("en");
export { viewport };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="en">{children}</RootShell>;
}
