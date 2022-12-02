import { Box, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { InputSearch } from "components/InputSearch";
import { ReactComponent as EthereumIcon }  from "assets/icons/ethereum_mini_logo.svg";

type Props ={ 
  value?: string;
  onChange: (value: string) => void;
}
export function TableSearch(props:Props){
  return (
    <Box display="flex" alignItems="center" mb={2} justifyContent="space-between">
      <Typography variant="h6">Immuna Monitor Portal</Typography>
      <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
        <InputSearch  {...props} />
        <Box display="flex" flexDirection="row" alignItems="center" gap={2} borderRadius="30px" bgcolor="#E0EEFF"  pl="30px">
          <Box  display="flex" flexDirection="row" gap={2} alignItems="center">
            <EthereumIcon  />
            <Typography variant="body2">ETH</Typography>
          </Box>
          <Box bgcolor="#CBE1FF" py="12px" px="30px" borderRadius="30px" mr={0} ml="auto">
            <Typography variant="body2">0xBAD7...E116</Typography>
          </Box>
        </Box>
        <Box bgcolor="#CBE1FF" width="44px" height="44px" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
          <ContentCopyIcon  />
        </Box>
      </Box>
    </Box>
  );
}