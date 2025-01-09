// import { useState } from 'react'
import React, { useEffect, useState } from 'react';
import './App.css'

const keyScape:Array<string> = ["Shift", "Control", "Escape"];
function Editor() {
  const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
  const [content, setContent] = useState<Array<string>>([""]);
  const [currentWord, setCurrentWord] = useState<string>("");

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      const key:string = e.key;
      if(keyScape.includes(key)) return;

      if(key === " ") {
        e.preventDefault();
        // Meneja el ingreso de texto aquí
        setContent([...content, currentWord]);
        setCurrentWord(""); // Reiniciar currentWord después de agregar al contenido
      } else {
        // Agregar la letra actual a currentWord
        console.log(key);
        
        setCurrentWord(prevWord => prevWord + key)
      }

      console.log(content);
    };

    document.addEventListener('keydown', handleKeyUp);

    // Cleanup to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyUp);
    };
  }, [content, currentWord]); // empty dependency array ensures this runs only once

  const handleClick = (e:React.MouseEvent) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPosition({x, y});
  };

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-start overflow-hidden overflow-y-auto py-5 bg-slate-200'>
      {/*Lienzo*/}
      <div className='bg-white w-[80%] min-h-[600px] mb-5' onClick={handleClick}>
        <div className='relative'>
          {content.map((word, wIndex) => (
            <React.Fragment key={wIndex}>
              <word>
                {word.split("").map((char, lIndex) => (
                  <letter key={lIndex}>{char}</letter>
                ))}
              </word>
              <span> </span> {/* Agregar espacio después de cada palabra */}
            </React.Fragment>
          ))}
          <word>
            {currentWord.split('').map((char, lIndex) => (
              <letter key={lIndex}>{char}</letter>
            ))}
          </word>
          <span 
            className='bg-black w-[2px] h-5 inline-flex'
            style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
          />
        </div>
      </div>
      

      {/*Barra del footer*/}
      <div className='w-full h-[20px] bg-slate-400 absolute bottom-0 right-0'>

      </div>
    </div>
  )
}

export default Editor
