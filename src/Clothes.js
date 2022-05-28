function Clothes({clothes}){
    return(
        <div className="products">
            {clothes.map((element =>{
                const {id, name, searchTerm, price, image} = element;
                return(
                    <div key={id} className="product-card">

                        <img src={image} alt="clothes" width="300px" height="400px"/>

                        <div className="product-info">
                            <h3>{name}</h3>
                            <h4>{searchTerm}</h4>
                            <h4>$ {price}</h4>
                        </div>
                    

                    </div>
                )
            }))}

        </div>
    )
}

export default Clothes;