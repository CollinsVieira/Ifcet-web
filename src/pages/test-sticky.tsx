export function TestSticky() {
  return (
    <div className="w-full pt-[110px] md:pt-[110px]">
      <div className="bg-blue-500 text-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Página de Prueba - Header Fijo</h1>
        <p className="text-xl">Haz scroll hacia abajo para probar el efecto fijo</p>
      </div>
      
      {/* Contenido para generar scroll */}
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="bg-gray-100 p-8 m-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Sección {i + 1}</h2>
          <p className="text-gray-700 mb-4">
            Esta es la sección {i + 1} para generar contenido y probar el scroll. 
            El header debería mantenerse fijo en la parte superior cuando hagas scroll.
          </p>
          <div className="bg-white p-4 rounded border">
            <p>Contenido adicional en esta sección para hacer la página más larga.</p>
          </div>
        </div>
      ))}
      
      <div className="bg-green-500 text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">¡Llegaste al final!</h2>
        <p className="text-xl">El header debería haber permanecido fijo durante todo el scroll</p>
      </div>
    </div>
  );
} 