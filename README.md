```markdown
# TaskPal

TaskPal je aplikacija za upravljanje zadacima koja korisnicima omogućuje efikasnije upravljanje vremenom i zadacima uz pomoć tehnike Pomodoro.

## Funkcionalnosti

- Upravljanje Zadacima: Korisnici mogu stvarati, uređivati i brisati zadatke.
- Pomodoro Timer: Integrirani Pomodoro timer pomaže korisnicima da se fokusiraju na rad kroz određene vremenske intervale.
- Praćenje Aktivnosti: Aktivnosti svakog korisnika bilježe se za potrebe analize i poboljšanja produktivnosti.
- Autentikacija: Siguran pristup i upravljanje korisničkim računima.
- Uloge i Dozvole: Podrška za različite korisničke uloge sa specifičnim dozvolama.

## Tehnologije

TaskPal koristi sljedeće tehnologije:

- Frontend: Vue.js
- Backend: Node.js, Express.js
- Baza Podataka: MongoDB
- Autentikacija: Firebase Authentication

## Pokretanje Projekta

Da biste pokrenuli TaskPal lokalno, slijedite ove korake:

1. Klonirajte repozitorij:
   ```bash
   git clone https://github.com/example/taskpal.git
   ```
2. Instalirajte ovisnosti za backend:
   ```bash
   cd taskpal/backend
   npm install
   ```
3. Instalirajte ovisnosti za frontend:
   ```bash
   cd ../frontend
   npm install
   ```
4. Pokrenite backend server:
   ```bash
   npm start
   ```
5. Pokrenite frontend razvojni server:
   ```bash
   npm run serve
   ```
6. Otvorite `http://localhost:8080` u vašem pregledniku.
