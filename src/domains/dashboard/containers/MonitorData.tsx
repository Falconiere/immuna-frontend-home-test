import { useCallback, useMemo, useState } from "react";
import { Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { ILableRiskProps, LabelRisk } from "../components/LabelRisk";




import { ReactComponent as ShareIcon } from "../assets/icons/share.svg";
import { ReactComponent as CurrenciesIcon } from "../assets/icons/currency.svg";
import { TableSearch } from "../components/TableSearch";
import { IAsset, useAssets } from "api/queries/useAssets";
import { ModalDetailAsset } from "../components/ModalDetailAsset";




export type IAssetTable = {
  protocol: string;
  pool:string;
  balance: string;
  status: ILableRiskProps["type"]
}

const columns:GridColDef<IAssetTable>[] = [
  { 
    field: "protocol",  
    headerName: "Protocol",
    flex:1,
    renderCell: ({row})=> (
      <>
        <Typography mr={2}>{row.protocol}</Typography>
        <ShareIcon  />
      </>
    )
  },
  {
    field: "pool",
    headerName: "Pool",
    sortable: true,
    flex:1,
    renderCell: ({row})=> (
      <>
        <CurrenciesIcon  />
        <Typography mx={2} minWidth="150px">{row.pool}</Typography>
        <ShareIcon  />
      </>
    )
  },
  {
    field: "balance",
    headerName: "Balance",
    sortable: true,
    flex:1,
  },
  {
    field: "status",
    headerName: "Risk Status",
    type: "string",
    sortable: true,
    minWidth: 200,
    renderCell: ({row})=> <LabelRisk  type={row.status}/>
  },
];

const parseData = (assets:IAsset[]): IAssetTable[]=>{
  return assets?.map((asset:IAsset,idx) => ({
    id:idx,
    protocol: "Uniswap",
    pool: `${asset.wallet_address?.slice(0,6)}...${asset.wallet_address?.slice(-6)}`,
    balance: `${asset.balance}${asset.platform.symbol} /${asset.currency.price_usd} ${asset.currency.symbol}`,
    status: 
    asset.balance > asset.currency.price_usd 
      ? "green" 
      : asset.balance < asset.currency.price_usd 
        ? "red" 
        : "yellow"
  }));
};

export function MonitorData() {
  const { data, loading } = useAssets();
  const [openDetail,setOpenDetail] = useState(false);
  const [searched,setSearched] = useState("");
  const [currentAsset,setCurrentAsset] = useState<IAssetTable>();

  const _rows = parseData(data);

  const filter = useCallback((e: IAssetTable)=> {
    return e.balance?.toLocaleLowerCase().includes(searched) 
    || e.protocol?.toLocaleLowerCase().includes(searched) 
    || e.pool?.toLocaleLowerCase().includes(searched)
    || e.status?.toLocaleLowerCase().includes(searched);
  },[searched]);

  const rows = useMemo(()=>{
    return !searched?.length ? _rows : _rows.filter(filter); 
  },[_rows,searched,filter]);
  
  return (
    <>
      <ModalDetailAsset  
        open={openDetail}
        onClose={()=> setOpenDetail(!openDetail)}
        data={currentAsset}
      />
      <TableSearch value={searched} onChange={setSearched} />
      <DataGrid 
        rows={rows} 
        columns={columns} 
        autoPageSize 
        loading={loading}
        onCellClick={({row})=> {
          setCurrentAsset(row);
          setOpenDetail(true);
        }}
        sx={{
          "&.MuiDataGrid-root": {
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.07)",
            borderRadius: "5px",
            border: 0,
            maxHeight:"calc(100% - 65px)",
            ".MuiDataGrid-row":{
              minHeight: "65px!important",
              paddingX: 4,
              alignItems:"center"
            },
            ".MuiDataGrid-row:nth-child(even)":{
              backgroundColor: "#E6F0FF",
            },  
            ".MuiDataGrid-cell":{
              borderBottom: "none",
           
              "&:focus":{
                outline: "none"
              }
            },
          },
          ".MuiDataGrid-columnHeaders":{
            border: 0,
            backgroundColor: "#E6F0FF",
            paddingX: 4
          }
        }}
      />
     
    </>
  );
}