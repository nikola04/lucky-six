import { useCallback, useEffect, useState } from 'react';
import Ball from './components/Ball';

function App() {
  const [numbers, setNumbers] = useState(new Map());
  const fillOneByOne = useCallback(async () => {
    const map = new Map();
    for(let i = 1; i <= 36; i++){
      map.set(i, Math.floor(Math.random() * 48) + 1);
    }
    setNumbers(map)
  }, [])
  useEffect(() => {
    fillOneByOne();
  }, []);
  return (
    <div className="w-screen h-screen bg-radial-gradient-royalblue">
      <div className='w-full h-full p-4 grid grid-cols-lucky-six grid-rows-9'>
        <Ball id={6} number={numbers.get(6)}/>
        <div className='col-span-4 row-span-6 p-10 flex flex-col gap-6 items-center justify-center'>
          <div className='h-full aspect-square rounded-full bg-white'></div>
          <div className='flex h-16 bg-gray-900 rounded-lg'>
            <Ball id={1} number={numbers.get(1)}/>
            <Ball id={2} number={numbers.get(2)}/>
            <Ball id={3} number={numbers.get(3)}/>
            <Ball id={4} number={numbers.get(4)}/>
            <Ball id={5} number={numbers.get(5)}/>
          </div>
        </div>
        <Ball id={27} number={numbers.get(27)}/>
        <Ball id={7} number={numbers.get(7)}/>
        <Ball id={28} number={numbers.get(28)}/>
        <Ball id={8} number={numbers.get(8)}/>
        <Ball id={29} number={numbers.get(29)}/>
        <Ball id={9} number={numbers.get(9)}/>
        <Ball id={30} number={numbers.get(30)}/>
        <Ball id={10} number={numbers.get(10)}/>
        <Ball id={31} number={numbers.get(31)}/>
        <Ball id={11} number={numbers.get(11)}/>
        <Ball id={32} number={numbers.get(32)}/>
        <Ball id={12} number={numbers.get(12)}/>
        <Ball id={15} number={numbers.get(15)}/>
        <Ball id={18} number={numbers.get(18)}/>
        <Ball id={21} number={numbers.get(21)}/>
        <Ball id={24} number={numbers.get(24)}/>
        <Ball id={33} number={numbers.get(33)}/>
        <Ball id={13} number={numbers.get(13)}/>
        <Ball id={16} number={numbers.get(16)}/>
        <Ball id={19} number={numbers.get(19)}/>
        <Ball id={22} number={numbers.get(22)}/>
        <Ball id={25} number={numbers.get(25)}/>
        <Ball id={34} number={numbers.get(34)}/>
        <Ball id={14} number={numbers.get(14)}/>
        <Ball id={17} number={numbers.get(17)}/>
        <Ball id={20} number={numbers.get(20)}/>
        <Ball id={23} number={numbers.get(23)}/>
        <Ball id={26} number={numbers.get(26)}/>
        <Ball id={35} number={numbers.get(35)}/>
      </div>
    </div>
  );  
}

export default App;
