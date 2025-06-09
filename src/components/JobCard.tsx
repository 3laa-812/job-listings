import type { JobCardProps } from "../types";

const JobCard = ({ job, onTagClick }: JobCardProps) => {
  // All clickable filter tags (role, level, languages, tools)
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <section
      className="container mx-auto my-6 p-6 bg-neutral-light-grayish-cyan rounded-lg shadow-xl"
      key={job.id}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* ─── Left side ────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <img
            src={job.logo}
            alt={job.company}
            className="w-16 h-16 -mt-12 sm:mt-0"
          />

          <div className="flex flex-col gap-2">
            {/* company + badges */}
            <div className="flex items-center gap-2">
              <h2 className="text-primary-dark-cyan font-bold">
                {job.company}
              </h2>

              {job.new && (
                <span className="bg-primary-dark-cyan font-bold text-white px-2 py-1 rounded-full text-sm">
                  NEW!
                </span>
              )}
              {job.featured && (
                <span className="bg-neutral-very-dark-grayish-cyan font-bold text-white px-2 py-1 rounded-full text-sm">
                  FEATURED
                </span>
              )}
            </div>

            {/* position */}
            <h3 className="font-bold text-lg hover:text-primary cursor-pointer">
              {job.position}
            </h3>

            {/* meta */}
            <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
              <p>{job.postedAt}</p>•<p>{job.contract}</p>•<p>{job.location}</p>
            </div>
          </div>
        </div>

        {/* ─── Right side: clickable tags ───────── */}
        <div className="flex flex-wrap gap-3 pt-4 sm:pt-0 border-t sm:border-t-0">
          {tags.map((tag, i) => (
            <span
              key={i}
              onClick={() => onTagClick(tag)}
              className="cursor-pointer bg-neutral-light-grayish-cyan text-primary-dark-cyan font-bold px-3 py-1 rounded hover:bg-primary-dark-cyan hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCard;
