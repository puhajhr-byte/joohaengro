import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: '프렙 카페 마감 관리', description: '카페 운영 마감 관리' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
