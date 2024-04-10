export default function ProjectOverview() {
  return (
    <>
      <h3>Cel Projektu</h3>
      <p style={{ marginBottom: 10, marginLeft: 10, marginTop: 10 }}>
        Projekt zakłada budowę modelu sieci neuronowej (NN), który ma na celu
        przewidywanie liczby wypożyczonych rowerów na podstawie różnych
        czynników środowiskowych i czasowych. Dane do modelu zawierają szereg
        kolumn, które służą jako zmienne niezależne, w tym:
      </p>
      <ul style={{ marginLeft: 20 }}>
        <li>
          <strong>dteday</strong>: Data (dzień, miesiąc, rok)
        </li>
        <li>
          <strong>season</strong>: Pora roku (wiosna, lato, jesień, zima)
        </li>
        <li>
          <strong>yr</strong>: Rok (0 dla 2011, 1 dla 2012)
        </li>
        <li>
          <strong>mnth</strong>: Miesiąc
        </li>
        <li>
          <strong>holiday</strong>: Czy dany dzień jest dniem wolnym od pracy
        </li>
        <li>
          <strong>weekday</strong>: Dzień tygodnia
        </li>
        <li>
          <strong>workingday</strong>: Czy dany dzień jest dniem roboczym
        </li>
        <li>
          <strong>weathersit</strong>: Warunki pogodowe (słoneczne, pochmurne)
        </li>
        <li>
          <strong>temp</strong>: Temperatura w stopniach Celsjusza
        </li>
        <li>
          <strong>hum</strong>: Wilgotność powietrza w procentach
        </li>
        <li>
          <strong>windspeed</strong>: Prędkość wiatru
        </li>
        <li>
          <strong>cnt</strong>: Łączna liczba wypożyczonych rowerów w danym dniu
        </li>
      </ul>

      <p style={{ marginLeft: 10, marginTop: 10 }}>
        Cel projektu to stworzenie modelu, który będzie w stanie skutecznie
        przewidzieć wartość w kolumnie 'cnt' na podstawie pozostałych zmiennych.
        Model ten znajdzie zastosowanie w planowaniu zasobów i strategii
        operacyjnych dla firm wypożyczających rowery, umożliwiając im
        optymalizację dostępności rowerów w odpowiedzi na zmienne warunki
        pogodowe, dni robocze, pory roku oraz inne czynniki.
      </p>
    </>
  );
}
