# ShopListProducts

2. Kreirati web aplikaciju koja prilikom startovanja otvara login stranu gde je potrebno uneti
username i password i kliknuti na dugme Login kako bi se otvorila centralna strana aplikacije.
Login je uspesan ukoliko je unet postojeći CustomerID i za username i za password.

Na centralnoj strani aplikacije potrebno je obezbediti glavni meni gde su prisutne opcije: Moje
narudžbine, Proizvodi.

Odabirom opcije Moje narudžbine prikazuju se nardžbine ulogovanog korisnika tako da se za
svaku narudžbinu vidi spisak proizvoda koji su tom narudžbinom obuhvaćeni, količina za svaki od
proizvoda, cena za svaki od proizvoda, ukupna cena narudžbine i datum narudžbine. 
Odabirom opcije Proizvodi prikazuje se katalog svih proizvoda tako da se za svaki proizvod vidi
ime proizvoda, ime kategorije proizvoda, random izabrana slika i cena proizvoda. 
Potrebno je obezbediti pretragu na sledeći način:
 Postoje dva datumska polja (OD, DO)
 Postoji tekstualno polje
 Dugme pretraži (opciono)

Pretraga podrazumeva da su na strani prikazane samo narudžbine kreirane u odabranom
vremenskom opsegu koje sadrže neki proizvod koji u svom imenu sadrži vrednost unetu u
tekstualno polje za pretragu. Ukoliko je neko od polja za pretragu prazno ono se ignoriše pri
pretrazi.  ukoliko su datumska polja datepicker-i,

Uz najskuplju narudžbinu treba da stoji notifikacija sa porukom o važnosti te narudžbine.

korišćenje jQuery kontrola i AngularJS-a zarad poboljšanja funkcionalnosti

Napomena:
Za rešavanje ovog zadatka potrebno je pronaći linkove Nortwind servisa kojima se dobija spisak
objekata sledećih tipova: Customer, Orders, Products.
Npr. Orders
http://services.odata.org/V3/Northwind/Northwind.svc/Orders?$expand=Order_Details&$form
at=json