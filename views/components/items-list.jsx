var React = require('react');
class ItemsList extends React.Component {
    render() {
        let itemsList = this.props.itemsList.map(item =>{
            let dayC = item.created_at.getDate();
            let monthC = item.created_at.getMonth() + 1;
            let yearC = item.created_at.getFullYear();
            let dateC = `${dayC}/${monthC}/${yearC}`;

            let dayU = item.created_at.getDate();
            let monthU = item.created_at.getMonth() + 1;
            let yearU = item.created_at.getFullYear();
            let dateU = `${dayU}/${monthU}/${yearU}`;


            return (
                <form>
                    <div className="card my-2">
                        <div className="card-header form-group bg-primary">
                            <input type="text" class="form-control" placeholder={"Item: "+item.name}/>
                        </div>
                        <div className="card-body">
                            <div className=" form-group">
                                <input type="text" class="form-control" name="item" id="name-input" placeholder={"Amt: "+item.amount}/>
                                <input type="text" class="form-control" name="recurring" placeholder={"Recurring: "+item.recurring}/>
                                <input type="text" class="form-control" name="due_date" placeholder={"Due Date: "+item.due_date}/>
                                <input type="text" class="form-control" name="created_at" placeholder={"Created At: "+dateC}/>
                                <input type="text" class="form-control" name="updated_at" placeholder={"Created At: "+dateU}/>
                                <button className="btn btn-primary" type="submit" formMethod="POST" formAction={"/edit/"+item.id+"?_method=PUT"}>Edit</button>
                                <button className="btn btn-primary" type="submit" formMethod="POST" formAction={"/delete"+item.id+"?_method=PUT"}>Delete</button>
                            </div>
                        </div>
                    </div>
                </form>
            );
        });

        return (
            <div>
                {itemsList}
            </div>
        );
    }
}

module.exports = ItemsList;
// <p>Created at: {item.created_at}</p>/