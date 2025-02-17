import NumKey from "./NumKey"

const NumberPad = ({ onClick }) => {
    return (
        <div className="grid grid-cols-4 gap-4 mt-8">
            <NumKey num={"C"} className="col-span-3" onClick={onClick} />
            <NumKey num={"⌫"} onClick={onClick} />
            <NumKey num={1} onClick={onClick} />
            <NumKey num={2} onClick={onClick} />
            <NumKey num={3} onClick={onClick} />
            <NumKey num={"+"} onClick={onClick} />
            <NumKey num={4} onClick={onClick} />
            <NumKey num={5} onClick={onClick} />
            <NumKey num={6} onClick={onClick} />
            <NumKey num={"-"} onClick={onClick} />
            <NumKey num={7} onClick={onClick} />
            <NumKey num={8} onClick={onClick} />
            <NumKey num={9} onClick={onClick} />
            <NumKey num={"*"} onClick={onClick} />
            <NumKey num={"."} onClick={onClick} />
            <NumKey num={0} onClick={onClick} />
            <NumKey num={"="} onClick={onClick} />
            <NumKey num={"/"} onClick={onClick} />
        </div>
    )
}

export default NumberPad