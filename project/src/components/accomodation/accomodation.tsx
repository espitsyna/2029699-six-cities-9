import { Accommodation as AccommodationType } from '../../types/offer';

type AccommodationProps = {
  type: AccommodationType;
};

function Accommodation({ type }: AccommodationProps): JSX.Element {
  return (
    <span>{'room' === type ? 'Private room' : `${type[0].toUpperCase()}${type.slice(1)}`}</span>
  );
}

export default Accommodation;
