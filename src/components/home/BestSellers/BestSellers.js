import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";


const BestSellers = () => {
  
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img='https://viviennesabo.ru/upload/iblock/334/au6uxnwa16phfxalkghchhy7q4c67g8u.jpg'
          productName="Viviene Sabo "
          price="35.00"
          color="Lip Balm"
          badge={true}
          des="С бальзамами Balm Plaisir всегда найдется повод для удовольствия. Летние сады Парижа или побережье Французской Полинезии — куда унесут тебя их сладкие фруктовые ароматы?
          Формула с маслами семян конопли и папайи, витаминами Е и С смягчает и питает губы, делает их гладкими и ухоженными. Нежная тающая текстура обволакивает кожу и защищает от потери влаги."
        />
        <Product
          _id="1012"
          img='https://viviennesabo.ru/upload/iblock/f59/y59rxgzvewj2gqd6c6bx7q8b7by74qz0.jpg'
          productName="Viviene Sabo"
          price="180.00"
          color="Lip Balm"
          badge={false}
          des="SIROP DE FRUITS – шесть масел для губ с уникальным фруктовым, ягодным и цветочным ароматом, который не оставит тебя равнодушной.
          Их легкая нелипкая текстура обволакивает губы и не растекается в течение дня. Масло жожоба в составе формулы смягчает и питает кожу, а витамин Е стимулирует ее обновление и придает упругость."
        />
        <Product
          _id="1013"
          img='https://viviennesabo.ru/upload/iblock/0d5/iq2uy7bdzvrxjhj4beu95nhcm1jfmed1.jpg'
          productName="Viviene Sabo"
          price="25.00"
          color="Lip Balm"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1014"
          img='https://viviennesabo.ru/upload/iblock/0b5/8g5u4qrxi50xgkjjr752zvpca8q4b7fq.jpg'
          productName="Viviene Sabo"
          price="220.00"
          color="Lip Balm"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;
