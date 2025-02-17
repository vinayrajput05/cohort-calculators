
const Input = ({ label, placeholder, onChange }) => {
    return (
        <div>
            <p className="text-lg font-medium">{label}</p>
            <input className="w-full p-3 rounded-md border" onChange={onChange} placeholder={placeholder} type="number" />
        </div>
    )
}

export default Input