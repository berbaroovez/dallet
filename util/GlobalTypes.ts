type Receipt = {
  id: number;
  created_at?: string;
  name: string;
  notes?: string;
  url?: string;
  price?: number;
  user: string;
  type: string;
  filePath?: string;
  file_extension?: string;
};

export type { Receipt };
