import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  logo,
  sandwich,
  drinks,
  toppings,
  combos,
  salad,
  cakes,
  sandwichPromo,
  drinksPromo,
  toppingsPromo,
  combosPromo,
  saladPromo,
  cakesPromo,
} from "../../assets/images";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div className={styles.menu}>
          <h2>Cardápio</h2>
          <div className={styles.menuItems}>
            <MenuItem image={sandwich} />
            <MenuItem image={drinks} />
            <MenuItem image={toppings} />
            <MenuItem image={combos} />
            <MenuItem image={salad} />
            <MenuItem image={cakes} />
          </div>
        </div>
        <div className={styles.promotions}>
          <h2>Promoções</h2>
          <div className={styles.promoItems}>
            <PromoItem image={sandwichPromo} />
            <PromoItem image={drinksPromo} />
            <PromoItem image={toppingsPromo} />
            <PromoItem image={combosPromo} />
            <PromoItem image={saladPromo} />
            <PromoItem image={cakesPromo} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { to: "/profile", label: "Perfil" },
    { to: "/cart", label: "Compras" },
    { to: "/payment", label: "Pagamento" },
    { to: "/order", label: "Pedidos" },
    { to: "/track-order", label: "Histórico" },
    { to: "/feedback", label: "Avaliações" },
    { to: "/notification", label: "Notificações" },
    { to: "/location", label: "Localizações" },
    { to: "/social", label: "Redes Sociais" },
    { to: "/support", label: "Suporte" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Lancherias" className={styles.logo} />
      </div>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰ 
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={styles.link}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function MenuItem({ image }) {
  return (
    <div className={styles.menuItem}>
      <img src={image} alt="Menu Item" className={styles.menuImage} />
    </div>
  );
}

function PromoItem({ image }) {
  return (
    <div className={styles.promoItem}>
      <img src={image} alt="Promo Item" className={styles.promoImage} />
    </div>
  );
}
