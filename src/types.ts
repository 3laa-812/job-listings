export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export type TagType = string;

export interface JobCardProps {
  job: Job;
  onTagClick: (tag: TagType) => void;
}

export interface FilterBarProps {
  filters: TagType[];
  onClear: () => void;
  onRemove: (filter: TagType) => void;
}
