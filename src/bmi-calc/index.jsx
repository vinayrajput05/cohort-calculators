import { useEffect, useState } from "react"
import Display from "../components/Display"
import Input from "../components/Input"
import SelectAge from "../components/SelectAge"

const BmiCalc = () => {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [result, setResult] = useState(0)

    useEffect(() => {
        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            const hInMeters = Number(height) / 100;
            const bmi = Number(weight) / hInMeters ** 2
            setResult(bmi)
        }
    }, [weight, height])

    return (
        <div className="bg-white w-md rounded-2xl p-4 shadow-md">
            <h2 className="text-lg mb-2 orbitron-bold">BMI Calculator</h2>
            <Display equation="" result={result.toFixed(2)} />

            <div className="grid grid-cols-1 gap-y-4 mt-4">
                <SelectAge />
                <Input label="Weight (kg)" placeholder="Enter your weight" onChange={e => setWeight(e.target.value)} />
                <Input label="Height (cm)" placeholder="Enter your weight" onChange={e => setHeight(e.target.value)} />
            </div>
        </div>
    )
}

export default BmiCalc