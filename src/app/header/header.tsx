export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "#FDF8BF",
      }}
    >
      <div className="flex px-8 py-3 justify-between">
        <div className="font-bold text-3xl flex justify-center items-center">
          Stockholm.
        </div>
        <div className="text-2xl justify-center">About</div>
        <div className="text-2xl justify-center">Docs</div>
        <div
          style={{
            backgroundColor: "white",
            border: "2px solid black",
            padding: "0.1rem",
            borderRadius: "1px",
          }}
        >
          <div className="font-bold justify-center">Launch App</div>
        </div>
      </div>
    </div>
  );
}
