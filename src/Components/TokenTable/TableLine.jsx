import React from 'react'
import styles from './styles.module.scss'
import { colors } from '../../Helpers/Colors'
import Circle from '../UI/Circle'

export default function TableLine({item, onBuy}) {
  return (
    <tr style={{background: colors[item.status].background, cursor: 'pointer'}}>
      <th className={styles.bodyCells}>
        <div className={styles.projectCircle}>
            <Circle color={colors[item.status].circleColor} width='13' className={styles.circleIcon}/>
            <span>
             {item.name}
            </span>  
        </div>
      </th>
      <th className={styles.bodyCells}>{item.type}</th>
      <th className={styles.bodyCells}>{item.conditions.replace('x', 'x ')}</th>
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
