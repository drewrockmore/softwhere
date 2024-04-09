const SelectBox = ({title, options}) => {
    return (
        <div>
            <label htmlFor="location" className="block text-sm font-medium leading-6 text-white">
                {title}
            </label>
            <select
                id="location"
                name="location"
                className="bg-black  border border-[#ACC156] mt-2 block w-full rounded-md py-1.5 pl-3 pr-10 text-white ring-0 focus:ring-0 sm:text-sm sm:leading-6"
                defaultValue={options[0]}
            >
                {options.map((option, index) => (
                    <option key={index}>{option}</option>
                ))}
            </select>
        </div>
    )
}
export default SelectBox