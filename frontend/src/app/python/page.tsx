import Index from '@/app/components/Index';
import { config } from '@/lib/config';
import { PageAndApiUrlProps, PageAsideContentProps } from '@/app/types';

export default async function Home() {
  const params: PageAndApiUrlProps = {
    baseUrl: config.PYTHON_API_URL!,
    apiUrl: 'python/blog',
    pageWithUrl: '/python/',
  };

  const content: PageAsideContentProps = {
    title: 'pythonページ',
    description: 'FastAPIを使ったPythonのページです。',
  };

  return <Index params={params} pageContent={content} />;
}
