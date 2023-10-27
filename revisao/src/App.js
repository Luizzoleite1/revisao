import Imagem from "./img/foto.png"
import './App.css';
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
    <ProductCard
    titulo="Sony Alpha 7 III"
    imagem={Imagem}
    alt="Sony Alpha 7 III"

    descricao="Com um design retroiluminado, o sensor CMOS Exmor R FullFrame de 
    24,2 megapixels trabalha com o processador de imagem BIONZ X para fornecer fotos 
    e vídeos de alta resolução, minimizando o ruído e melhorando a velocidade.

    Esta estrutura de sensor funciona com um design de lente no chip sem intervalos 
    e um revestimento anti-reflexo para melhorar a absorção de luz e aprimorar os detalhes."

    preco="RS12.999"

    caracteristicas="Marca: Sony
    Resolução máxima de imagem da webcam: 24,2 MP
    Tamanho do Sensor de Fotos: 35.6 × 23.8mm
    Estabilização da imagem: IBIS Sistema de estabilização no corpo, Estabilização de Imagem
    Velocidade máxima do obturador: 1/8000 Segundos
    Velocidade mínima do obturador: 1/8000 Segundos
    Descrição da medição: Avaliativa
    Tipo de controle de exposição: Automático
    Fator de forma: Mirrorless
    Resolução estática efetiva: 24.2"

    />
    </div>
  );
}

export default App;
