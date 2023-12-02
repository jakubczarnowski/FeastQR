import Select from "react-select";
import { api } from "~/trpc/react";

export const MultiCountriesSelect = ({
  value,
  onChange,
  className,
}: {
  value: string[];
  onChange: (value: string[]) => void;
  className?: string;
}) => {
  const { data, isLoading } = api.languages.getLanguages.useQuery();
  const languagesSelectOptions = data?.map((lang) => ({
    label: lang.name,
    value: lang.id,
  }));

  return (
    <Select
      options={languagesSelectOptions}
      value={languagesSelectOptions?.filter((option) =>
        value.includes(option.value),
      )}
      onChange={(newValue) => onChange(newValue.map((val) => val.value))}
      isSearchable
      isMulti
      isLoading={isLoading}
      className={className}
    />
  );
};
