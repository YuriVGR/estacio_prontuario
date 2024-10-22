export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full justify-center pb-6 pt-14">{children}</main>
  );
}
