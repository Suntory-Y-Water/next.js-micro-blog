import Index from '@/app/components/Index';
import { config } from '@/lib/config';
import { PageAndApiUrlProps, PageAsideContentProps } from '@/app/types';

export default async function Home() {
  const params: PageAndApiUrlProps = {
    baseUrl: config.JAVA_API_URL!,
    apiUrl: 'api/java/blog',
    pageWithUrl: '/java/',
  };

  const content: PageAsideContentProps = {
    title: 'Javaページ',
    description: 'Javaのページです。',
  };

  return <Index params={params} pageContent={content} />;
}
