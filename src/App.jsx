function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto my-4 px-12 pt-12 font-raleway">
        <header>
          <h1 className="text-8xl">Hello!</h1>
          <p className="my-4">
            My name is <b>Ivan Feklistov</b>, and I am game developer...
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam purus
            eros, accumsan sed nulla non, dictum ultrices elit. Sed interdum
            hendrerit lectus, eu egestas nisl euismod in. Aenean tincidunt diam
            sit amet libero molestie, et tempus nisi pulvinar. Pellentesque ac
            elit velit.
          </p>
          <p className="my-4">
            Got an interesting project? Send me a message at{" "}
            <a
              className="underline text-amber-600"
              href="mailto:example@mail.com"
            >
              i.a.fek@mail.com
            </a>
          </p>
        </header>
        <main>
          <section className="p-6">
            <h2 className="text-amber-600 font-bold">About</h2>
            <p className="p-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              purus eros, accumsan sed nulla non, dictum ultrices elit. Sed
              interdum hendrerit lectus, eu egestas nisl euismod in. Aenean
              tincidunt diam sit amet libero molestie, et tempus nisi pulvinar.
              Pellentesque ac elit velit. <b>Etiam accumsan magna</b> vel quam
              gravida accumsan et eget urna. Nullam eu quam nisi. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Cras diam
              mauris, malesuada non ligula nec, consequat imperdiet turpis.
            </p>
            <p className="p-6">
              <b>Lorem ipsum dolor</b> sit amet, consectetur adipiscing elit.
              Etiam purus eros, accumsan sed nulla non, dictum ultrices elit.
              Sed interdum hendrerit lectus, eu egestas nisl euismod in. Aenean
              tincidunt diam <b>sit amet</b> libero molestie, et tempus nisi
              pulvinar. <b>Pellentesque ac</b> elit velit. Etiam accumsan magna
              vel quam gravida accumsan et eget urna. Nullam eu quam nisi.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
              diam mauris, malesuada non ligula nec, consequat imperdiet turpis.
            </p>
          </section>
          <section className="p-6">
            <h2 className="text-amber-600 font-bold">Skills</h2>
            <div className="flex place-content-around">
              <ul>
                <b>Languages</b>
                <li>C/C++</li>
                <li>C#</li>
                <li>Python</li>
              </ul>
              <ul>
                <b>Engines/Frameworks</b>
                <li>Unreal Engine 5</li>
                <li>Unreal Engine 4</li>
                <li></li>
              </ul>
              <ul>
                <b>Tools</b>
                <li>Git</li>
                <li>GitHub</li>
                <li></li>
              </ul>
            </div>
          </section>
          <section className="p-6">
            <h2 className="text-amber-600 font-bold">Projects</h2>
            <p className="p-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              purus eros, accumsan sed nulla non, dictum ultrices elit. Sed
              interdum hendrerit lectus, eu egestas nisl euismod in. Aenean
              tincidunt diam sit amet libero molestie, et tempus nisi pulvinar.
              Pellentesque ac elit velit. Etiam accumsan magna vel quam gravida
              accumsan et eget urna. Nullam eu quam nisi. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Cras diam mauris,
              malesuada non ligula nec, consequat imperdiet turpis.
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/L99dhRQc64Y?si=IEMjI5ZVp16kqVqQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <p className="p-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              purus eros, accumsan sed nulla non, dictum ultrices elit. Sed
              interdum hendrerit lectus, eu egestas nisl euismod in. Aenean
              tincidunt diam sit amet libero molestie, et tempus nisi pulvinar.
              Pellentesque ac elit velit. Etiam accumsan magna vel quam gravida
              accumsan et eget urna. Nullam eu quam nisi. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Cras diam mauris,
              malesuada non ligula nec, consequat imperdiet turpis.
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9dU2mY-rRDY?si=pjFkoJeTrc2ZzKO4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </section>
          <section>
            <h2>My CV</h2>
          </section>
        </main>
        <footer>
          <ul className="flex">
            <li className="mx-2"><a className="hover:text-amber-600" href="">email</a></li>
            <li className="mx-2">github</li>
            <li className="mx-2">linkedIn</li>
            <li className="mx-2">telegram</li>
            <li className="mx-2">discord</li>
          </ul>
          <div className="my-6 text-center">
            Developed by{" "}
            <a className="text-amber-600" href="https://github.com/torubara">
              torubara
            </a>{" "}
            | 2025 | Inspired by Joeb Rogers
          </div>
          <div className="my-6 text-amber-600 text-center">
            © All rights reserved by Ivan Feklistov
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
