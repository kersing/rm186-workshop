# Software installeren
Om de node te kunnen programmeren hebben we de volgende hulpmiddelen nodig:
- Een ASCII tekst editor. Geen tekst verwerker o.i.d. maar een simpele editor. Voor Windows is heeft Notepad++ de voorkeur.
- UwTerminalX. Dit simpele terminal programma van Laird bevat de opties om programma's te vertalen en naar de module te zenden.

# Tekst Editor
Voor Windows gebruikers, ga naar de [notepad++ download pagina](https://notepad-plus-plus.org/downloads/v7.8/) en download de versie die voor je OS geschikt is (43 of 64 bit). Installeer die dan op je systeem.

Voor OSX en Linux gebruikers, je kunt gewoon 1 van de editors die bij het OS horen gebruiken

# UwTerminalX
Ga naar de [UwTerminal Wiki](https://github.com/LairdCP/UwTerminalX/wiki/Installing) en volg de instructies.
Downloads staan op de [releases pagina](https://github.com/LairdCP/UwTerminalX/releases).
Een ['quick reference'](https://connectivity-staging.s3.us-east-2.amazonaws.com/s3fs-public/2018-10/UwTerminalX%20Quick%20Reference%20Guide.pdf).

# Syntax highlight lijsten
Voor gebruikers van Notepad++ levert Laird een bestand met woorden voor syntax highlights. Dit is onderdeel van het archief met de firmware upgrade. Bij het downloaden wordt je gevraagd je gegevens in te vullen.
De download is helaas niet rechtstreeks te linken, ga naar de [product pagina](https://www.lairdconnect.com/wireless-modules/lorawan-solutions/sentrius-rm1xx-lora-ble-module) en download het bestand "RM186 PE UE 110.6.1.0-r1.zip". Pak het bestand uit en kopieer het bestand "smartBASIC(notepad++).xml" naar de Notepad++ installatie folder.
Start nu Notepad++, kies in het menu "Language", "Define your Language". In de nieuwe dialoog klik op "Import..." en selecteer het bestand "smartBASIC(notepad++).xml".
Sluit en herstart Notepad++ en kies nu "Language","smartBASIC" in het menu.

Vanaf dit moment zal Notepad++ automatisch als programmeertaal smartBASIC herkennen bij het openen van alle bestanden eindigend op '.sb' en '.sblib'.

In de volgende stap gaan we de drivers voor de USB-serie adapter installeren.
