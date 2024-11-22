import Menu from "@/components/ui/Menu";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { connection } from "next/server";

async function UTSSR() {
  await connection();
  return <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <UTSSR />

      <Menu />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 bg-gray-100">{children}</main>
    </div>
  );
}
