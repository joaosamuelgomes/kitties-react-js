import React, { useState, useEffect } from 'react'
import styles from "./UserStatsGraphs.module.css"
import {VictoryBar, VictoryPie, VictoryChart} from "victory";

const UserStatsGraphs = ({data}) => {
    const [graph, setGraph] = useState([]);
    const [total, setTotal] = useState(0);

useEffect(() => {
    const graphData = data.map(item => {
        return {
            x: item.title,
            y: Number(item.acessos)
        }
    })

    setTotal(data.map(({acessos}) => Number(acessos)).reduce((a, b) => a + b));

    setGraph(graphData);

}, [data]);


  return (
    <section className={`${styles.graph} animeRight`}>
        <div className={`${styles.total} ${styles.graphItem}`}>
            <p>Acessos: {total}</p>
        </div>

        <div className={styles.graphItem}>
            <VictoryChart>
            <VictoryBar alignament="start" data={graph}/>
            </VictoryChart>

        </div>  
        
    </section>
  )
}

export default UserStatsGraphs;