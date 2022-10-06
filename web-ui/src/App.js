import './App.css';
import ShellHubData from '../src/ShellHubData.json';



function App() {
  const data = ShellHubData;
  const fileContent = ShellHubData.stepsContent;
  const getHeadings = () => {
    return Object.keys(data.tableContent[0]);
  }
  const theadData = getHeadings();
  const tbodyData = data.tableContent;

  return (
    <div className="App">
      <div className="hub-content">
        <div className="child-content">
          <div>
            <p className="title-header" >{data.hub_title}</p>
          </div>
          <div className="text-small-01" style={{color:"#707070"}}>
            {data.hub_info}
          </div>
        </div>
        <div className="child-content">
          <table>
            <thead>
              <tr>
                {theadData.map((heading, index) => {
                  return <th key={heading + index}>{heading}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {tbodyData.map((row, index) => {
                return <tr key={index}>
                  {theadData.map((key, index) => {
                    return <td key={row[key]}>{row[key]}</td>
                  })}
                </tr>;
              })}
            </tbody>
          </table>
        </div>
        <div className="step-content" >
          {fileContent.map((item, idx) => {
            return <div className="file-content" id={"step-" + idx}>
              <div className="sub-item">
                <div>
                  <p className="text-large-1">{"Step " + (item.step_no) + ": "} {item.title}</p>
                </div>
                {item.table && <>
                  <div>
                    <p className="text-small-bold">
                      {item.table.title}
                    </p>
                    <p className="text-large-1" >
                      {item.table.total}
                    </p>
                    {item.table.table_item.map((tableItem) => {
                      return <div className="div-item">
                        <p className="text-small-list-01">{tableItem.name}</p>
                        <p className="text-small-bold">{tableItem.amount}</p>
                      </div>

                    })
                    }
                  </div>
                </>
                }
                <div>
                  <p className="text-small-01">
                    {item.summary}
                  </p>
                </div>
                {item?.step_details?.map((step, index) => {
                  return <div className="div-list-1">
                    <div className="circle-1">
                      <p className="alpha-text-1">{String.fromCharCode(index + 65)}</p>
                    </div>
                    <p className="text-small-list">{step}</p>
                  </div>
                })}

                <div>
                  <p className="text-small-01" >
                    For a more detailed description of your 1099-K, visit our <u>Help Hub</u>.
                  </p>
                </div>
                <div>
                  <p className="text-small-01">
                    You can always download current and previous 1099-K forms from the <u>Taxes</u> page.
                  </p>
                </div>
              </div>
              <div className="image-css">
                <img src={""} className="App-logo" alt="logo" />
              </div>
            </div>
          })}

        </div>
      </div>
    </div>

  );
}

export default App;
