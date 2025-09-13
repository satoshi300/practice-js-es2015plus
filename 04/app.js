// W plikach tego zadania znajdziesz klasę `User`, która pozwala zarejestrować użytkownika po wpisaniu poprawnych danych. Poprawnymi danymi są:
// - login zawierający znak @,
// - hasło składające się z co najmniej 6 znaków.

// W osobnym pliku stwórz drugą klasę o nazwie `Admin`, która będzie miała bardziej restrykcyjne warunki: hasło będzie musiało składać się z co najmniej 10 znaków. Wykorzystaj klasę `User` do zbudowania klasy `Admin`.

// Klasa `Admin` ma działać w taki sposób, że wywołanie poniższego kodu spowoduje wyświetlenie w konsoli `error` dla pierwszej części i `done` dla drugiej.

// ```
// const admin1 = new Admin( userData );
// admin1.register(); // error

// const admin2 = new Admin( adminData );
// admin2.register(); // done
// ```

import User from './User.js';
import Admin from './Admin.js';

const userData = { login: 'user@devmentor.pl', password: '123456' }
const adminData = { login: 'admin@devmentor.pl', password: '1234567890' }

const admin1 = new Admin(userData);
admin1.register(); // error

const admin2 = new Admin(adminData);
admin2.register(); // done

// const user = new User(userData);
// const admin = new Admin(adminData);
// user.register();
// admin.register();

