# Basis LoRaWAN programma
Na alle voorbereidingen zijn we eindelijk aangekomen op het punt dat we een programma kunnen laden om data te verzenden naar TTN.

Hieronder staat een basis programma voor dit doel. Het zendt vaste data (een 1) omdat we nog geen sensor hebben om waarden van door te geven.

````
//
// Simpel OTAA voorbeeld.
//

// Importeer RM definities
#include "RM1xx-defs.h"

// Definieer de zend interval en eerste zend interval
#define INTERVAL ( 5 * 60 * 1000 ) // 5 minuten
#define FIRSTINT ( 10 * 1000 ) // 10 seconden

// Definieer de benodigde variabelen
DIM data$
DIM rc
DIM joined

// Join is geslaagd
// Herstart de timer met de interval voor het eerste packet
function LoraJoined() As Integer
	// Schedule first transmission
	PRINT "Joined\n"
	TimerCancel(1)
	joined = 1
    TimerStart(1, FIRSTINT, 0)
endfunc 1

// Verzenden van een packet is afgerond, inclusief wachten op retour data
function LoraTxComplete() As Integer
endfunc 1

// Verzenden van data is mislukt met een timeout
function LoraTxTimeout() As Integer
endfunc 1

// Zend data
// Cancel een eventueel lopende timer,
// controleer of we al gejoined zijn en zend data als dat het geval is.
// Herstart join als we nog niet gejoined zijn.
// Start de timer opnieuw voor de volgende poging.
FUNCTION SendData() AS Integer
	PRINT "SendData, joined = ";joined;"\n"
	TimerCancel(1)
	IF joined == 1 THEN
		data$ = "1"
		PRINT "Sending data\n"
		rc = LORAMACTxData(1,data$,0)
		PRINT "Send rc:";rc;"\n"
	else
		PRINT "Attemp join again\n"
		rc = LORAMACJoin(1)
	endif
	TimerStart(1, INTERVAL, 0)
endfunc 1

// Handel fout condities af. (Negeer ze gewoon)
SUB HandleOnError()
	PRINT "\nERROR Handler called!\n"
ENDSUB

// Handel ontvangen data af (negeer voor nu)
FUNCTION LoraRxData() as INTEGER
	PRINT "Data received"
ENDFUNC 1

// main code, zet alle event handlers.
ONEVENT EVTMR1 				CALL SendData
ONEVENT EVLORAMACJOINED 	CALL LoraJoined
ONEVENT EVLORAMACTXCOMPLETE CALL LoraTxComplete
ONEVENT EVLORAMACTXTIMEOUT 	CALL LoraTxTimeout
ONEVENT EVLORAMACRXDATA 	CALL LoraRxData

ONERROR NEXT HandleOnError
ONFATALERROR NEXT HandleOnError

// Maak de te zenden data leeg.
data$ = ""

PRINT "\nstarting LoRaWAN operation\n"

//
// Start LoRaWAN
//
// Start timer en start Join procedure
joined = 0
TimerStart(1, INTERVAL, 0)
PRINT "Start joining\n"
rc = LORAMACJoin(1)

// Loop forever
do
	WAITEVENT
until 0````
