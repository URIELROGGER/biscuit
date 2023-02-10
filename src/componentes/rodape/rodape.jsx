import React from "react";
import './rodape.css';

const Rodape = () => {
return (
<footer>
  <div class="container">
    <p>Copyright &copy; 2022. Todos os direitos reservados.</p>
    <nav>
      <ul>
        <li><a href="#">Sobre nós</a></li>
        <li><a href="#">Contato</a></li>
        <li>
            <img src={require("../../images/icon/instagram-icone.png")}></img>
            <a href="https://www.instagram.com/carolmathiasbiscuit/" target="_blank">Istagram</a>
        </li>
      </ul>
    </nav>
  </div>
</footer>
);
};

export default Rodape;