import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import styles from './FormSend.module.css';

function FormSend(): JSX.Element {
  return (
    <div className={styles.container}>
      <p className={styles.text}> Back to
        <Link to={AppRoute.Main} className={styles.link}> main page </Link>
        <br/>or
        <Link to={AppRoute.Favorites} className={styles.link}> favorites offers page </Link>
      </p>
    </div>
  );
}

export default FormSend;
