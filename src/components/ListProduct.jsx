import React from "react";
import ItemProduct from "./ItemProduct";

export default function ListProduct() {
  return (
    <div className="container">
      <ItemProduct
        id={1}
        imageProduct={
          "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg"
        }
        nameProduct={"Coca"}
        priceProduct={"6"}
      />
      <ItemProduct
        id={2}
        imageProduct={
          "https://tse1.mm.bing.net/th?id=OIP.hLu09Nrj10lVrW5miPWMlwAAAA&pid=Api&P=0"
        }
        nameProduct={"Fanta"}
        priceProduct={"5"}
      />
      <ItemProduct
        id={3}
        imageProduct={"https://images.ofix.com/product-image/s99509_2.jpg"}
        nameProduct={"Sprite"}
        priceProduct={"5"}
      />
      <ItemProduct
        id={4}
        imageProduct={
          "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg"
        }
        nameProduct={"Ayran"}
        priceProduct={"3"}
      />
      <ItemProduct
        id={5}
        imageProduct={"http://esenlik.com.tr//images/prod/5704.jpg"}
        nameProduct={"Salgam"}
        priceProduct={"4"}
      />
      <ItemProduct
        id={6}
        imageProduct={
          "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg"
        }
        nameProduct={"Cay"}
        priceProduct={"3"}
      />
      <ItemProduct
        id={7}
        imageProduct={
          "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ="
        }
        nameProduct={"Kahve"}
        priceProduct={"10"}
      />
      <ItemProduct
        id={8}
        imageProduct={"http://esenlik.com.tr//images/prod/2928.jpg"}
        nameProduct={"Soda"}
        priceProduct={"4"}
      />
      <ItemProduct
        id={9}
        imageProduct={
          "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg"
        }
        nameProduct={"Bisiklet"}
        priceProduct={"1000"}
      />
      <ItemProduct
        id={10}
        imageProduct={
          "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg"
        }
        nameProduct={"Bugatti Chiron"}
        priceProduct={"2500000"}
      />
      <ItemProduct
        id={11}
        imageProduct={
          "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg"
        }
        nameProduct={"Iskender"}
        priceProduct={"50"}
      />
      <ItemProduct
        id={12}
        imageProduct={
          "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg"
        }
        nameProduct={"Lahmacun"}
        priceProduct={"12"}
      />
      <ItemProduct
        id={13}
        imageProduct={
          "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg"
        }
        nameProduct={"Manikane"}
        priceProduct={"25000000"}
      />
      <ItemProduct
        id={13}
        nameProduct={"Helicopter"}
        priceProduct={"28750000"}
        imageProduct={
          "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg"
        }
      />
      <ItemProduct
        id={14}
        imageProduct={"https://d.neoldu.com/news/57966.jpg"}
        nameProduct={"Luxury Yatch"}
        priceProduct={"17500000"}
      />
      <ItemProduct
        id={15}
        imageProduct={
          "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg"
        }
        nameProduct={"Limosine"}
        priceProduct={"1000000"}
      />
      <ItemProduct
        id={16}
        imageProduct={"https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg"}
        nameProduct={"Ada"}
        priceProduct={"1250000"}
      />
      <ItemProduct
        id={17}
        imageProduct={
          "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg"
        }
        nameProduct={"Stadium"}
        priceProduct={"2500000"}
      />
      <ItemProduct
        id={18}
        imageProduct={
          "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg"
        }
        nameProduct={"Bitcoin"}
        priceProduct={"60000"}
      />
      <ItemProduct
        id={19}
        imageProduct={
          "https://st2.myideasoft.com/idea/fr/55/myassets/products/366/paris-saint-germain-cup-away-stadium-shirt-2021-22-kids-with-messi-30-printing-ss4-p-12087703-u-6v44pc9ht2ynaiyuv5uk-v-af3dfad2f9b44448a3068821419095db_min.jpg?revision=1628627354"
        }
        nameProduct={"Messi Tshirt"}
        priceProduct={"250"} 
      />
    </div>
  );
}
