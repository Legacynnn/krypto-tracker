import React from 'react'
import styles from './Coins.module.css'
import Link from 'next/link'

const Coins = ({name, price, symbol, marketcap, volume, image, priceChange, id}) => {
    return (
        <Link href='/coin/[id]' as={`/coin/${id}`}>
            <a href="" >
                <div className={styles.coinContainer}>
                    <div className={styles.coinRow}>
                        <div className={styles.coin}>
                            <img src={image} alt={name} className={styles.coinImg} />
                            <h1 className={styles.coinTittle}>{name}</h1>
                            <p className={styles.coinSymbol}>{symbol}</p>
                        </div>
                        <div className={styles.coinData}>
                            <p className={styles.coinPrice} >${price}</p>
                            <p className={styles.coinVolume}>${volume.toLocaleString()}</p>
                            {priceChange < 0 ? (
                                <p className={styles.coinPercentRed}>{priceChange.toFixed(2)}%</p>
                            ) : (
                                <p className={styles.coinPercentGreen}>{priceChange.toFixed(2)}%</p>
                            )}
                            <p className={styles.coinMktcap}>
                                Mkt cap: ${marketcap.toLocaleString()}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Coins
