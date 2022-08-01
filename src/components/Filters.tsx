import { useEffect, useState } from 'react';
import { CustomSelect, options } from './styles/CustomSelect';
import {
  Wrapper,
  InputContainer,
  StyledInput,
  StyledIcon,
} from './styles/Filters.styled';

interface FiltersProps {
  filterCards: (country: string, region: string) => void;
};

const Filters:React.FC<FiltersProps> = ({ filterCards }) => {
  const [country, setCountry] = useState<string>('');
  const [region, setRegion] = useState<string>('');

  const handleInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCountry(e.target.value)
  };

  useEffect(() => {
    filterCards(country, region)
  }, [country, region]);

  return (
    <Wrapper>
      <InputContainer>
        <StyledIcon />
        <StyledInput
          type="text"
          name="countryName"
          placeholder="Search for a country..."
          onChange={handleInput}
        />
      </InputContainer>
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        onChange={(region: any, _: any):void => {
          if (!region) {
            setRegion('')
          } else {
            setRegion(region.label)
          }
        }}
      />
    </Wrapper>
  )
}

export default Filters