import Logo from "../assets/VectorFooter.png";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#1F1F1F" }} className="w-full">
        <section className="flex justify-content-between text-white w-full">
          <div id="school" className="p-3 w-2 m-4 mx-7">
            <div className="flex align-items-center pl-2">
              <img
                style={{ height: "22px", width: "22px" }}
                src={Logo}
                alt="Digital Logo White"
              />
              <h2 className="m-1">Digital Store</h2>
            </div>
            <p className="mt-4 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              fugit dolorem soluta?
            </p>
            <div className="mt-5">
              <i className="pi pi-facebook mr-5 cursor-pointer"></i>
              <i className="pi pi-instagram mr-5 cursor-pointer"></i>
              <i className="pi pi-twitter cursor-pointer"></i>
            </div>
          </div>
          <div id="map" className="flex-column m-4">
            <h3>Informação</h3>
            <ul className="list-none pl-0 flex-column">
              <li className="mb-3 cursor-pointer">Sobre Drip Store</li>
              <li className="mb-3 cursor-pointer">Segurança</li>
              <li className="mb-3 cursor-pointer">Wishlist</li>
              <li className="mb-3 cursor-pointer">Blog</li>
              <li className="mb-3 cursor-pointer">Trabalhe conosco</li>
              <li className="mb-3 cursor-pointer">Meus Pedidos</li>
            </ul>
          </div>
          <div id="category" className="flex-column m-4">
            <h3 className="">Categorias</h3>
            <ul className="list-none pl-0">
              <li className="mb-3 cursor-pointer">Camisetas</li>
              <li className="mb-3 cursor-pointer">Calças</li>
              <li className="mb-3 cursor-pointer">Bonés</li>
              <li className="mb-3 cursor-pointer">Headphones</li>
              <li className="mb-3 cursor-pointer">Tênis</li>
            </ul>
          </div>
          <div id="contact" className="w-2 m-4 mx-7">
            <h3>Contato</h3>
            <p>
              <a
                className="text-white no-underline"
                target="_blank"
                href="https://www.google.com/maps/place/Av.+Santos+Dumont,+1510+-+1+andar+-+Aldeota,+Fortaleza+-+CE,+60150-161/@-3.7326781,-38.5104072,17z/data=!3m1!4b1!4m6!3m5!1s0x7c7485edb300001:0x6782b2efe8bc747b!8m2!3d-3.7326781!4d-38.5104072!16s%2Fg%2F11smbsmkvz?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D"
              >
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </a>
            </p>
            <p className="">(85) 3051-3411</p>
          </div>
        </section>
        <div
          style={{ height: "1px", opacity: 0.3 }}
          className="mx-8 mb-0 bg-white"
        ></div>
        <p className="text-white text-center p-5 m-0">© 2022 Digital College</p>
      </footer>
    </>
  );
};

export default Footer;
