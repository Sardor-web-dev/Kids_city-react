import './style.css'
import img1 from './photo_2024-11-07_12-44-43 (2).jpg'
import img2 from './photo_2024-11-07_12-44-45.jpg'

const Products = () => {
    return ( 
        <>
                    <div className="products-part">
                <div className="txt-of-products">
                    <p>Наши товары</p>
                    <span>Самая лучшая и высококачественная детская одежда в Самарканде!</span>
                </div>
                <div className="products">
                    <div className="product1">
                        <div className="product">
                            <img src={img2} alt="" />
                            <p className="p1">одежда для мальчиков</p>
                        </div>
                    <button>Посмотреть в каталоге</button>
                </div>
                <div className="product2">
                    <div className="product">
                        <img src={img1} alt="" />
                        <p className="p2">одежда для девочек</p>
                    </div>
                    <button>Посмотреть в каталоге</button>
                </div>
                </div>
            </div>
        </>
     );
}

export default Products;