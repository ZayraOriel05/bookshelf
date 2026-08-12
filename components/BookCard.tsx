type BookCardProps = {
  title: string;
  author: string;
  cover: string;
  progress?: number;
};

export default function BookCard({
  title,
  author,
  cover,
  progress,
}: BookCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-[#E8E0D7] shadow-sm ring-1 ring-black/5 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
        <img
          src={cover}
          alt={`Cover of ${title}`}
          className="h-full w-full object-cover"
        />

        {progress !== undefined && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/10 p-2 backdrop-blur-sm">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/50">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <h3 className="mt-3 line-clamp-2 font-serif text-lg leading-tight">
        {title}
      </h3>

      <p className="mt-1 line-clamp-1 text-sm text-[#756B65]">{author}</p>
    </article>
  );
}
