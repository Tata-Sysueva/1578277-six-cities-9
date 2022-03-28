import styles from './Loading.module.css';

function Loading(): JSX.Element {
  return (
    <div className={styles.spinner}>
      <div className={styles.item}>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    </div>
  );
}

export default Loading;
