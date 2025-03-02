import { useState, useEffect } from "react";
import video from "./assets/video.mp4"
const App = () => {
  const calcularTempoRestante = () => {
    const dataAlvo = new Date("2025-09-01T00:00:00"); // Data de 01/07/2025
    const agora = new Date();
    const diferenca = dataAlvo - agora;
    console.log(diferenca);
    
    if (diferenca <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const mes = Math.floor(dias  / 31)
    const semana = Math.floor(dias/ 7)
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    return { dias, horas, minutos, segundos,mes, semana };
  };

  const [tempo, setTempo] = useState(calcularTempoRestante());

  useEffect(() => {
    const interval = setInterval(() => {
      setTempo(calcularTempoRestante());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center p-4 flex h-[100vh] justify-around items-center font-boa ">
      <div id="video">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover "
      >
        <source src={video} type="video/mp4"  className="blur-sm"/>
        Seu navegador não suporta vídeos.
      </video>

      </div>
   
      <div className="absolute flex-col text-[45px] gap-5 md:text-[60px]  p-10 inset-shadow-indigo-500  rounded-[40px]  backdrop-blur-sm shadow-pers font-boa2 md:flex md:flex-row ">
      <p className="">{tempo.mes} Mês </p>
      <p>{tempo.semana} Semana</p>
      <p>{tempo.dias} Dias</p>
      <p>{tempo.horas}H</p>
      <p>{tempo.minutos}M</p>
      <p className="md:text-[30px] md:flex md:items-end relative -top-3" > {tempo.segundos <= 9 ? '0'+tempo.segundos : tempo.segundos}s</p>

      </div>
    </div>
  );
};

export default App;
