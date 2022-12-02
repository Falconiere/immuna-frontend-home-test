import { InputAdornment,Input  } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props ={ 
  value?: string;
  onChange: (value: string) => void;
}

export function InputSearch(props:Props){
  const { value, onChange } = props;
  return (
    <Input  
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      sx={{
        backgroundColor: "white",
        border: "1px solid #DCDCDC",
        borderRadius: "20px",
        p:2,
        height: "40px",
        minWidth: "350px"
      }}
    />
  );
}