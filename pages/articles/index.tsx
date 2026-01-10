import Link from "next/link";
import Head from "next/head";
import { getAllPosts } from "@/lib/posts";
import React from "react";
import Navigation from "../../components/sections/Navigation";
import Footer from "../../components/sections/Footer";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";

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
        <h1 className="text-3xl font-semibold">Articles</h1>

        <ul className="posts">
          {posts.map((post) => (
            <li key={post.slug} className="posts__post-item">
              <div>
                <h2 className="posts__post-title">
                  <Link
                    href={`/articles/${post.slug}`}
                    className="hover:underline"
                  >
                    {post.frontmatter.title}
                  </Link>
                </h2>

                <div className="experience-overline">
                  {new Date(post.frontmatter.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>

              {post.frontmatter.description ? (
                <p className="post__post-description">
                  {post.frontmatter.description}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
