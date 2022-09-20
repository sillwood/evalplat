export type MediaType = 'audio' | 'video';
export type ResType = 'one' | 'two';

export type ExperimentMeta = {
  id: string;
  title: string;
  prompt: string;
  resType: ResType;
  mediaType: MediaType;
  totalPairs: number;
};

export type PairType = {
  pairId: string;
  choiceA: string;
  choiceB: string;
  experimentId: string;
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
