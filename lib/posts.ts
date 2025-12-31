import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  draft?: boolean;
};

export type PostSummary = {
  slug: string;
  frontmatter: PostFrontmatter;
};

export type Post = PostSummary & {
  content: string;
};

export function getAllPosts(): PostSummary[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      frontmatter: data as PostFrontmatter,
    };
  });

  // hide drafts
  const published = posts.filter((p) => !p.frontmatter.draft);

  // newest first
  published.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  return published;
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const fm = data as PostFrontmatter;
  if (fm.draft) return null;

  return { slug, frontmatter: fm, content };
}
