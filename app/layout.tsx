// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <title>中转服务</title>
        <meta httpEquiv="refresh" content="0; url=https://sms-activate.org" />
      </head>
      <body>{children}</body>
    </html>
  );
}
