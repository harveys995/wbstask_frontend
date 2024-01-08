import "./App.css";
import DayDropdownMenu from "./DayDropdownMenu";
import CompDropDownMenu from "./CompDropdownMenu";
import Table from "./Table";
import BarChart from "./BarChart";
import { useSelector } from "react-redux";


function App() {
  var competitionName = useSelector((state) => state.comp.compName);
  var bestWorst = useSelector((state) => state.comp.sorting);

  return (
    <div className="grid grid-cols-2 w-full ">
      <div>
        <div className="flex gap-4">
          <div>
            <DayDropdownMenu />
          </div>
          <div>
            <CompDropDownMenu />
          </div>
        </div>
        <div className="pt-4 flex justify-start">
          <div>
            <Table />
          </div>
        </div>
      </div>
      <div >
        <div className="text-black font-bold"> 10 {bestWorst} in {competitionName}</div>
      <div className="flex justify-center h-1/3 w-full">
        <BarChart />
      </div>
      </div>
    </div>
  );
}

export default App;
