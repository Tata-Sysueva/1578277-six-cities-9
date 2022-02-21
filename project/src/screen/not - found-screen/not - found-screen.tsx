function NotFoundScreen (): JSX.Element {
  return (
    <div className="page page--gray page--main container" style={{marginTop: '150px'}}>
      <h1 className="places__found">
        Looks like you&apos;re lost, friend
      </h1>
      <p className="places__option">
        The page you are looking for can&apos;t be found. Error 404.
      </p>
      <a className="reviews__submit form__submit button" href="/">Back to home</a>
    </div>
  );
}

export default NotFoundScreen;
