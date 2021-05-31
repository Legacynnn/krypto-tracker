import Layout from '../../components/Layout'
import styles from './Coin.module.css'

const Coin = ({coin}) => {
    return (
        <Layout>
            <div className={styles.coinPage} >
                <div className={styles.coinContainer} >
                    <img src={coin.image.large} alt={coin.name} className={styles.coinImage} />
                    <h1 className={styles.coinName} >{coin.name}</h1>
                    <p className={styles.coinTicker} >{coin.symbol}</p>
                    <p className={styles.coinCurrent} >$USD: {coin.market_data.current_price.usd}</p>
                    <p className={styles.coinCurrent} >$BRL: {coin.market_data.current_price.brl}</p>
                </div>
            </div>
        </Layout>
    )
}

export default Coin

export async function getServerSideProps(context) {
    const {id} = context.query

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

    const data = await res.json()

    return{
        props: {
            coin: data

        }
    }
}