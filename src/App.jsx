import { IoIosArrowDown } from 'react-icons/io'
import Navbar from './components/Navbar.jsx'
import ButtonGlobal from './components/ButtonGlobal.jsx'
import Books from './components/Books.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />

      <main className='p-5 lg:py-[40px] lg:px-[60px] flex flex-col items-center gap-[30px] lg:items-start lg:flex-row-reverse'>
        <section className='w-full p-[30px] bg-09 rounded-[22px]'>
          <Books />
        </section>

        <section className='sticky top-5 w-full max-w-[200px] flex flex-col items-center gap-4'>
          <div className='w-full flex flex-wrap gap-1'>
            <ButtonGlobal>
              Bélico
            </ButtonGlobal>
            <ButtonGlobal>
              Terror
            </ButtonGlobal>
            <ButtonGlobal>
              Fantasía
            </ButtonGlobal>
            <ButtonGlobal>
              Poema
            </ButtonGlobal>
            <ButtonGlobal>
              Religioso
            </ButtonGlobal>
            <ButtonGlobal>
              Infantiles
            </ButtonGlobal>
            <ButtonGlobal>
              Ficción
            </ButtonGlobal>
            <ButtonGlobal>
              Literatura
            </ButtonGlobal>
            <ButtonGlobal>
              No-ficción
            </ButtonGlobal>
            <ButtonGlobal>
              Tecnología
            </ButtonGlobal>
            <ButtonGlobal>
              Comics
            </ButtonGlobal>
            <ButtonGlobal>
              Novelas
            </ButtonGlobal>
            <ButtonGlobal>
              Autoayuda
            </ButtonGlobal>
            <ButtonGlobal>
              Superación
            </ButtonGlobal>
            <ButtonGlobal>
              Bíblico
            </ButtonGlobal>
          </div>

          <ButtonGlobal>
            Mostrar más
            <IoIosArrowDown />
          </ButtonGlobal>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
