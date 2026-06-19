import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"
import Image from "next/legacy/image"
import Hero from "../../components/Hero"
import Layout from "../../components/Layout"
import { withDefaultStaticProps } from "../../utils/defaultStaticProps"
import articles, { ArticleBlock } from "../../data/blog"
import { formatArticleDate } from "../../utils/blog"

const renderBlock = (block: ArticleBlock, index: number) => {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={index} className="h4 mt-10 mb-4">
          {block.text}
        </h2>
      )
    case "list": {
      const ListTag = block.ordered ? "ol" : "ul"
      return (
        <ListTag
          key={index}
          className={`b1 my-4 flex flex-col gap-2 ps-6 ${
            block.ordered ? "list-decimal" : "list-disc"
          }`}
        >
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className="ps-1">
              {item}
            </li>
          ))}
        </ListTag>
      )
    }
    case "image":
      return (
        <div key={index} className="my-8 overflow-hidden rounded-lg">
          <Image
            src={block.src}
            alt={block.alt}
            layout="responsive"
            sizes="(min-width: 1024px) 720px, 100vw"
            placeholder="blur"
          />
        </div>
      )
    case "paragraph":
    default:
      return (
        <p key={index} className="b1 my-4">
          {block.text}
        </p>
      )
  }
}

/** This page does not require translations */
const Article = () => {
  const router = useRouter()
  const article = articles.find((item) => item.slug === router.query.slug)

  if (!article) {
    return null
  }

  return (
    <Layout transparentHeader={false}>
      <div dir="ltr" className="[unicode-bidi:plaintext]">
        <Hero>
          <p className="sh2 mb-3 text-nightshade-100">
            <Link href="/blog" className="hover:underline">
              ← Blog
            </Link>
          </p>
          <h1 className="h2 mb-4">{article.title}</h1>
          <p className="sh1">
            <a
              href={article.author.url}
              target="_blank"
              rel="noopener"
              className="hover:underline"
            >
              {article.author.name}
            </a>{" "}
            · {formatArticleDate(article.date)}
          </p>
        </Hero>

        <div className="b1 grid-cols-12 md:grid">
          <div className="gap-gutter pt-16 pb-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            {article.content.map(renderBlock)}

            <hr className="my-8 border-gray-3" />
            <p className="b2 text-gray-1">
              {article.author.name} ({article.author.handle}).{" "}
              <a
                href={article.source.url}
                target="_blank"
                rel="noopener"
                className="font-semibold text-blurple-600 hover:underline"
              >
                {article.source.label}
              </a>
              .
            </p>
          </div>
        </div>

        <Head>
          <title>{`${article.title} - OpenChat`}</title>
          <meta property="og:title" content={article.title} />
          <meta property="og:description" content={article.excerpt} />
        </Head>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = withDefaultStaticProps()

export default Article
