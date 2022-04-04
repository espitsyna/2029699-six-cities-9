import { Accommodation as AccommodationType } from '../../types/offer';

type AccommodationProps = {
  type: AccommodationType;
};

function Accommodation({ type }: AccommodationProps): JSX.Element {
  return (
    <span style={{ textTransform: 'capitalize' }}>{AccommodationType.room === type ? 'private room' : type}</span>
  );
}

export default Accommodation;
