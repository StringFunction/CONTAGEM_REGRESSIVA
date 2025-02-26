import { useState, useEffect } from "react";

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
    <div className="text-center p-4 flex flex-col bg-slate-500 h-[100vh] justify-around items-center font-boa">
      <div id="video">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/public/video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      </div>
      <h1 className="text-[80px]  tracking-[16px] italic font-boa "></h1>
      <div className="flex text-[60px] backdrop-blur-xs absolute justify-center items-center tracking-[5px] p-[50px] shadow-black rounded-[50px] border">
      <p className="">
        {tempo.mes} Mês {tempo.semana} Semana {tempo.dias} Dias, {tempo.horas}H {tempo.minutos}M
      </p>
      <p className="text-[40px] flex justify-center items-center relative mt-[16px]" > {tempo.segundos <= 9 ? '0'+tempo.segundos : tempo.segundos}s</p>

      </div>
    </div>
  );
};

export default App;
