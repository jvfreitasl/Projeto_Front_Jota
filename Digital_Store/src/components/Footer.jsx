const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#1F1F1F" }} className="w-full">
        <section className="flex justify-content-center text-white w-full">
          <div id="school" className="w-2 m-2">
            <h2>Digital Store</h2>
            {/* <img
              src="Digital_Store/src/assets/VectorFooter.png"
              alt="Digital Logo White"
            /> */}
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              fugit dolorem soluta? Veniam ex vero molestias.
            </p>
          </div>
          <div id="map" className="flex-column m-2 w-2">
            <h3>Informação</h3>
            <ul className="list-none">
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </div>
          <div id="category" className="w-2 m-2">
            <h3 className="">Categorias</h3>
            <ul className="list-none">
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>
          <div id="contact" className="w-2 m-2">
            <h3>Contato</h3>
            <p>
              <a className="text-white no-underline"
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
          className="mx-6 mb-0 bg-white"
        ></div>
        <p className="text-white text-center p-5 m-0">© 2022 Digital College</p>
      </footer>
    </>
  );
};

export default Footer;
