import React from "react";
import logo from "../../assets/logo-colorida.png";
import sandwich from "../../assets/images/sandwich.png";
import drinks from "../../assets/images/drinks.png";
import toppings from "../../assets/images/toppingsCheesecake.png";
import combos from "../../assets/images/combos.png";
import salad from "../../assets/images/salad.png";
import cakes from "../../assets/images/cakes.png";
import sandwichPromo from "../../assets/images/sandwich-promo.png";
import drinksPromo from "../../assets/images/drinks-promo.png";
import toppingsPromo from "../../assets/images/toppings-promo.png";
import combosPromo from "../../assets/images/combos-promo.png";
import saladPromo from "../../assets/images/salad-promo.png";
import cakesPromo from "../../assets/images/cakes-promo.png";
import styles from "./HomePage.module.scss";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Lancherias" className={styles.logo} />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/profile" className={styles.link}>
                Perfil
              </Link>
            </li>
            <li>
              <Link to="/cart" className={styles.link}>
                Compras
              </Link>
            </li>
            <li>
              <Link to="/payment" className={styles.link}>
                Pagamento
              </Link>
            </li>
            <li>
              <Link to="/order" className={styles.link}>
                Pedidos
              </Link>
            </li>
            <li>
              <Link to="/track-order" className={styles.link}>
                Histórico
              </Link>
            </li>
            <li>
              <Link to="/feedback" className={styles.link}>
                Avaliações
              </Link>
            </li>
            <li>
              <Link to="/notification" className={styles.link}>
                Notificações
              </Link>
            </li>
            <li>
              <Link to="/location" className={styles.link}>
                Localizações
              </Link>
            </li>
            <li>
              <Link to="/social" className={styles.link}>
                Redes Sociais
              </Link>
            </li>
            <li>
              <Link to="/support" className={styles.link}>
                Suporte
              </Link>
            </li>
          </ul>
        </nav>
      </div>
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
