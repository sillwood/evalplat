import { PairType } from '../types';
import { Button } from './Button';
import { supabase } from '../services/supabaseClient';

interface Props {
  idx: number;
  pairs: PairType[];
  setStartIdx: (idx: number) => void;
}

type selected = 'media_a' | 'media_b';

export const Pair = ({ idx, pairs, setStartIdx }: Props) => {
  const getSession = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      console.error(error);
      return null;
    } else {
      return session;
    }
  };

  const postResponse = async (userId: string, selected: selected) => {
    const { data, error } = await supabase
      .from('response')
      .insert([
        {
          user_id: userId,
          pair_id: pairs[idx].id,
          media_id: pairs[idx][selected],
        },
      ])
      .select('*');

    return { data, error };
  };

  const handleSubmit = async (selected: selected) => {
    const session = await getSession();
    // need token for RLS
    // console.log('sesss token', session?.access_token);
    const userId = session?.user.id || 'response-user-error';
    const { data, error } = await postResponse(userId, selected);

    if (data !== undefined) {
      setStartIdx(idx + 1);
    } else {
      console.error(error);
    }
  };

  return (
    <>
      <p>{pairs[idx].experiment.prompt}</p>
      <div>
        <h3>This is Pair: {idx}</h3>
      </div>
      <>
        <div>
          {pairs[idx].media_a}
          <Button text={'Choice A'} onClick={() => handleSubmit('media_a')} />
        </div>
        <div>
          {pairs[idx].media_b}
          <Button text={'Choice B'} onClick={() => handleSubmit('media_b')} />
        </div>
      </>
    </>
  );
};
