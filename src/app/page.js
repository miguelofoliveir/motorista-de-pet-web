import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-main-color">
      <div>
        <div className="block w-full">
          <div className="flex justify-center">
            <img
              src="/assets/images/logo-pet.png"
              alt="Logo Motorista pet"
              width="180"
              height="37"
            />
          </div>
          <h2 className="text-lg mx-2 text-orange-400 bg-black rounded-lg  p-3 shadow-lg">
            Site em construção :)
          </h2>
        </div>
      </div>
    </main>
  );
}
