import BasicCalc from "./basic-calc"
import BmiCalc from "./bmi-calc"

const App = () => {
    return (
        <div className="w-full flex p-10 justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <BasicCalc />
                <BmiCalc />
            </div>
        </div>
    )
}

export default App