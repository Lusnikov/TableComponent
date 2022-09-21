import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { colors } from '../../Helpers/Colors'
import Circle from '../UI/Circle'
import styles from './styles.module.scss'

export default function TableLine({item, onBuy}) {
  const navigate = useNavigate()
  return (
    <tr style={{background: colors[item.status].background, cursor: 'pointer'}} onClick={() => navigate(`/product/${item.id}`)}>
      <th className={styles.bodyCells}>
        <div className={styles.projectCircle}>
            <Circle color={colors[item.status].circleColor} width='13' className={styles.circleIcon}/>
            <span>
             {item.name}
            </span>  
           
        </div>
      </th>
      <th className={styles.bodyCells}>{item.type}</th>
      <th className={styles.bodyCells}>{item.conditions} - сформировать</th>
      <th className={styles.bodyCells}>{item.volume}</th>
      <th className={styles.bodyCells}>{item.roi} %</th>
      <th className={styles.bodyCells}>{item.free}</th>
      <th className={styles.bodyCells}>{item.hedge} %</th>
      <th className={styles.bodyCells}>
        <button className={styles.buyButton} onClick={onBuy(item)}>
          Buy
        </button>
      </th>
   </tr>
  )
}
