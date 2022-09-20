import { PairType } from '../types';
import { Button } from './Button';

interface Props {
  prompt: string;
  idx: number;
  pairs: PairType[];
  setStartIdx: (idx: number) => void;
}

type selected = 'a' | 'b';

export const Pair = ({ prompt, idx, pairs, setStartIdx }: Props) => {
  const handleSubmit = (selected: selected) => {
    console.log(`handling submit of ${selected}`);
    // post response to server (user id, pair id, selected choice)
    // once 200 code received
    setStartIdx(idx + 1);
  };

  return (
    <>
      <p>{prompt}</p>
      <div>
        <h3>This is Pair: {idx}</h3>
      </div>
      <>
        <div>
          {pairs[idx].choiceA}
          <Button text={'Choice A'} onClick={() => handleSubmit('a')} />
        </div>
        <div>
          {pairs[idx].choiceB}
          <Button text={'Choice B'} onClick={() => handleSubmit('b')} />
        </div>
      </>
    </>
  );
};
