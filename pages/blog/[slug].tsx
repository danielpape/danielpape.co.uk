import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import React from "react";
import Navigation from "../../components/Navigation";

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
        <title>{post.frontmatter.title}</title>
        {post.frontmatter.description ? (
          <meta name="description" content={post.frontmatter.description} />
        ) : null}
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
