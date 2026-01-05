import Link from "next/link";
import Head from "next/head";
import { getAllPosts } from "@/lib/posts";
import React from "react";
import Navigation from "../../components/Navigation";

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function BlogIndex({
  posts,
}: {
  posts: ReturnType<typeof getAllPosts>;
}) {
  return (
    <>
      <Head>
        <title>Daniel Pape - Product Designer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Homepage of Daniel Pape, a digital product designer from the UK."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-32006853-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-32006853-1', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <Navigation />

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Blog</h1>
        <p className="mt-2 text-neutral-600">
          Markdown posts, exported as static HTML.
        </p>

        <ul className="mt-10 space-y-8">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-neutral-200 pb-6">
              <h2 className="text-xl font-semibold">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.frontmatter.title}
                </Link>
              </h2>

              <div className="mt-2 text-sm text-neutral-500">
                {new Date(post.frontmatter.date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>

              {post.frontmatter.description ? (
                <p className="mt-3 text-neutral-700">
                  {post.frontmatter.description}
                </p>
              ) : null}

              {post.frontmatter.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
