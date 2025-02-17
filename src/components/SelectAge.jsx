
const SelectAge = () => {
  const ageRange = Array.from({ length: 80 }, (_, i) => i + 5);
  return (
    <div>
      <p className="text-lg font-medium">Your Age</p>
      <select className="w-full p-3 rounded-md border">
      <option value="">Select your age</option>
      {
        ageRange.map(age => <option key={age}>{age} years</option>)
      }
    </select>
    </div>
  )
}

export default SelectAge