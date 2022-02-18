import Card from '../card/card';

function CardList (): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {[1, 2, 3, 4, 5, 6].map((id) => <Card key={id}/>)}
    </div>
  );
}

export default CardList;
