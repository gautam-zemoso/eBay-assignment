import './App.css';
import SellHubData from '../src/SellHubData.json';
import clsx from 'clsx'; 



function App() {
  const data = SellHubData;
  const fileContent = SellHubData?.stepsContent;
  const getHeadings = () => {
    return Object.keys(data.tableContent[0]);
  }
  const theadData = getHeadings();
  const tbodyData = data?.tableContent;

  return (
    <div className="App">
      <div className="hub-content">
        <div className="child-content">
          <div>
            <p className="title-header" >{data.hub_title}</p>
          </div>
          <div className={clsx("text-small-01","text-small-color")}>
            {data.hub_info}
          </div>
        </div>
        <div className="child-content">
          <table>
            <thead>
              <tr>
              <th key={theadData[0]}>{theadData[0]}</th>
              <th></th>
              <th key={theadData[2] }>{theadData[2]}</th>
              <th></th>
              </tr>
            </thead>
            <tbody>
              {tbodyData?.map((row, index) => {
                return <tr key={index}>
                  <td >{row.Content}</td>
                  <td ><a href={"#step-" + index}>{row.jumpToLink}</a></td>
                  <td >{row['Files needed']}</td>
                  <td style={{color:"#3665F3"}}>{row.Download}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
        <div className="step-content" >
          {fileContent?.map((item, idx) => {
            return <div className="file-content" id={"step-" + idx}>
              <div className="sub-item">
                <div>
                  <p className="text-large-1">{"Step " + (item.step_no) + ": "} {item.title}</p>
                </div>
                {item.table && <>
                  <div className="step-info">
                    <div className='item-table'>
                        <p className={"text-small-bold"}>
                          {item.table.title}
                        </p>
                        <p className={"text-large-1"} >
                          {item.table.total}
                        </p>
                    </div>
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
                <div className='div-item-margin'>
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

                <div className='div-item-margin'>
                  <p className="text-small-01">
                  <div  dangerouslySetInnerHTML={{__html:item["help_link"]}}></div>
                  </p>
                </div>
                <div className='div-item-margin'> 
                  <div className={clsx("text-small-01","text-small-color")} dangerouslySetInnerHTML={{__html:item["info"]}}></div>
                </div>
              </div>
              <div className="image-css">
                <img src={""} alt="logo" />
              </div>
            </div>
          })}

        </div>
      </div>
    </div>

  );
}

export default App;
