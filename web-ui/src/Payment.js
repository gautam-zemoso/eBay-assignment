import './App.css';
import financialSummary from './financial_summary.json';
import {TEXT_CONSTANT,AMOUNT_TYPE} from '../src/constants/constant';
import {getAccountSummary, getTransactionsSummary} from './converter/convertCatrgoriesClientToService';

const constants = {
    reportNumber: "0-12nr2obt240-qihfw048-ednow84-dqnoqr83e",
    dateRange:"Dec 01, 2021 - Dec 31, 2021",
    dateGenerated:"Dec 01, 2021",
}
function Payment() {
    const accountSummaryTable = getAccountSummary(financialSummary.categorySummaries);
    const transectionSummary = getTransactionsSummary(financialSummary.categorySummaries);
    const subThead = AMOUNT_TYPE;
    return (
        <div className="rightDiv1">
            <p className="paymentActivity">{TEXT_CONSTANT.PAYMENT_ACTIVITY_REPORT}</p>
            <div>
                <ul className="right">
                     <li>{`${TEXT_CONSTANT.DATE_RANGE}: ${constants.dateRange}`}</li>
                     <li>{`${TEXT_CONSTANT.GENERATED}: ${constants.dateGenerated}`}</li>
                     <li> <a className="ahref" href={"."}>{TEXT_CONSTANT.VIEW_REPORT_EXAMPLE}</a></li> 
                
                </ul>
                <ul className="left">
                <li>{TEXT_CONSTANT.REPORT_NUMBER}</li>
                <li className={"liReportNumber" }>{constants.reportNumber}</li>
                </ul>
            </div>
            <table>
                <thead>
                    <tr className="accountSummary"><th className="accountSummarySub">{TEXT_CONSTANT.ACCOUNT_SUMMARY}</th></tr>
                </thead>
                <tbody>
                    {accountSummaryTable.map((row, index) => {
                        return (<tr className={index % 2 === 0 ? "trFirst" : ""} key={index}>
                            <td className="tdFirst">{TEXT_CONSTANT[row.title]}</td>
                            <td className="tdLast">{row.amount}</td>
                        </tr>)
                        ;
                    })}
                </tbody>
            </table>
            <div className="line"></div>
            <p className="transactionSummary">{TEXT_CONSTANT.TRANSACTIONS_SUMMARY}</p>
            {transectionSummary?.map((item, index) => {
                return <table>
                    <thead>
                        <tr>
                            <th className={index === 0 ? "thFirst" : "thFirstSub"}>
                                <span className='circle-top-span-h1'>
                                    {index === 0 &&
                                        <span class="circle-2-h1">
                                            <p class="alpha-text">A</p>
                                        </span>
                                    }
                                    <span className={index === 0 ? "content-span-h1" : ""}>{ TEXT_CONSTANT[item.title]}</span>
                                </span>
                            </th>
                            {subThead.map((heading, index1) => {
                                return <th className={index1 === 2 ? "thLast" : "th"} key={heading + index1}>
                                    {(index === 0 && index1 !== 2) ?
                                        <span className='circle-top-span'>

                                            <span class="circle-2">
                                                <p class="alpha-text">A</p>
                                            </span>
                                            <span className="content-span">{TEXT_CONSTANT[heading]}</span></span> :
                                        <p>{TEXT_CONSTANT[heading]}</p>}
                                </th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {item.subTableContent.map((row, index) => {
                            return <tr key={index} className={index % 2 === 0 ? "trFirst" : ""}>
                                <td className={(row.depth && row.depth === 1) ? "expenseSubTd" : "tdFirst"}>{TEXT_CONSTANT[row.title]}</td>
                                <td className={(row.Debits) === '--' ? "tdHyphenDebit" : "td"}>{row.debitAmount}</td>
                                <td className={(row.Credits) === '--' ? "tdHyphenCredit" : "td"}>{row.creditAmount}</td>
                                <td className={(row.Net) === '--' ? "tdHyphenNet" : "tdLast"}>{row.totalAmount}</td>

                            </tr>;
                        })}
                    </tbody>
                </table>
            })}
        </div>
    );
}

export default Payment;