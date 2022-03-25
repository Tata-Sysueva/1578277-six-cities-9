import {useState} from 'react';
import {SORT_TYPES} from '../../const';
import classNames from 'classnames';
import {changeSortType} from '../../store/action';
import {useAppDispatch} from '../../hooks';

type SortProps = {
  sortTypeCheck: string,
}

function Sort({sortTypeCheck}: SortProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleSortListClick = () => !open ? setOpen(true) : setOpen(false);
  const handleSortClick = () => dispatch(changeSortType(sortTypeCheck));

  const sortListClass = classNames(
    'places__options',
    'places__options--custom',
    {'places__options--opened': open},
  );

  return (
    <form className="places__sorting" action="#" method="get" onClick={handleSortListClick}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortTypeCheck}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={sortListClass}>
        {
          SORT_TYPES.map((sortType) => (
            <li
              className={classNames(
                'places__option',
                {'places__option--active': sortType === sortTypeCheck})}
              tabIndex={0}
              onClick={() => handleSortClick()}
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
