# 'Event driven' programmeren
Voor wie Basic nog kent uit de 'goede oude tijd' is smartBASIC even wennen.

## Ouderwets en energiegebruik
In de 'goede oude tijd' op de Commodore 64 of een vergelijkbare huiscomputer werdt ook Basic gebruikt. Elke regel van het programma was voorzien van een regelnummer en de computer was constant bezig met uitvoeren van de instructies in die regels.
Nadeel van die methode van werken is dat de computer ook constant veel energie aan het gebruiken was. Zelfs bij het wachten op invoer werden constant programma instructies (van de Basic interpreter) uitgevoerd en daarmee energie gebruikt.

Een ouderwets voorbeeld:
````
DO
  lees teken
  IF teken = '!' THEN
    doe iets
  ENDIF
UNTIL 0
````

## Event driven
Om het energiegebruik te minimaliseren is het van belang dat de module kan gaan slapen als er niets te doen is. Als er constant instructies uitgevoerd worden lukt dat niet, dus wordt er gekozen voor een andere aanpak.
Standaard 'slaapt' de processor, tenzij er een 'event' optreed, op dat moment wordt dat afgehandeld en daarna gaat de module weer slapen.

De slimme versie van het voorbeeld:
````
FUNC proces
  doe iets
ENDFUNC

ONEVENT teken_ontvangen CALL proces

WAITFOREVENT
````

Bij WAITFOREVENT kan de processor slapen en heel weinig energie gebruiken. Alleen als er een teken ontvangen wordt zal even de routine 'proces' aangeroepen worden.

Deze manier van programmeren vraagt 'omdenken' van de oude garde, maar is heel makkelijk in gebruik als je het concept snapt.
