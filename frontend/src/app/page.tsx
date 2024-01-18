import Index from '@/app/components/Index';
import { config } from '@/lib/config';
import { PageAndApiUrlProps, PageAsideContentProps } from '@/app/types';
import { headers } from 'next/headers';

export default async function Home() {
  const host = headers().get('host');
  const params: PageAndApiUrlProps = {
    baseUrl: config.API_PREFIX! + host,
    apiUrl: 'api/blog',
    pageWithUrl: '/',
  };

  const content: PageAsideContentProps = {
    title: 'メインページ',
    description: 'データの取得はjson-serverで行っています。',
  };

  return <Index params={params} pageContent={content} />;
}
