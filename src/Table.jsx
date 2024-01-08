import { useSelector } from "react-redux";
import { useState } from "react";
import store from "./Redux/Store/Store";

export default function Table() {
  var competitionData = useSelector((state) => state.comp.compData);
  
  const [isAscending, setIsAscending] = useState(false);

  if (isAscending == false) {
    store.dispatch({
      type: "sorting_UPDATED",
      payload: "Best",
    });
  } else {
    store.dispatch({
      type: "sorting_UPDATED",
      payload: "Worst",
    });
  }

  const sortedData = [...competitionData].sort((a, b) => {
    return isAscending ? a.value - b.value : b.value - a.value;
  });

  let rank = 1;
  for (let i = 0; i < sortedData.length; i++) {
    if (i > 0 && sortedData[i].value !== sortedData[i - 1].value) {
      rank++;
    }
    // Assign rank in reverse order when isAscending is true
    sortedData[i].rank = isAscending ? sortedData.length - rank + 1 : rank;
  }

  const top10Teams = sortedData.slice(0, 10);
  store.dispatch({
    type: "topTen_UPDATED",
    payload: top10Teams,
  });

  return (
    <div className="flex flex-col">
      <div className="pb-4 flex gap-4">
        <button
          className={`text-black font-semibold rounded-lg p-2 ${
            isAscending ? "bg-gray-200" : ""
          }`}
          onClick={() => setIsAscending(true)}
        >
          Ascending
        </button>
        <button
          className={`text-black font-semibold rounded-lg p-2 ${
            isAscending === false ? "bg-gray-200" : ""
          }`}
          onClick={() => setIsAscending(false)}
        >
          Descending
        </button>
      </div>

      <div className="w-full">
        <div className=" border-b border-gray-200">
          <table className=" divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="p-1 px-24 text-center text-xl font-medium text-black"
                >
                  Rank
                </th>
                <th
                  scope="col"
                  className="p-1 px-24 text-center text-xl font-medium text-black"
                >
                  Team
                </th>
                <th
                  scope="col"
                  className="p-1 px-24 text-center text-xl font-medium text-black"
                >
                  Value
                </th>
              </tr>
            </thead>
            <tbody className=" divide-gray-200">
              {sortedData.map((item, index) => (
                <tr key={index}>
                  <td className="p-1 ">
                    <div className="text-lg text-gray-900">{item.rank}</div>
                  </td>
                  <td className="p-1 ">
                    <div className="text-lg text-gray-900">{item.team}</div>
                  </td>
                  <td className="p-1 ">
                    <div className="text-lg text-gray-500">{item.value}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
