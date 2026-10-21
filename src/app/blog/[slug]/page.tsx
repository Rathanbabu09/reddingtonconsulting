import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { PostCard } from "@/components/PostCard";
import { Reveal } from "@/components/motion/Reveal";
import { formatDate, getPost, posts } from "@/content/posts";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, publishedTime: post.date },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/brand/reddington-logo.png` } },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow={post.category} title={post.title} crumbs={[{ href: "/blog", label: "Blog" }]} visual={false}>
        <Reveal delay={0.3} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted">
          <span className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-xs font-bold text-white">RC</span>{post.author}</span>
          <span>{formatDate(post.date)}</span>
          <span>{post.readMins} min read</span>
        </Reveal>
      </PageHero>

      <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <Reveal>
          <p className="border-l-4 border-brand pl-6 font-display text-xl leading-relaxed text-ink sm:text-2xl">{post.excerpt}</p>
        </Reveal>
        <div className="mt-12 space-y-10">
          {post.body.map((b, i) => (
            <Reveal key={i}>
              {b.heading && <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{b.heading}</h2>}
              <p className={`text-lg leading-[1.85] text-muted ${b.heading ? "mt-4" : ""}`}>{b.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl bg-surface p-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl font-semibold text-ink">Have a role to fill?</p>
            <p className="mt-1 text-muted">Talk to a Reddington recruiter today.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark">
            Get in touch <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>
      </article>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-bold text-ink">Keep reading</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>
      <div className="pt-24"><CtaBand /></div>
    </>
  );
}
