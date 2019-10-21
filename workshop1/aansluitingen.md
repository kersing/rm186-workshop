# Aansluitingen voor sensoren
Op de RM186 kunnen verschillende type sensoren aangesloten worden. Let er wel op dat de module op 3,3 volt werkt en geen hogere spanningen op de pennen verdraagt zonder beschadigingen.

Zie de RM1XX data sheet voor voor details welke pennen precies voor welke doeleinden gebruikt kunnen worden.

## Digitaal signaal
De simpelste sensor geeft als uitgangsignaal 0 volt of 3,3 volt. Deze signalen kunnen op alle digitale invoer pennen aangesloten worden.

## Analoog signaal
Sommige sensoren geven een signaal tussen 0 volt en 3,3 volt (of 1,2 volt o.i.d.) af. Deze signalen kunnen op de ADC pennen ingelezen worden. Daarbij is keus tussen drie voltage bereiken. De exacte bereiken hangen samen met de voedingsspanning van de module, voor deze node is dat 3,3 volt en dan zijn de bereiken:
1. 0 - 1,2 volt
1. 0 - 1,8 volt
1. 0 - 3,3 volt

Let bij instellen van de ingang op het bereik om beschadigingen aan de module te voorkomen.

## I2C sensoren
Er bestaat een enorme schat aan sensoren die voorzien zijn van de I2C (of two wire) interface. De RM186 heeft smartBASIC commando's om hiermee te interface.

## SPI sensoren
Er is ook een groep sensoren met die met een SPI interface uitgerust is. Ook hiervoor biedt smartBASIC ondersteuning.

## Seriele sensoren
De laatste categorie die we relatief makkelijk op de RM186 kunnen aansluiten zijn sensoren met een UART interface. De RM186 heeft een hardware UART die voor communicatie hiermee gebruikt kan worden.
Nadeel is dat deze hardware UART ook gebruikt wordt voor het programmeren en debuggen, als er een sensor aan gehangen wordt worden die stappen lastiger.

## Schema
Raadpleeg het schema van de node om te zien welke poorten van de RM186 op welke pennen op de node beschikbaar zijn.
