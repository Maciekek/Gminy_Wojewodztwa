 Opis zadania

Zadanie polega na stworzeniu narzędzia do przeglądania (nazw) polskich gmin. Jego interfejs powinien wyglądać podobnie do przedstawionego poniżej.

gminy00

Po kliknięciu na mapie, w obszarze konkretnego województwa, narzędzie powinno wystosować odpowiednie zapytanie ajaksowe do serwera i pobrać listę wszystkich gmin tego województwa. Przykładowo, po kliknięciu w obszarze województwa pomorskiego interfejs „aplikacji” powinien wyglądać jak poniżej.

gminy00

Lista przesłana przez serwer nie będzie dobrze posortowana. Aplikacja powinna zadbać, żeby nazwy gmin na liście wyświetliły się w porządku alfabetycznym (zgodnie z regułami dla języka polskiego).

gminy00

Nad listą gmin powinna pojawić się nazwa województwa, do którego gminy te należą:

gminy00

Jeśli w polu tekstowym, które znajduje się poniżej listy gmin, wpiszemy wyrażenie regularne, to po kliknięciu na mapie w obrębie danego województwa lista powinna zawierać wyłącznie gminy, których nazwy „pasują” do wyrażenia. Należy w tym celu wykorzystać stosowną usługę REST-ową serwera (patrz uwagi wewnątrz pliku public/js/skrypt.js). Oczywiście nadal ma być utrzymywany porządek alfabetyczny. Poniższy przykład pokazuje gminy naszego województwa pasujące do wyrażenia ^S.*a.*

gminy00

Guzik z „miotełką” ma służyć do czyszczenia listy gmin oraz pola z nazwą województwa. Nie czyści on jednak zawartości pola tekstowego z wyrażeniem regularnym.

gminy00

Kod serwera oferującego informacje o gminach jest kompletny. Niczego nie należy w nim zmieniać. Podobnie niczego nie należy zmieniać w pliku public/index.html. Co zatem należy zrobić?
Czynności przygotowawcze

Będąc w katalogu głównym z kodem wykonać kolejno polecenia

npm install
bower install

Żeby uruchomić serwer, wydajemy polecenie:

npm start

Ponieważ kodu serwera nie będziemy zmieniać, po uruchomieniu pozostawiamy go działającym.
Co należy zrobić?

Uzupełnić (a właściwie niemal od zera stworzyć) kod skryptu public/js/skrypt.js
Używając języka LESS stworzyć styl w pliku less/styl.less. Po uruchomieniu serwera kod ten będzie automatycznie kompilowany na CSS i umieszczany w stosownym katalogu.
Kiedy wszystko już będzie działało, należy wydać polecenie
grunt compress
W jego efekcie w katalogu głównym powstanie plik o nazwie rozwiazanie.zip, zawierający wszystkie pliki, który miały prawo ulec zmianie.
Plik rozwiązanie.zip należy przesłać na adres prowadzącego z