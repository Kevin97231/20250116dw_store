/* eslint-disable react/prop-types */
export const MySelect = ({
  value,
  handleSelectCHange,
  children,
  options = [],
}) => {
  // option sera une liste d'objet; objets de liste : { value, label };

  return (
    <div className="flex justify-center items-center mx-auto my-4">
      <select
        value={value}
        onChange={(e) => handleSelectCHange(e.target.value)}
        className="w-fit p-5 bg-primary text-secondary p-3 rounded-lg"
      >
        <option disabled className="text-gray-500">
          {children}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-black"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
