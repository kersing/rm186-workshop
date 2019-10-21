# Timers
Om de module effectief zoveel mogelijk te laten slapen, maar periodiek toch ook wat zinvols uit te laten voeren zijn er 8 timers beschikbaar. Deze timers kunnen ingesteld worden om na (voor de RM186) 30 milliseconden tot 11,6 dagen af te lopen. Of om elke 30 milliseconden tot 11,6 dagen een routine te starten.
Een gezette timer kan, indien gewenst, gestopt worden en de resterende tijd kan opevraagd worden.

## Timer voorbeeld
Omdat smartBASIC geen commando heeft om even te wachten (iets als 'sleep' in andere talen) is een andere oplossing nodig. Het volgende voorbeeld implementeert de gewenste functionaliteit.

````
// Sleep library
DIM timeout

// Sleep for ms milliseconds
sub Sleep(ms)
	// Start Timer 0 as a one-shot timer
	timeout = 0
  TIMERSTART(0,ms,0)
	while timeout == 0
		waitevent
	endwhile
endsub

function HandlerSleepTimer()
	// Set flag to signal timeout and not some other event.
	// Then just return 0 so we pass through the next waitevent
	timeout = 1
endfunc 0

ONEVENT EVTMR0 				CALL HandlerSleepTimer
````

Laten we de code eens analyseren:
'//' is het begin van commentaar. Alle tekens daarna tot het einde van de regel worden genegeerd.

Met 'DIM' definiëren we een variabele, in dit geval met de naam timeout.

Daarna wordt een 'SUB'routine gedefinieerd. Een subroutine is een stuk code dat geen waarde terug gaat geven. Deze subroutine heeft 'Sleep' en heeft 1 argument, een variabele die gevuld wordt met het aantal milliseconden dat bij de aanroep gespecifieerd is.
In de subroutine wordt als eerste de variabele timeout op nul gezet. Daarmee geven we aan dat er nog geen timeout geweest is.
Daarna wordt timer 0 gestart met het aantal milliseconden.
Als laatste hebben we een lus die herhaalt zolang de variabele timeout nul is. In de lus wachten we met 'waitevent' tot een willekeurig event (bijvoorbeeld het aflopen van de timer) optreed. We blijven doorgaan tot timeout ongelijk is aan nul omdat er ook andere events (bijvoorbeeld van een andere timer) op kunnen treden en we dan nog weer moeten gaan slapen.

Als volgende wordt een 'FUNCTION' gedefinieerd. Een function levert een resultaat op (de waarde achter 'endfunc', in dit geval nul). In die functie doen we niks anders dan de variabele timeout op een zetten zodat de lus in de subroutine beëindigd kan worden.

Als laatste vertellen we de module welke code er uitgevoerd moet worden als timer 0 afloopt. (Als het EVENT EVTMR0 optreedt)

Om de code niet telkens opnieuw te hoeven schrijven zet ik die in een bestand met de naam 'sleep.sblib' dat ik dan in alle andere programma's kan importeren.

Let wel op dat je een timer niet twee maal gebruikt! (Tenzij het gebruik niet overlapt)
