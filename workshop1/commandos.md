# Commando's
De RM186 module wordt bestuurd met 'AT' commando's zoals deze vroeger ook voor modems gebruikt werden, maar wel een aangepaste en uitgebreide set.

N.B. Alle commando's worden afgesloten met een ENTER.

## Reset
Om de module te resetten wordt het commando 'ATZ' gebruikt.

## Directory opvragen
De module bevat een flash chip waar meerdere programma's en de instellingen op opgeslagen worden. Gebruik "at +dir" om een overzicht te krijgen van de aanwezige programma's.

## Een programma starten
Een programma starten kan op twee manieren, met ' at +run "programmanaam" ' en met "programmanaam".

## Het flash geheugen wissen
Het flash geheugen kan geheel (alles) of in delen gewist worden. Met "at &f \*" wordt alles gewist. Met "at &f 1" alleen het programma geheugen.
(Zie de manual voor de verdere opties)

## Informatie opvragen
Met 'at i NNNN' kan informatie betreffende de module opgevraagd worden. Bijvoorbeeld "at i 3" levert het versienummer van de firmware. In de smartBASIC handleiding staat een lijst met 'SYSINFO' nummers, die kunnen op de plaats van de NNNN ingevuld worden.

## Instellingen zetten/opvragen
Instellingen worden opgeslagen met "at +cfg NNNN XXX" of "at +cfgex NNN XXX", opvragen kan met "at +cfg NNNN ?" en "at +cfgex NNNN ?". Zie de handleidingen voor alle mogelijke instellingen. De basis instellingen (cfg) staan in de smartBASIC handleiding, de LoRaWAN specifieke instellingen (CFGEX) in de handleiding betreffende LoRaWAN.

Sommige instellingen worden pas actief na een reset van de module, dat hoort bij de instellingen vermeldt te worden, maar in geval van twijfel kan een extra reset (ATZ) geen kwaad.
