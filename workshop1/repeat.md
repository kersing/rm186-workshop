# Herhalen
In smartBASIC zijn er verschillende manieren om code meerdere malen uit te voeren.

## FOR ... NEXT
De simpelste is de FOR NEXT lus.

````
#include "sleep.sblib"

DIM i
FOR i = 1 TO 20
  PRINT i;"\n"
  sleep(1000)
NEXT
````
(Kan ook van 20 naar 1 met een DOWNTO)

## WHILE
Een andere oplossing is een 'while' lus. Die wordt uitgevoerd zolang de conditie waar is. De volgende code doet hetzelfde als bovenstaande voorbeeld:
````
#include "sleep.sblib"

DIM i
i = 1
WHILE i < 21
  PRINT i;"\n"
  i = i + 1
  sleep(1000)
ENDWHILE
````

## DO .. UNTIL, DO .. DOWHILE
Bij de 'until' variant wordt de code uitgevoerd zolang de conditie onwaar is, bij 'dowhile' zolang de conditie waar is.
````
#include "sleep.sblib"

DIM i
i = 1
DO
  PRINT i;"\n"
  i = i + 1
  sleep(1000)
UNTIL i > 20
````

## Met een timer
Een heel andere manier om dezelfde lus uit te voeren is met gebruik van een timer.
````
DIM i

function handletimer1()
   PRINT i;"\n"
   i = i + 1
   IF i < 21 THEN
     TIMERSET(1, 1000, 0)
   ENDIF
endfunc

i = 1
TIMERSET(1, 1000, 0)
````

Of met een repeterende timer:
````
DIM i

function handletimer1()
   PRINT i;"\n"
   i = i + 1
   IF i > 20 THEN
     TIMERCANCEL(1)
   ENDIF
endfunc

i = 1
TIMERSET(1, 1000, 1)
````
