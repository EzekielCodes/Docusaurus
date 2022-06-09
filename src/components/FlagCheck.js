import React from 'react';
import { useState } from 'react';
import { sha256 } from 'js-sha256';

export function FlagInput({ flagNumber }) {
    const [input, setInput] = useState("");
    const flags = [
      "015790140d0443b57a1bdb51f8273eb90a5ee09634f0fafbba119676579a4d26",
      "819b3391a23827acde8b6d024d17beeaf9d03f7fbbac9239e1af90525b6a4865",
      "16df5d34cbf70a5a8f74cf8b7baa8e6678c8838f2213e8a5b6dac26189db208b",
      "ctf{w0w_y0U_4ctU4lly_f0un5_1t}"];

    const flagToCheck = String(flags[flagNumber]);
    // console.log("flagNumber: ", flagNumber);
    // console.log("flags[flagNumber]: ", flags[flagNumber]);
    // console.log("Input:", input)
    return (
      <div class="flag">
        <label>Vlag gevonden? Geef ze hier in om te zien als deze juist is!</label><br/>
        <input type="text" onInput={(foundFlag) => setInput(foundFlag.target.value)} />
        {(input !== "") ?
          (sha256(input) === flagToCheck ? 
          <div><p>Proficiat, dat is de juiste vlag!</p></div> : <div><p>Jammer, dat is niet de vlag!</p></div>)
          :
          "" 
        }
      </div>
    );
  }