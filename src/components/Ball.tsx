const getColor = (number: number) => {
    switch(number % 8){
        case 0: return 'bg-black'
        case 1: return "bg-red-500"
        case 2: return 'bg-orange-500'
        case 3: return 'bg-yellow-500'
        case 4: return 'bg-orange-900'
        case 5: return 'bg-violet-700'
        case 6: return 'bg-blue-700'
        case 7: return 'bg-green-500'
    }
}
const oddsMap = [10000, 7500, 5000, 2500, 1000, 500, 300, 200, 150, 100, 90, 80, 70, 60, 50, 40, 30, 25, 20, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export default function BallComponent({ id, number }: { id: number, number: number }){
    return <div className="w-full h-full flex items-center justify-center p-4">
        <div className="relative w-11 h-11 rounded-full bg-white shadow-sm">
            <Ball number={number}/>
        </div>
        <div>
            <p className="text-white px-2">{ oddsMap[id-6] }</p>
        </div>
    </div>
}

function Ball({ number }: { number: number }) {
    const color = getColor(number)
    return <div className={`relative overflow-hidden w-full h-full rounded-full ${color} flex items-center justify-center`}>
        <div className="absolute top-1 left-1 w-1/3 h-1/3 bg-white opacity-50 rounded-full blur-sm z-10"></div>
        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
            <p className="text-sm">{number}</p>
        </div>
    </div>
}