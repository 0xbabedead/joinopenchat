import Head from "next/head"
import Link from "next/link"
import Hero from "../../components/Hero"
import Layout from "../../components/Layout"
import { withDefaultStaticProps } from "../../utils/defaultStaticProps"
import articles from "../../data/blog"
import { formatArticleDate } from "../../utils/blog"

/** This page does not require translations */
const Blog = () => {
  const sortedArticles = [...articles].sort((a, b) =>
    b.date.localeCompare(a.date)
  )

  return (
    <Layout transparentHeader={false}>
      <div dir="ltr" className="[unicode-bidi:plaintext]">
        <Hero>
          <h1 className="h1 mb-4">Blog</h1>
          <p className="sh1">News, guides, and stories from the OpenChat community.</p>
        </Hero>

        <div className="b1 grid-cols-12 md:grid">
          <div className="gap-gutter pt-24 pb-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <ul className="m-0 flex flex-col gap-12 p-0">
              {sortedArticles.map((article) => (
                <li key={article.slug}>
                  <article>
                    <p className="sh2 mb-2 text-gray-1">
                      {formatArticleDate(article.date)} · {article.author.name}
                    </p>
                    <h2 className="h3 mb-3">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="hover:underline"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <p className="b2 text-gray-1">{article.excerpt}</p>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="b2 mt-3 inline-block font-semibold text-blurple-600 hover:underline"
                    >
                      Read article
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Head>
          <title>Blog - OpenChat</title>
          <meta property="og:title" content="OpenChat Blog" />
        </Head>
      </div>
    </Layout>
  )
}

export const getStaticProps = withDefaultStaticProps()
export default Blog
