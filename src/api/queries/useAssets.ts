import { constants } from "config/constants";
import { assetsMock } from "data/assestMock";
import { useEffect, useState } from "react";

export type IAsset = {
  wallet_address: string;
  balance: number;
  platform: {
    crypto_id: number;
    symbol: string;
    name: string;
  },
  currency: {
    crypto_id: number;
    price_usd: number;
    symbol: string;
    name: string;
  }
}


export function useAssets(){
  const [data, setData] = useState<IAsset[]>(assetsMock);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(undefined);

  useEffect(() => {
    const load = async ()=> {
      try {
        setLoading(true);
        const response = await fetch("/exchange/assests?id=270", {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "X-CMC_PRO_API_KEY": constants.CMC_PRO_API_KEY,
            "Accept": "application/json",
            "Accept-Encoding":" deflate, gzip",
            "Access-Control-Allow-Origin": "*"
          },
        });
        const data = await response.json();
        setData((Array.isArray(data?.data) ? data?.data : assetsMock));
        //TODO: implement better error handling
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    load();
  },[]);
  return { data, loading, error };
}