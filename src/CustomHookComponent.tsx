import { useState, useEffect, useMemo } from "react";

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}
function useFetchData<Payload>(url: string): {
  data: Payload | null;
  loading: boolean;
} {
  const [data, setData] = useState<Payload | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Payload) => {
        setData(d);
        setLoading(false);
      });
  }, [url]);
  return {
    data,
    loading,
  };
}

// ERROR: TS18047: 'data' is possibly 'null'. use '!' to ignore the possibility of 'null'.
function CustomHookComponent() {
  const { data } = useFetchData<Beverage[]>("/tap.json");
  const specificTap = useMemo(() => {
    return (data || []).filter((bev) => bev.beverageStyle.includes("Pilsner"));
  }, [data]);

  return (
    <div>
      {specificTap.length && (
        <img src={specificTap[0].logo} alt="Beverage logo" />
      )}
    </div>
  );
}
export default CustomHookComponent;
