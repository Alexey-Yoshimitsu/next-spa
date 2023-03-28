import logo from "../public/favicon.ico"
import styles from '@/styles/Booking.module.css';
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


const BookingComponent = (props) =>{
    return(
    <div className={styles.BookingComponentWrapper}>
        <div className={styles.BookingComponent}>
            <Image className={styles.Image} width={800} height={600}/>
            <h2>{props.title}</h2>
            <h3>Класс: {props.class}</h3>
            <p>Id: {props.id}</p>
            <p>Номер: {props.number}</p>
            <p>Дата начала аренды: {props.DateStart}</p>
            <p>Дата конца аренды: {props.DateEnd}</p>
            <p>Цена за день: {props.DayCost}</p>
            <p>Местоположение: {props.Geo}</p>
            <button>Забронировать</button> <input type="number"/>
        </div>
    </div>
    )
}
const PaymentMethod = (props) =>{
    return(
    <div className={styles.PaymentMethod}>
        <select>
            <option>**** **** **** 8899</option>
            <option>**** **** **** 4518</option>
            <option>**** **** **** 4995</option>
        </select>
        <button>Оплатить</button>
        <p>Скидка: 25%</p>
    </div>
    )
}

const FinalCost = (props) =>{
    return(
        <div className={styles.FinalCostWrapper}>
    <div className={styles.FinalCost}>
            <h2>Финальная цена: {props.FinalCost}</h2>
            <PaymentMethod></PaymentMethod>
    </div></div>
    )
}





const PersData = (props) =>{
    return(
    <div className={styles.PersDataComponentWrapper}>
        <div className={styles.PersDataComponent}>
            <Image className={styles.Image} width={200} height={300}/>
            <div>
                <h2>{props.fio}</h2>
                <p>Номер телефона: {props.Phone}</p>
                <p>Серия и номер паспорта: {props.number}</p>
                <p>Номер карты: {props.Card}</p>
                <p>Дата рождения: {props.DayBorn}</p>
            </div>            
        </div>
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

function Booking() {
  return (
    <div className={styles.Booking}>
        <Header></Header>
        <BookingComponent
        title="Toyota Camry"
        class="Премиум"
        id="001"
        number="В102ВГ799"
        DateStart="01.01.2023"
        DateEnd="01.02.2023"
        DayCost="3000р"
        Geo="г. Москва ул. Академика Миллионщикова д.20"
        ></BookingComponent>
        <PersData
            fio="Иванов Иван Иванович"
            Phone="+79037004826"
            number="4518 ******"
            Card="**** **** **** 8899"
            DayBorn="17.11.2004"
        ></PersData>
        <FinalCost
        FinalCost="67 500"
        ></FinalCost>
        <Footer></Footer>

    </div>
  );
}

export default Booking;
