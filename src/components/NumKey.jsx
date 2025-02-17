
const NumKey = ({ num, className, onClick }) => {
    return (
        <button onClick={() => onClick(num)} className={`bg-gray-200 p-4 h-20 rounded-md orbitron-semibold justify-center items-center flex text-2xl duration-300 hover:bg-gray-600 hover:text-white transition-all ${className}`}>{num}</button>
    )
}

export default NumKey