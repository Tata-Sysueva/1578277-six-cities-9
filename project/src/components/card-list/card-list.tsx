import Card from '../card/card';

function CardList (): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {Array.from({length: 6},(_, id) => <Card key={id} />)}
    </div>
  );
}

export default CardList;
