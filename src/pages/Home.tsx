import { useState } from "react";
import type { Job, TagType } from "../types";
import data from "../data.json";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import FilterBar from "../components/FilterBar";

const Home = () => {
  const [filters, setFilters] = useState<TagType[]>([]);

  // a job matches if it contains every active filter
  const jobMatchesFilters = (job: Job): boolean => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((f) => tags.includes(f));
  };

  /* ───────── filter handlers ───────── */
  const addFilter = (tag: TagType): void => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
  };

  const removeFilter = (tag: TagType): void =>
    setFilters(filters.filter((f) => f !== tag));

  const clearFilters = (): void => setFilters([]);

  /* ───────── render ───────── */
  const filteredJobs: Job[] =
    filters.length === 0 ? data : data.filter(jobMatchesFilters);
  return (
    <div className="bg-neutral-light-grayish-cyan">
      <Header />
      <FilterBar
        filters={filters}
        onClear={clearFilters}
        onRemove={removeFilter}
      />

      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} onTagClick={addFilter} />
      ))}
    </div>
  );
};

export default Home;
