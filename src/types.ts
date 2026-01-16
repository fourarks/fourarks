
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  whyItMatters: string;
  roadmap: string[];
  deliverables: string[];
  whoIsItFor: string;
  category: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}
