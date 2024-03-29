export default function ProjectOverview() {
  return (
    <>
      <h3>Cel Projektu</h3>
      <p style={{ marginBottom: 10, marginLeft: 10 }}>
        Celem niniejszego projektu jest opracowanie aplikacji prognozującej
        ryzyko chorób serca na podstawie określonych parametrów podanych przez
        użytkownika i wyuczonego wcześniej modelowi ML. Zamiarem nie jest
        stworzenie aplikacji o idealnym interfejsie, lecz wykazanie zrozumienia
        procesu tworzenia systemów Machine Learning (ML).
      </p>
      <h3>Etapy ML</h3>
      <p style={{ marginLeft: 10 }}>
        <strong>Przygotowanie danych</strong>: Wczytanie danych z pliku CSV.
      </p>
      <p style={{ marginLeft: 10 }}>
        <strong>Modelowanie</strong>: Budowa i trening modelu ML (Jupyter
        Listing poniżej)
      </p>
      <p style={{ marginLeft: 10 }}>
        <strong>Export modelu</strong>: zapisanie pliku .pkl i oprogramowanie go
        na BackEnd
      </p>
      <h3 style={{ marginTop: 10 }}>Rozwój Aplikacji Full Stack</h3>
      <div style={{ marginLeft: 10 }}>
        <strong>Front End</strong>: Stworzenie interfejsu użytkownika przy
        użyciu React i JavaScript.
        <p>
          <strong>Back End</strong>: Stworzenie logiki w Pythonie z użyciem
          Flask; stworzenie endpointu obsługującego zapytania z front endu jak
          równiesz wykorzystanie zapisanego do pliku .pkl medelu ML w celu
          generowania odpowiedzi.
        </p>
        <p style={{ marginBottom: 10 }}>
          <strong>Prace DevOps</strong>: Projekt obejmował także znaczące
          działania w zakresie DevOps, w tym hosting zarówno front endu, jak i
          back endu na AWS. Front end posiada własną nazwę domeny, a komunikacja
          odbywa się poprzez protokół SSL. W projekcie wykorzystano narzędzia
          takie jak Elastic Beanstalk, CodePipeline, Route53, EC2, AWS Amplify,
          Certificate Manager rozwiązując liczne napodkane w czasie pracy
          problemy techniczne.
        </p>
      </div>
      <h3>Podsumowanie</h3>
      <p style={{ marginLeft: 10 }}>
        Sworzenie niniejszej aplikacji potwierdza moje umiejętności i wiedzę w
        zakresie realizacji projektów Machine Learning, obejmujących zarówno
        budowę modeli ML, jak i rozwój interfejsu użytkownika wraz zapleczem
        Back End.
      </p>
    </>
  );
}
