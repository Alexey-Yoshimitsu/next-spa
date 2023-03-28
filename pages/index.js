import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Router from "next/router";
import logo from "../public/favicon.ico";
import { useState } from "react";

const Header = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <Link href="/">
        <Image src={logo} width={40} height={40} />
      </Link>
      <nav>
        <Link href="/Stocks">Акции</Link>
        <Link href="/Booking">Бронирование</Link>
        <Link href="/Perscab">Личный кабинет</Link>
      </nav>
    </div>
  );
};

const Novost = (props) => {
  return (
    <div className={styles.Novost}>
      <Image width={800} height={600} />
      <h3>{props.title}</h3>
      <p>{props.decription}</p>
      <button>Подробнее</button>
    </div>
  );
};

const Novosti = () => {
  return (
    <div className={styles.Novosti}>
      <Novost
        title="Весна, Новые Тарифы"
        decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae suscipit tellus mauris a diam maecenas sed enim. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. At risus viverra adipiscing at in tellus integer feugiat scelerisque. "
      ></Novost>
      <Novost
        title="Весна, Новые Тарифы"
        decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae suscipit tellus mauris a diam maecenas sed enim. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. At risus viverra adipiscing at in tellus integer feugiat scelerisque. "
      ></Novost>
      <Novost
        title="Весна, Новые Тарифы"
        decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae suscipit tellus mauris a diam maecenas sed enim. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. At risus viverra adipiscing at in tellus integer feugiat scelerisque. "
      ></Novost>
      <Novost
        title="Весна, Новые Тарифы"
        decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae suscipit tellus mauris a diam maecenas sed enim. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. At risus viverra adipiscing at in tellus integer feugiat scelerisque. "
      ></Novost>
      <Novost
        title="Весна, Новые Тарифы"
        decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae suscipit tellus mauris a diam maecenas sed enim. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. At risus viverra adipiscing at in tellus integer feugiat scelerisque. "
      ></Novost>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.col1}>
        <p>г. Москва ул. Академика Миллионщикова</p>
        <a type="tel">+7(800)553535</a>
        <p>Индекс Драйв</p>
        <p></p>
      </div>
      <div className={styles.col2}>
        <Link href="/">
          <Image src={logo} width={40} height={40} />
        </Link>
        <nav>
          <Link href="/Stocks">Акции</Link>
          <Link href="/Booking">Бронирование</Link>
          <Link href="/Perscab">Личный кабинет</Link>
        </nav>
      </div>
    </div>
  );
};


//let titleStates = ["Довериек нам", "Нам доверяют множество клиентов","Приведи друга и получи 5000 бонусов"]
// let [titleState, SetTitleState]  = useState("Довериек нам")
// const Slidest  = ()=>{
//     setTimeout(()=>{for(i in titleStates){
//       SetTitleState = i
//       console.log("slide")
//     }}, 3000)
//
// }

const Doverie = () => {
  const Slide = (props) => {
  return (
    <div className={styles.Slide}>
      <Image className={styles.Image} width={800} height={600} />
      <h2>{props.title}</h2>
    </div>
  );
};
  //Slidest()
  let titleStates = [
    "Доверие к нам",
    "Нам доверяют множество клиентов",
    "Приведи друга и получи 5000 бонусов",
  ];
  return (
    <div className={styles.DoverieWrapper}>
      <div className={styles.Doverieslivder}>
          <Slide title={titleStates[2]}></Slide>
      </div>
    </div>
  );
};

const Auto = (props) => {
  return (
    <div className={styles.Auto}>
      <Image width={250} height={200} />
      <h3>{props.title}</h3>
      <span>Класс: {props.classAuto}</span>
      <p>{props.decription}</p>
      <button>Подробнее</button>
    </div>
  );
};

const Categories = () => {
  return (
    <div className={styles.CategoriesWrapper}>
      <div className={styles.List}>
        <Auto
          title="Toyota Camry"
          classAuto="B"
          decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ></Auto>
        <Auto
          title="Toyota Avensis"
          classAuto="C"
          decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ></Auto>
        <Auto
          title="Toyota Corolla"
          classAuto="D"
          decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ></Auto>
        <Auto
          title="Toyota Alphard"
          classAuto="V"
          decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ></Auto>
        <Auto
          title="Hyndai Solaris"
          classAuto="D"
          decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ></Auto>
        <Auto
          title="Hyndai Creta"
          classAuto="D"
          decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ></Auto>
        <Auto
          title="Hyndai Sonata"
          classAuto="B"
          decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ></Auto>
        <Auto
          title="Kia Rio"
          classAuto="B"
          decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ></Auto>
        <Auto
          title="Kia Optima"
          classAuto="B"
          decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ></Auto>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.App}>
        <Header></Header>
        <Doverie></Doverie>
        <Categories></Categories>
        <Novosti></Novosti>
        <Footer></Footer>
      </main>
    </>
  );
}
