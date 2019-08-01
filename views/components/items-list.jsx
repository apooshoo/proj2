var React = require('react');
class ItemsList extends React.Component {
    render() {

        let itemsList = this.props.itemsList.map(item =>{

            let created_at_date = item.created_at.toISOString().substring(0, 10);
            // console.log("created date", created_at_date)

            let updated_at_date = item.updated_at.toISOString().substring(0, 10);
            // console.log("updated date", updated_at_date);

            let due_date_date = item.due_date.toISOString().replace(/T[\S\s]+/,'');
            // console.log(due_date_date)
            let recurringState = "On";
            if (item.recurring === false){
                recurringState = "Off";
            }
            let recurringDisplay = "Recurring: " + recurringState;


            return (
                <form className="col-lg-6 col-12 ">
                    <div className="card my-2">
                        <div className="card-header form-group bg-success">
                            <label className="control-label" htmlFor="name-input">Item:</label>
                            <input type="text" className="form-control" name="name" id="name-input" defaultValue={item.name}/>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="item-input">Amount:</label>
                                <input type="text" className="form-control" name="amount" id="item-input" defaultValue={item.amount}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="item-input">Creditor:</label>
                                <input type="text" className="form-control" name="creditor" id="item-input" defaultValue={item.creditor}/>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input type="checkbox" name="recurringbox" id="recurringCheckbox" data-toggle="toggle"/>
                                {recurringDisplay}
                              </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="due_date-input">Due Date:</label>
                                <input type="date" className="form-control" name="due_date" id="due_date-input" defaultValue={due_date_date}/>
                            </div><div className="form-group">
                                <label htmlFor="item-input">Amount:</label>
                                <input type="text" className="form-control" name="item" id="item-input" defaultValue={item.amount}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="created_at-input">Date Created:</label>
                                <input type="text" className="form-control" name="created_at" id="created_at-input" defaultValue={created_at_date} disabled/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="updated_at-input">Last Updated</label>
                                <input type="text" className="form-control" name="updated_at" id="updated_at-input" defaultValue={updated_at_date} disabled/>
                            </div>



                                <button className="btn btn-primary" type="submit" formMethod="POST" formAction={"/items/"+item.id+"?_method=PUT"}>Edit</button>
                                <button className="btn btn-primary" type="submit" formMethod="POST" formAction={"/items/"+item.id+"?_method=DELETE"}>Delete</button>
                        </div>
                    </div>
                </form>
            );
        });

        return (
            <div className="d-flex flex-wrap show-all-wrapper">
                {itemsList}
            </div>
        );
    }
}

module.exports = ItemsList;
// <p>Created at: {item.created_at}</p>/