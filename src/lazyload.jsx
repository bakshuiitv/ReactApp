import React, { Suspense, useState } from "react";

const ChartWidget = React.lazy(() => import("./components/ChartWidget"));
const TableWidget = React.lazy(() => import("./components/TableWidget"));
const TextWidget = React.lazy(() => import("./components/TextWidget"));

export default function App() {
  const [showChart, setShowChart] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showText, setShowText] = useState(false);

  return (
    <div style={{ padding: "2rem", marginTop: "250px" }}>
      <h1>📊 Lazy Loaded Dashboard</h1>

      <button onClick={() => setShowChart(true)}>Load Chart</button>
      <button onClick={() => setShowTable(true)}>Load Table</button>
      <button onClick={() => setShowText(true)}>Load Text</button>

      <Suspense fallback={<p>⏳ Loading Chart...</p>}>
        {showChart && <ChartWidget />}
      </Suspense>

      <Suspense fallback={<p>⏳ Loading Table...</p>}>
        {showTable && <TableWidget />}
      </Suspense>

      <Suspense fallback={<p>⏳ Loading Text...</p>}>
        {showText && <TextWidget />}
      </Suspense>
    </div>
  );
}
 