import Link from 'next/link';
import ArticleList from './components/ArticleList';
import { config } from '@/lib/config';

export default async function Home() {
  const res = await fetch(`${config.API_URL}/api/blog`, { cache: 'no-store' });
  const articles = await res.json();

  return (
    <div className='md:flex '>
      <section className='w-full md:w-2/3 flex flex-col items-center px-3 md:pl-6'>
        <ArticleList articles={articles} />
      </section>
      <aside className='w-full md:w-1/3 items-center px-3'>
        <div className='rounded mb-6 mt-4'>
          <Link href={'javascript/articles/new'}>
            <div className='py-3 rounded-md bg-green-600 hover:bg-green-500 text-center font-bold'>
              記事を書く
            </div>
          </Link>
          <div className='bg-white shadow-md rounded p-4 mb-6 mt-4'>
            <h3 className='font-bold text-gray-900 mb-2'>JavaScriptページ</h3>
            <p className='text-gray-600'>データの取得はExpressで行っています。</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
