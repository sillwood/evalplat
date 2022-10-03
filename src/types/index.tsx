export type MediaType = 'audio' | 'video';
export type ResType = 'AB' | 'other';

export type ExperimentMeta = {
  id: number;
  created_at: Date;
  title: string;
  prompt: string;
  res_type: ResType;
  media_type: MediaType;
  pair: Array<any>;
};

export type PairType = {
  id: string;
  media_a: string;
  media_b: string;
  experiment_id: string;
  experiment: ExperimentMeta;
};

export type Experiment = {
  meta: ExperimentMeta;
  pairs: PairType[];
};

export type UserExperimentProgress = {
  userId: string;
  completedIdx: number;
  experimentId: string;
  totalPairs: number;
};
