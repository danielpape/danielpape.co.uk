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
        <title>Blog</title>
        <meta name="description" content="Writing in markdown." />
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
