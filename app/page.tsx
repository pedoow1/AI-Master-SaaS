import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>الصفحة الرئيسية</h1>
      <Link href="/dashboard">
        <a>لوحة التحكم</a>
      </Link>
    </div>
  );
}

export default Home;