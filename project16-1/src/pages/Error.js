import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured!</h1>
        <p>Colud not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;
