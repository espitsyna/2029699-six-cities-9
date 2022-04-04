import './loader.css';

function Loader(): JSX.Element {
  return (
    <div className="lds-ring" data-testid="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
