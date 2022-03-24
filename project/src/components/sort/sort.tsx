import {SORT_TYPE} from '../../const';
import classNames from 'classnames';
import {useState} from 'react';

type SortProps = {
  sortTypeCheck: string,
  onSortClick?: (sortType: string) => void;
}

function Sort({sortTypeCheck, onSortClick}: SortProps): JSX.Element {
  const [show, setState] = useState(false);

  const handleSortListOpen = () => {
    if (!show) {
      setState(true);
    } else {
      setState(false);
    }
  };

  const sortListClass = classNames(
    'places__options',
    'places__options--custom',
    {'places__options--opened': show},
  );

  return (
    <form className="places__sorting" action="#" method="get" onClick={handleSortListOpen}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortTypeCheck}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={sortListClass}>
        {
          SORT_TYPE.map((sortType) => (
            <li
              className={classNames('places__option', {'places__option--active': sortType === sortTypeCheck})}
              tabIndex={0}
              onClick={() => onSortClick?.(sortType)}
              key={sortType}
            >
              {sortType}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default Sort;
