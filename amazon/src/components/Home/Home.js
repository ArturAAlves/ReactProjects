import React from 'react'
import "./Home.scss"
import Product from "../Product/Product"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


// carousell img
//https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg
//https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg
//https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg
//https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg

function Home() {
    return (
        <div className="home">
            <div className="home-carousel">
                <Carousel autoPlay={true} infiniteLoop={true} interval={4000} showStatus={false} showThumbs={false} swipeable={true}>
                    <div>
                        <img className="home-carousel-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="" />
                    </div>
                    <div>
                        <img className="home-carousel-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt="" />

                    </div>
                    <div>
                        <img className="home-carousel-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="" />
                    </div>
                    <div>
                        <img className="home-carousel-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg
" alt="" />
                    </div>

                </Carousel>
            </div>


            <div className="home-items-container">
                <div className="home-items-row">
                    <Product
                        id={1}
                        title="Samsung Galaxy A12 | Ram 4G para smartphone grátis e capacidade interna expansível de 64 GB | Câmera principal 48MP | Bateria de 5.000 mAh e carga rápida | Cor Azul "
                        price="159.00"
                        image="https://m.media-amazon.com/images/I/91OIsbTx3RL._AC_UL320_.jpg"
                        rating={3}
                        quantity={1}
                    />

                    <Product
                        id={2}
                        title="Smartphone Samsung Galaxy A52 5G com tela Infinity-O FHD + de 6,5 polegadas, 6 GB de RAM e 128 GB de memória interna expansível, bateria de 4500 mAh e preto super rápido de carregamento"
                        price="395.00"
                        image="https://m.media-amazon.com/images/I/81f4qtOtzcL._AC_UL320_.jpg"
                        rating={3}
                        quantity={1}
                    />
                </div>
                <div className="home-items-row">
                    <Product
                        id={3}
                        title="Oral-B Pro-Expert Protección Profesional Pasta de Dientes, Pack de 12, Limpieza Bucal Completa "
                        price="27.17"
                        image="https://m.media-amazon.com/images/I/51MSqR96+XL._AC_SR400,600_.jpg"
                        rating={4}
                        quantity={1}
                    />
                    <Product
                        id={4}
                        title="Kit de Blanqueamiento Dental-GLAMADOR Blanqueador Dental Profesional, Blanqueamiento de Dientes-12 * Gel Blanqueamiento,3 * Gel Calmante-Cuidado Dental Eficaz,Sin Dolor,Cuidado Dental Casero Perfecto"
                        price="21.98"
                        image=" https://m.media-amazon.com/images/I/6192aQ9HliL._AC_UL320_.jpg"
                        rating={4}
                        quantity={1}
                    />
                    <Product
                        id={5}
                        title="Cabeçotes de substituição de tamanho de caixa postal Oral-B CrossAction, pacote de 8 recargas genuínas com tecnologia CleanMaximiser para escovas de dentes elétricas"
                        price="21.99"
                        image="https://m.media-amazon.com/images/I/41NIr6XbIDL._AC_SR400,600_.jpg"
                        rating={4}
                        quantity={1}
                    />
                </div>


                <div className="home-items-row">
                    <Product
                        id={6}
                        title="Kenwood Prospero + KHC29.H0WH - Processador de alimentos multifuncional, tigela de 4,3L, misture, agite e amasse, liquidificador de vidro de 1,5 l, processador de alimentos de 1,4 l com três discos e espremedor, branco"
                        price="199.00"
                        image="https://m.media-amazon.com/images/I/51wDY7iJMNL._AC_UL320_.jpg"
                        rating={4}
                        quantity={1}
                    />
                    <Product
                        id={7}
                        title="Kenwood KCook Multi CCL401WH - Processador de alimentos multifuncional de 1500 W, até 180ºC, tigela de 4,5 L, 6 programas predefinidos, acessórios incluídos, classe A, cinza / branco [classe de eficiência energética A]"
                        price="465.00"
                        image=" https://m.media-amazon.com/images/I/61fgq2+27vL._AC_UL320_.jpg"
                        rating={4}
                        quantity={1}
                    />
                    <Product
                        id={8}
                        title="Kenwood Persona TTM610 - Torradeira com abertura longa para 2 torradas ou grande, estante confortável, vários programas, 1080 W, prata"
                        price="111.27"
                        image="https://m.media-amazon.com/images/I/51sL7lYBDbL._AC_UL320_.jpg"
                        rating={4}
                        quantity={1}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
