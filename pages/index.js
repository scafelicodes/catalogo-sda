import React from "react";

import "../styles/globals.scss"
import "../styles/main.scss"

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (<>

<Head>
  <title>Sonho de Algodão - Catálogo 2021</title>
</Head>


<header>

  <Container>
  <Image
  src="/logo.png"
  alt="Sonho de Algodão"
  width="150"
  height="150"

   />
   </Container>
</header>




<section className="hero">
  <Container>
  
    <div className="content">
      <h3>Catálogo</h3>
      <h1>Sonho de Algodão <i class="fas fa-check-circle"></i></h1>
      <p>Para consultar a disponibilidade, <b>clique em comprar</b>. Você será redirecionada para uma de nossas atendentes.</p>

      <ul>
        <li><a href="https://www.instagram.com/sonhodealgodaopijama/"><i class="fab fa-instagram" target="_blank"></i>Instagram </a></li>
        <li><a href="#"><i class="fab fa-whatsapp" target="_blank"></i> WhatsApp</a></li>
        <li><a href="https://goo.gl/maps/77nyMVxx4jqonT9s5" target="_blank"><i class="fas fa-map-marker-alt"></i> Como chegar</a></li>
      </ul>

    </div>

    </Container> 
</section>


<section className="catalog">

<Container>

<Row>
  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="../produtos/002.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$74,90</p>
     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>

   </div>
  </Col>


  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="../produtos/003.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$109,90</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>

   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="../produtos/004.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$12</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>

   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="../produtos/005.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="../produtos/006.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="../produtos/007.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="../produtos/008.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="../produtos/009.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$40</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="../produtos/010.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$42,50</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>

  <Col xs={6} md={4} xl={3}>
   <div className="product">
     <img src="../produtos/011.jpg" />
     <h3>Base HD Bege 02 Líquida Yes!</h3>
     <p className="price">R$59,90</p>

     <a href="#" className="cta-link"><i class="fab fa-whatsapp"></i> Comprar</a>
   </div>
  </Col>
</Row>

</Container>

</section>

    

      <footer>
        <Container>

          <p>Rua Anne Frank, 3997 - Boqueirão, Curitiba - PR</p>

            <a
              href="https://instagram.com/gustavoscafeli"
              target="_blank"
              rel="noopener noreferrer"
            >
            Feito com ❤️ por Gustavo
            
          </a>

          </Container>
      </footer>

    </>
  )
}
