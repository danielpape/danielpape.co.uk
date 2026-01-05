import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import React from "react";
import Navigation from "../../components/sections/Navigation";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false, // required for static export
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) return { notFound: true };

  return { props: { post } };
};

export default function BlogPostPage({
  post,
}: {
  post: NonNullable<ReturnType<typeof getPostBySlug>>;
}) {
  return (
    <>
      <Head>
        <title>
          {post.frontmatter.title} by Daniel Pape - Product Designer
        </title>
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
        <article>
          <header className="mb-10">
            <h1 className="text-3xl font-semibold">{post.frontmatter.title}</h1>
            <div className="mt-3 text-sm text-neutral-500">
              {new Date(post.frontmatter.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            {post.frontmatter.description ? (
              <p className="mt-4 text-neutral-700">
                {post.frontmatter.description}
              </p>
            ) : null}
          </header>

          {/* If you use Tailwind Typography, apply `prose` here */}
          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </>
  );
}
