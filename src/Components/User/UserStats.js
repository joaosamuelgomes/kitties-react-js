import React, { useEffect } from 'react';
import { STATS_GET } from '../../Api';
import useFetch from "../../Hooks/useFetch";
import Loading from "../Helper/Loading"
import Error from "../Helper/Error"
import Head from "../Helper/Head"

const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {

  const {data, error, loading, request} = useFetch();

  useEffect(() => {
     async function getData() {
       const {url, options } = STATS_GET();
       await request(url, options);
     }
     getData();  
  }, [request])
  

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data)
  return (
  <React.Suspense fallback={<Loading />}>
    <Head title="Estatísticas" />
    <UserStatsGraphs data={data}/>
  </React.Suspense>
  );
  else return null;
};

export default UserStats;
