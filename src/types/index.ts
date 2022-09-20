export type MediaType = 'audio' | 'video';
export type ResType = 'one' | 'two';

export type Experiment = {
  id: string;
  title: string;
  prompt: string;
  resType: ResType;
  mediaType: MediaType;
  totalQuestions: number;
};

export type Pair = {
  pairId: string;
  mediaOne: string;
  mediaTwo: string;
  experimentId: string;
};
