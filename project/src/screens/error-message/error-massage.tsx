import styles from '../error-message/ErrorMessage.module.css';

function ErrorMessage(): JSX.Element | null {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className="places__found">
          No, it&apos;s all gone! Please, check your internet connection and reload this page. Error 404.
        </h1>
      </div>
    </section>
  );
}

export default ErrorMessage;
