import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { CustomSelect } from './CustomSelect';

interface RegionInterface {
  value: string;
  label: string;
}

const options:Array<RegionInterface> = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;
const InputContainer = styled.div`
  position: relative;
  width: 35%;
`;
const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 15px 30px 15px 60px;
  background-color: var(--elems-color);
  color: var(--font-color);
  box-shadow: var(--shadow);

  &::placeholder {
    color: var(--font-color);
    font-family: var(--family);
    font-weight: var(--fw-normal);
  };
`;
const StyledIcon = styled(FaSearch)`
  position: absolute;
  top: 13px;
  left: 25px;
`;

interface FiltersInterface {
  filterCards: (country: string, region: string) => void;
};

const Filters:React.FC<FiltersInterface> = ({ filterCards }) => {
  const [country, setCountry] = useState<string>('');
  const [region, setRegion] = useState<string>('');

  useEffect(() => {
    filterCards(country, region)
  }, [country, region])

  return (
    <Wrapper>
      <InputContainer>
        <StyledIcon />
        <StyledInput
          type="text"
          name="countryName"
          placeholder="Search for a country..."
          onChange={(e) => setCountry(e.target.value)}
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