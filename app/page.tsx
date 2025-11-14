// app/page.tsx
export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>VPN中转服务</h1>
      <p>正在重定向到目标网站...</p>
      <p>如果未自动跳转，<a href="https://sms-activate.org">请点击这里</a></p>
    </div>
  );
}

// 关键：添加服务端重定向逻辑
export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://sms-activate.org',
      permanent: false,
    },
  };
}
