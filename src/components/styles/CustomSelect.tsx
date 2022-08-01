import styled from 'styled-components';
import Select from 'react-select';

interface RegionInterface {
  value: string;
  label: string;
}

export const options:Array<RegionInterface> = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
];

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--elems-color)',
      color: 'var(--font-color)',
      borderRadius: '5px',
      border: 'none',
      padding: '4.5px 30px',
      boxShadow: 'var(--shadow)',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--font-color)',
      border: 'none',
      backgroundColor: state.isSelected
        ? 'var(--bg-color)'
        : 'var(--elems-color)',
      
    }),
  }
})`
  width: 300px;
  border: none;
  font-family: var(--family);

  & > div[id] {
    background-color: var(--colors-ui-base);
  }
  & * {
    color: var(--colors-text) !important;
    font-size: var(--fs-sm);
    font-weight: var(--fw-normal);
  };

  @media (max-width: 768px) {
    width: 70%;
  }
`;