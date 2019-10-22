# Automatisch starten
Omdat het onhandig is om een node elke keer dat die opnieuw gestart moet worden aan de computer te moeten hangen is er een mogelijkheid om bij een reset of bij het aanzetten (stroom aansluiten), de node een programma automatisch uit te laten voeren.

Om dat te realiseren zijn er een paar voorwaarden:
1. Pen nAR moet tijdens het starten een laag niveau (0V) hebben.
1. Er moet een programma met de naam '$autorun$' (inclusief de dollartekens) op de module staan.

Voor vereiste 1 wordt gezorgt door een van de weerstanden op de node. Vereiste 2 moeten we zelf invullen door het programma dat we naar de module zenden van de goede naam te voorzien.
Omdat het lastig is om aan een programma met de naam $autorun$.sb te zien wat het doet kan een programma opgeslagen worden met een naam die start met $autorun$. (inclusief de punt). UwTerminalX zal bij het verzenden als bestemmings bestandsnaam alleen de tekens voor de eerste punt gebruiken. Dus '$autorun$.test.sb' en '$autorun$.sensor.sb' resulteren beide in een bestand met de naam '$autorun$' op de module. (Helaas is het op de module dus lastig te zien welk programma daar staat omdat de naam altijd hetzelfde is.)

Als je een $autorun$ bestand op de module gezet hebt en je wilt de module in interactieve mode starten om commando's te kunnen typen moet je een verbinding maken tussen een van de 3v3 pennen en pen nAR. Let wel op dat er dan de voedingsspanning over een 1K weerstand staat, dat is niet energie zuinig.

Situaties waarbij automatisch starten niet werkt:
1. Als niet aan bovenstaande voorwaarden voldaan is.
1. Als de module geen geldige licentie bevat. Dat is te zien met 'AT I 4', als dit als resultaat eindigt op 'C0FFEE' is er geen geldige licentie aanwezig. Dit komt normaal gesproken alleen voor na een gefaalde firmware upgrade waarbij het hele flash geheugen (inclusief beschermde delen) overschreven is. Laird support kan een nieuwe licentie sleutel genereren die met een AT commando geladen wordt. Mijn ervaring is dat dit enkele dagen doorlooptijd heeft.
