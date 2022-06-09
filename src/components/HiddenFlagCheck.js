import React from 'react';
import { useState } from 'react';

const flags = [
"ROT13",
"ctf{w0w_y0U_4ctU4lly_f0un5_1t}"
];

export function HiddenFlagCheck({ flagNumber }) {
    const [input, setInput] = useState("");
    const flagToCheck = String(flags[flagNumber]);

    // console.log("flagNumber: ", flagNumber);
    // console.log("flags[flagNumber]: ", flags[flagNumber]);
    // console.log("Input:", input)

    return (
      <div class="flag">
        {(flagNumber === "0") ? <div><label>Geef de naam ervan hier in:</label><br/></div> : <div><label>Vlag gevonden? Geef ze hier in om te zien als deze juist is!</label><br/></div>  } 
        <input type="text" onInput={(foundFlag) => setInput(foundFlag.target.value)} />
        {(input !== "") ?
          (input === flagToCheck ? 
          <div><p>Proficiat, dat is de juiste vlag!</p></div> : <div><p>Jammer, dat is niet de vlag!</p></div>)
          :
          "" 
        }
      </div>
      
    );
}