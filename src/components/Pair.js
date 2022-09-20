import { Button } from '../components/Button';

export const Pair = ({ idx, pairs, setStartIdx }) => {
  const handleSubmit = (selected) => {
    console.log(`handling submit of ${selected}`);
    // post response to server (user id, pair id, selected choice)
    // once 200 code received
    // update local storage with new start index (setStartIdx)
    setStartIdx(idx + 1);
    // display next question
  };

  return (
    <>
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
