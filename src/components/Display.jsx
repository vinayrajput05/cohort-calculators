
const Display = ({ equation, result = 0 }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-md orbitron-medium border-2 border-gray-300">
            {equation.length > 0 && <>
                <p className="text-3xl text-right mb-2">{equation.map(t => t.toString())}</p>
                <hr className="text-gray-400" />
            </>}
            <p className="text-4xl text-right mt-1">{result ? result : "0"}</p>
        </div>
    )
}

export default Display