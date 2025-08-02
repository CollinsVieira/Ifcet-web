export function Aside() {
  return (
    <aside className="h-full py-8 hidden lg:block bg-amber-400 sticky top-0">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Aside</h1>
        <p className="text-sm text-gray-700">
          Contenido del aside que se mantiene fijo en pantallas grandes.
        </p>
      </div>
    </aside>
  );
}