var React = require("react");
var Layout = require("./layouts/layout");
var CreditorsList = require("./components/creditors-list");

var sha256 = require('js-sha256');
var SALT = 'bonk';


class User extends React.Component {
  render() {
    let cookies = this.props.cookies;
    let stats = this.props.stats

    let currentTz = new Date();
    let currentDate = new Date().toISOString().substring(0, 10);
    let pay_day = stats.pay_day.toISOString().substring(0, 10);
    let next_pay_day = stats.next_pay_day.toISOString().substring(0, 10);
    let daysBetween = (lateTz, earlyTz) => {
        return Math.round((lateTz - earlyTz)/86400000);
    };
    let daysToPayday = daysBetween(stats.next_pay_day, currentTz);

    let liquidAmt = stats.pay_amount - stats.save_amount - this.props.totalSpend.amount;
    let liquidPercentage = liquidAmt / stats.pay_amount * 100 + "%";

    let creditorsList = this.props.creditors;

    return (
        <Layout cookies={cookies}>
            <div className="row mainwrapper">
                <div className="col col-lg-10 offset-lg-1 col-sm-12 col-12">
                    <div className="card user-wrapper w-75 mx-auto">
                        <div className="card-header bg-light text-dark">Current Settings
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Payday: {pay_day}</li>
                                <li className="list-group-item">Next payday: {next_pay_day}</li>
                                <li className="list-group-item">Days to next payday: {daysToPayday}</li>
                                <li className="list-group-item">Total Expenditure: ${this.props.totalSpend.amount}</li>
                                <li className="list-group-item">Liquid Amount: ${liquidAmt} ({liquidPercentage})</li>
                            </ul>
                            <div className="collapsibles-list">
                                <CreditorsList creditorsList={creditorsList}></CreditorsList>
                            </div>
                        </div>
                        <div className="card-footer">
                             <form>
                                <button className="btn btn-dark" formMethod="GET" formAction={"/"+cookies.userid+"/settings"}>Settings</button>
                                <button className="btn btn-dark ml-3" formMethod="GET" formAction={"/items/history/"+cookies.userid}>Pay History</button>
                            </form>
                        </div>


                    </div>


                </div>
            </div>
        </Layout>


    );
  }
}

module.exports = User;