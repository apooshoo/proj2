var React = require("react");
var Layout = require("./layouts/layout");
var ItemsList = require("./components/items-list");

var sha256 = require('js-sha256');
var SALT = 'bonk';


class Home extends React.Component {
  render() {
    let itemsList = this.props.itemsData;
    let currentDate = new Date().toISOString().substring(0, 10);
    let cookies = this.props.cookies;

    // let default_due_date = item.due_date.toISOString().replace(/T[\S\s]+/,'');
    // console.log(due_date_date)

    return (
        <Layout cookies={cookies}>
            <div className="row mainwrapper">
                <div className="col col-lg-10 offset-lg-3 col-12">
                    <div className="col-12 items-list-wrapper">
                    <ItemsList itemsList={itemsList}></ItemsList>
                    </div>
                </div>
            </div>
        </Layout>

    );
  }
}

module.exports = Home;