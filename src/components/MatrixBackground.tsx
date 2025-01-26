import { FC, useEffect, useState } from "react";

const MatrixBackground: FC = () => {
  const [columns, setColumns] = useState<number[]>([]);

  const getRandomChar = () => {
    return String.fromCharCode(Math.floor(Math.random() * 94) + 33);
  };

  useEffect(() => {
    const columnCount = Math.floor(window.innerWidth / 20);
    setColumns(Array.from({ length: columnCount }, (_, i) => i));
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
        {columns.map((_, index)=> (
            <div key={index} className="inline-block text-green-500 text-xl font-mono whitespace-nowrap animate-matrix-column" style={{
                animationDelay: `${Math.random()*5}s`,
                marginLeft: `${index*20}px`
            }}>
                {Array.from({length:30}).map((_,i)=>(
                    <div key={i} className="opacity-0 animate-matrix-char" style={{
                        animationDelay: `${i * 0.1}s`
                    }}>{getRandomChar()}</div>
                ))}
            </div>
        ))}
    </div>
  );
};

export default MatrixBackground;
