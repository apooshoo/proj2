var React = require("react");
var Layout = require("./layouts/layout");
var ItemsList = require("./components/items-list");
var ItemsSelect = require("./components/items-select");

var sha256 = require('js-sha256');
var SALT = 'bonk';


class Home extends React.Component {
  render() {
    console.log("rendering home.jsx")
    let itemsList = this.props.itemsData;
    let cookies = this.props.cookies;
    let currentDate = new Date().toISOString().substring(0, 10);

    // let default_due_date = item.due_date.toISOString().replace(/T[\S\s]+/,'');
    // console.log(due_date_date)

    return (
        <Layout cookies={cookies}>
            <div className="row mainwrapper">
                <div className="col col-lg-10 offset-lg-1 col-sm-12 col-12">
                    <div className="col-12 user-wrapper">
                    </div>

                    <div className="col-12 items-list-wrapper">
                    <ItemsSelect itemsList={itemsList}></ItemsSelect>
                    <ItemsList itemsList={itemsList}></ItemsList>
                    </div>
                </div>
            </div>
        </Layout>


    );
  }
}



module.exports = Home;