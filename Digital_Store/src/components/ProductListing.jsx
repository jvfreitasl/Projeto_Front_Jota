import imagem from "../assets/Layer 1aa 2.png";
import produtos from "../data/produtos.json";

const ProductListing = () => {
  return (
    <>
      <section style={{ backgroundColor: "#FFFFFF" }} className="w-7">
        <ul className="grid list-none p-0">
          {produtos.produtos.map((produto) => (
            <li
              style={{ backgroundColor: "#F9F8FE" }}
              key={produto.id}
              className="col-12 md:col-4 cursor-pointer"
            >
              <div
                style={{ backgroundColor: "#FFFFFF" }}
                className="shadow-3 p-3 border-round-sm"
              >
                <div className="relative">
                  <img
                    className="w-full h-15rem"
                    style={{ objectFit: "contain" }}
                    src={imagem}
                    alt={produto.titulo}
                  />
                  {(produto.id === 1 || produto.id === 2) && (
                    <h6
                      style={{ backgroundColor: "#E7FF86" }}
                      className="absolute top-0 left-0 py-2 px-3 border-round-3xl"
                    >
                      {produto.descontoPorcento}
                    </h6>
                  )}
                </div>
              </div>
              <div className="">
                <h4 style={{ opacity: 0.4 }} className="mb-0">{produto.categoria}</h4>
                <h3 className="mb-0 pb-0 mt-3 text-overflow-ellipsis white-space-nowrap overflow-hidden">
                  {produto.titulo}
                </h3>
                <div className="flex gap-2 pt-0 mt-0">
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
};

export default ProductListing;
