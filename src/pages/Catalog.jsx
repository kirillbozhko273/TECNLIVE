
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

function Products() {

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("https://techlive-api.onrender.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddToCart = (item) => {

  const user = localStorage.getItem("user");

  if (!user) {
    navigate("/auth");
    return;
  }

  addToCart({
    id: item.id,
    name: item.name,
    price: item.price,
    img: item.image
  });

};

const filteredProducts =
  selectedCategory === "Все"
    ? products
    : products.filter(
        (item) => item.category === selectedCategory
      );

  return (
    <>
      <Helmet>
        <title>
          Каталог — TECHLIVE
        </title>

        <meta
          name="description"
          content="Каталог игровых ПК, клавиатур, мониторов и техники TECHLIVE."
        />
      </Helmet>

      <section className="catalog-page">

        <div className="catalog-top">
          <h1>Каталог</h1>

          <p>
            Премиальная техника и игровые решения
          </p>
        </div>

        <div className="catalog-layout">

          <aside className="catalog-sidebar">

            <h3>Категории</h3>

            <button onClick={() => setSelectedCategory("Все")}>
  Все товары
</button>

<button onClick={() => setSelectedCategory("ПК")}>
  Игровые ПК
</button>

<button onClick={() => setSelectedCategory("Ноутбуки")}>
  Ноутбуки
</button>

<button onClick={() => setSelectedCategory("Комплектующие")}>
  Комплектующие
</button>

<button onClick={() => setSelectedCategory("Клавиатуры")}>
  Клавиатуры
</button>

<button onClick={() => setSelectedCategory("Мыши")}>
  Мыши
</button>

<button onClick={() => setSelectedCategory("Мониторы")}>
  Мониторы
</button>

            <div className="sidebar-divider"></div>

            <h4>Цена</h4>

            <div className="price-box">
              <input
                type="text"
                placeholder="От"
              />

              <input
                type="text"
                placeholder="До"
              />
            </div>

            <div className="sidebar-divider"></div>


            <div className="premium-box">
              <span>TECHLIVE</span>

              <p>
                Premium gaming
                <br />
                experience
              </p>
            </div>

          </aside>

          <div className="catalog-grid">

            {filteredProducts.map((item) => (

              <div
                className="catalog-card"
                key={item.id}
              >

                <div className="catalog-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="catalog-content">

                  <h3>{item.name}</h3>

                  <span>{item.price} ₽</span>

                  <button
  onClick={() =>
    handleAddToCart(item)
  }
>
  Добавить в корзину
</button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default Products;