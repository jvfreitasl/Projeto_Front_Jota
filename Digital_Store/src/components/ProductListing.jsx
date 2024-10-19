import imagem from "../assets/Layer 1aa 2.png";
import produtos from "../data/produtos.json";

const ProductListing = () => {
  return ( 
    <>
      <section>
        <ul className="grid list-none p-0">
          {produtos.produtos.map((produto) => (
            <li key={produto.id} className="col-12 md:col-3">
              <div className="shadow-4 p-3 border-round-md">
                <div className="relative">
                  <img
                    className="w-full"
                    style={{ height: "300px", objectFit: "contain" }}
                    src={imagem}
                    alt={produto.titulo}
                  />
                  {/* <h6 className="absolute top-0 right-0 bg-primary py-1 px-3 border-round-md">
                      {product.rating.rate}
                    </h6> */}
                </div>
                <h3 className="mb-0 text-overflow-ellipsis white-space-nowrap overflow-hidden">
                  {produto.titulo}
                </h3>
                <div className="flex gap-2">
                  <h2>
                    <del style={{ opacity: 0.3 }}>{produto.desconto}</del>
                  </h2>
                  <h2 className="mb-0">{produto.valor}</h2>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
   );
}
 
export default ProductListing;