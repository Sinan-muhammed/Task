import Bottom from "./Bottom";
import Top from "./Top";

export default function App() {
  return (
    <>
      <div>
        {/* Top Component  */}
        <div>
          <Top />
        </div>

        {/* Bottom Component */}
        <div className="pb-[85px]">
          <Bottom />
        </div>
      </div>
    </>
  );
}
