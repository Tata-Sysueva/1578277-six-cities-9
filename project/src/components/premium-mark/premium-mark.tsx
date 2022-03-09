type PremiumMarkProps = {
  isProperty?: boolean,
}

function PremiumMark ({isProperty}: PremiumMarkProps): JSX.Element {
  return (
    <div className={isProperty ? 'property__mark' : 'place-card__mark'}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumMark;
