import { formattedDate } from "../FuncComp/ShowMonth.ts";
import { realtime } from "../FuncComp/DaySetup";
export default function ShowArr() {
  return (
    <div>
      <p>{formattedDate}</p>
      <div id={realtime}></div>
    </div>
  );
}
