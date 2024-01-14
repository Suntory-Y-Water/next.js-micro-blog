/**
 * ブログ情報を表す型
 *
 */
export type Article = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

/**
 * ページとAPIのURLを渡すための型
 *
 * @interface PageAndApiUrlProps
 */
export interface PageAndApiUrlProps {
  baseUrl: string;
  apiUrl: string;
  pageWithUrl: string;
}

export interface PageWithUrl {
  pageUrl: string;
}

export interface PageAsideContentProps {
  title: string;
  description: string;
}
