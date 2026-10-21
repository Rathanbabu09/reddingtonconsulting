import Link from "next/link";
import { formatDate, type Post } from "@/content/posts";
import { Icon } from "./Icon";

const covers: Record<Post["category"], string> = {
  "Hiring Insights": "from-[#1a2650] via-[#2b1d4a] to-brand",
  "Career Advice": "from-[#0e9f7a] via-[#17506a] to-[#0c1427]",
  "Industry Trends": "from-[#3b5bdb] via-[#1e2a5a] to-[#0c1427]",
};

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(12,20,39,0.35)] ${featured ? "lg:flex-row" : ""}`}
    >
      <div className={`relative overflow-hidden bg-linear-to-br ${covers[post.category]} ${featured ? "aspect-[16/10] lg:aspect-auto lg:w-1/2" : "aspect-[16/9]"}`}>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[18px_18px]" aria-hidden />
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full border-[18px] border-white/10 transition-transform duration-700 group-hover:scale-125" aria-hidden />
        <span className="absolute top-5 left-5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{post.category}</span>
        <p className={`absolute right-6 bottom-5 left-6 font-display font-bold leading-tight text-white/90 ${featured ? "text-3xl" : "text-xl"}`}>
          {post.title.split(":")[0]}
        </p>
      </div>
      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${featured ? "lg:justify-center lg:p-10" : ""}`}>
        <p className="text-sm text-muted">
          {formatDate(post.date)} · {post.readMins} min read
        </p>
        <h3 className={`mt-3 font-display font-semibold leading-snug text-ink transition-colors group-hover:text-brand ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 leading-relaxed text-muted">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-brand">
          Read article
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
