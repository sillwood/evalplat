import { Button } from '../components/Button';

export const Pair = () => {
  const handleSubmit = () => {
    console.log('handling submit');
    // post response to server (user id, pair id, selected choice)
    // once 200 code received, navigate to next question
  };
  return (
    <>
      <div>
        <h3>This is the Pair component!</h3>
      </div>
      <Button text={'Submit'} onClick={handleSubmit} />
    </>
  );
};
