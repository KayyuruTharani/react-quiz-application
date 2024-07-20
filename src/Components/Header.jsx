import suppliesLogo from "../assets/school-supplies.png";

export default function Header() {
  return (
    <header className="text-center uppercase mb-6">
      <img
        className="mx-auto h-48 w-96 rounded-xl shadow-md mb-6"
        src={suppliesLogo}
        alt="Supplies logo"
      />
      <h1 className="header text-3xl">React Quiz</h1>
    </header>
  );
}