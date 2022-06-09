import React from 'react';
import { useState } from 'react';

const flags = [
    "ctf{h3t_w4s_h3x}",
    "ctf{dit_is_decimal}",
    "ctf{er_zijn_meerdere_base_encodings}",
    "ctf{3nc0d3d_d3_3nc0d1ng}"
];

export function TrialFlags({ flagNumber }) {
    const [input, setInput] = useState("");
    const flagToCheck = String(flags[flagNumber]);

    // console.log("flagNumber: ", flagNumber);
    // console.log("flags[flagNumber]: ", flags[flagNumber]);
    // console.log("Input:", input)

    return (
      <div class="flag">
        <label>Vlag gevonden? Geef ze hier in om te zien als deze juist is!</label><br/>
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