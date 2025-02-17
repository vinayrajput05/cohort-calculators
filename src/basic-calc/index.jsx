import { evaluate } from 'mathjs'
import { useState } from 'react'
import Display from '../components/Display'
import NumberPad from '../components/NumberPad'

const BasicCalc = () => {
    const [equation, setEquation] = useState([])
    const [result, setResult] = useState("")

    const handleOnCLick = (num) => {
        if (num === '⌫') {
            setEquation(equation.slice(0, equation.length - 1))
            return;
        }
        if (num === "=") {
            const expr = equation.join('');
            const res = evaluate(expr);
            setResult(res)
            return;
        }
        if (num === "C") {
            setEquation([])
            setResult('')
            return;
        }

        setEquation(equation => [...equation, num])
    }


    return (
        <div className="bg-white w-md rounded-2xl p-4 shadow-md">
            <h2 className="text-lg mb-2 orbitron-bold">Calculator</h2>
            <Display equation={equation} result={result && `= ${result}`} />
            <NumberPad onClick={handleOnCLick} />
        </div>
    )
}

export default BasicCalc