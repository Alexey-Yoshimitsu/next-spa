import logo from "../public/favicon.ico"
import styles from '@/styles/Stocks.module.css';
import Image from 'next/image'
import Link from 'next/link'

const Header = ()=>{
  return(
    <div className={styles.HeaderWrapper}>
      <Link href="/"><Image  src={logo} width={40} height={40}/></Link>
      <nav>
        <Link href="/Stocks">Акции</Link>
        <Link href='/Booking'>Бронирование</Link>
        <Link href='/Perscab'>Личный кабинет</Link>
      </nav>
    </div>
  )
}


const Stock = (props)=>{
    return(
        <div className={styles.Stock}>
            <img width={800} height={600}></img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}


const StocksList  = ()=>{
    return(
        <div className={styles.StocksList}>
            <h2>Акции</h2>
            <Stock title="Пригласи друга и получи скидку в 5000" description="Viverra nibh cras pulvinar mattis nunc. Felis imperdiet proin fermentum leo vel orci porta non. Sagittis eu volutpat odio facilisis mauris sit amet massa. Turpis egestas sed tempus urna et pharetra. " ></Stock>
            <Stock title="Пригласи друга и получи скидку в 5000" description="Viverra nibh cras pulvinar mattis nunc. Felis imperdiet proin fermentum leo vel orci porta non. Sagittis eu volutpat odio facilisis mauris sit amet massa. Turpis egestas sed tempus urna et pharetra. " ></Stock>
            <Stock title="Пригласи друга и получи скидку в 5000" description="Viverra nibh cras pulvinar mattis nunc. Felis imperdiet proin fermentum leo vel orci porta non. Sagittis eu volutpat odio facilisis mauris sit amet massa. Turpis egestas sed tempus urna et pharetra. " ></Stock>
            <Stock title="Пригласи друга и получи скидку в 5000" description="Viverra nibh cras pulvinar mattis nunc. Felis imperdiet proin fermentum leo vel orci porta non. Sagittis eu volutpat odio facilisis mauris sit amet massa. Turpis egestas sed tempus urna et pharetra. " ></Stock>
        </div>
    )
}



const Footer = ()=>{
  return(
    <div className={styles.Footer}>
      <div className={styles.col1}>
        <p>г. Москва ул. Академика Миллионщикова</p>
        <a type="tel">+7(800)553535</a>
        <p>Индекс Драйв</p>
        <p></p>
      </div>
      <div className={styles.col2}>
      <Link href="/"><Image  src={logo} width={40} height={40}/></Link>
      <nav>
        <Link href="/Stocks">Акции</Link>
        <Link href='/Booking'>Бронирование</Link>
        <Link href='/Perscab'>Личный кабинет</Link>
      </nav>
      </div>
    </div>
  )
}

function Stocks() {
  return (
    <div className={styles.Stocks}>

      <Header></Header>
      <StocksList></StocksList>
      <Footer></Footer>
      
    </div>
  );
}

export default Stocks;
