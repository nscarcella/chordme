# ChordMe

## Directives

### cm-chord

#### Description

Draws a guitar chord diagram for a given note with all it's variations.

#### Arguments

*note*: name of the scope variable containing the target note. This note must be a javascript object with the following structure:

  _name_: a string with the note's short name to display.

  _variations_: an array of chord variations. every variation must be an array of size 6 (one position for every string, from 1st to 6th) with the number of fret pressed on that string, 0 if it is play on air or null if the string is mute.

  _Example:_
  
  ```javascript
  {
    name: 'A',
    variations:[
      {
        base: 0,
        positions: [0,2,2,2,0,null]
      },
      {
        base: 5,
        positions: [5,5,6,7,7,5]
      },
      {
        base 9,
        positions: [9,10,9,11,12,null]
      }
    ]
  }
  ```
    
*fret-count*: (optional) Number of frets to be drawn on graphic. Make sure it is at least as many as needed for all the note's variations. Defaults to 5.

*string-distance*: (optional) Pixels left between each string. Defaults to 16.

*fret-distance*: (optional) Pixels left between each fret. Defaults to 20.

*air-margin*: (optional) Pixels left between the first fret and the press marks of strings played on air. Defaults to 5.