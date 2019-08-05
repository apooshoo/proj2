var React = require('react');
class Layout extends React.Component {
    render() {
        let currentDate = new Date().toISOString().substring(0, 10);
        let cookies = this.props.cookies;
        return (
            <html>
            <head>
                <title>Vaults</title>
                <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>



                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"  crossOrigin="anonymous"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"/>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="/styles.css"/>
            </head>
            <body>
            <nav className="navbar navbar-expand-lg sticky-top d-print navbar-dark bg-dark" id="navbar">
                <a className="navbar-brand" href="/items/"><img src="/dollar.png" width="40" height="40" className="mr-3" alt=""/>Vaults</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Sort Items
                            </a>
                            <div class="dropdown-menu py-0" aria-labelledby="navbarDropdownMenuLink">
                              <div className="card">
                                <div className="card-body bg-light px-3">
                                    <form method="GET" action="/items/sort">
                                        <div className="form-group">
                                            <select className="form-control" name="parameter" id="sort-parameter">
                                                <option selected disabled>Sort by</option>
                                                <option value="name">Item Name</option>
                                                <option value="amount">Amount</option>
                                                <option value="creditor">Creditor</option>
                                                <option value="recurring">Recurring</option>
                                                <option value="due_date">Due Date</option>
                                                <option value="created_at">Date Created</option>
                                                <option value="updated_at">Date Updated</option>
                                            </select>
                                            <select className="form-control" name="order" id="sort-order">
                                                <option selected disabled>Order by</option>
                                                <option value="DESC">Descending</option>
                                                <option value="ASC">Ascending</option>
                                            </select>
                                            <button className="btn btn-primary mt-2" type="submit">Sort</button>
                                        </div>
                                    </form>
                                </div>
                              </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Search by Name
                            </a>
                            <div class="dropdown-menu py-0" aria-labelledby="navbarDropdownMenuLink">
                                <div className="card">
                                    <div className="card-body bg-light px-3">
                                        <form method="get" action="/items/search">
                                            <input className="form-control" type="search" name="search" placeholder="Search"/>
                                            <button className="btn btn-primary mt-2" type="submit">Search</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Create Item
                            </a>
                            <div class="dropdown-menu py-0" aria-labelledby="navbarDropdownMenuLink">
                                <div className="card">
                                    <div className="card-body bg-light px-3">
                                        <form method="POST" action="/items/new">
                                            <input type="text" className="card-input form-control" name="name" placeholder="Input name of item"/>
                                            <input type="text" className="card-input form-control" name="amount" placeholder="Input amount in dollars, eg. 1.23"/>
                                            <input type="text" className="card-input form-control" name="creditor" placeholder="Input name of creditor"/>
                                            <div className="checkbox">
                                              <label>
                                                <input type="checkbox" name="recurring" data-toggle="toggle"/>
                                                Check this box for monthly payments
                                              </label>
                                            </div>
                                            <label className="font-weight-light ml-2" htmlFor="due_date-input">Due Date:</label>
                                            <input type="date" className="card-input form-control" name="due_date" defaultValue={currentDate}/>
                                            <button className="btn btn-primary my-2" type="submit">Create</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              {cookies.username}
                            </a>
                            <div class="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink">
                                <a href={"/"+cookies.userid+"/stats"} className="nav-link text-dark" id="acc-btn">Account</a>
                                <a href="/logout" className="nav-link text-dark">Log out</a>

                            </div>
                        </li>
                    </ul>
                </div>



            </nav>
            <div className="container-fluid my-5">
                {this.props.children}
            </div>
            <script src="/script.js"></script>
            </body>
            </html>
        );
    }
}

module.exports = Layout;

// <nav className="navbar navbar-expand-lg sticky-top d-print navbar-dark bg-dark" id="navbar">
//     <div className="dropdown col-1">
//         <button className="btn btn-link dropdown-toggle text-white" type="button" id="dropdown-sort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort</button>
//         <div className="dropdown-menu px-0 py-0" aria-label="dropdown-menu">
//             <div className="card">
//                 <div className="card-body bg-light px-3">
//                     <form method="GET" action="/items/sort">
//                         <div className="form-group">
//                             <select className="form-control" name="parameter" id="sort-parameter">
//                                 <option selected disabled>Sort by</option>
//                                 <option value="name">Item Name</option>
//                                 <option value="amount">Amount</option>
//                                 <option value="creditor">Creditor</option>
//                                 <option value="recurring">Recurring</option>
//                                 <option value="due_date">Due Date</option>
//                                 <option value="created_at">Date Created</option>
//                                 <option value="updated_at">Date Updated</option>
//                             </select>
//                             <select className="form-control" name="order" id="sort-order">
//                                 <option selected disabled>Order by</option>
//                                 <option value="DESC">Descending</option>
//                                 <option value="ASC">Ascending</option>
//                             </select>
//                             <button className="btn btn-primary mt-2" type="submit">Sort</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="dropdown col-1">
//         <button className="btn btn-link dropdown-toggle text-white" type="button" id="dropdown-sort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search</button>
//          <div className="dropdown-menu px-0 py-0" aria-label="dropdown-menu">
//             <div className="card">
//                 <div className="card-body bg-light px-3">
//                     <form method="get" action="/items/search">
//                         <input className="form-control" type="search" name="search" placeholder="Search"/>
//                         <button className="btn btn-primary mt-2" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="dropdown col-1">
//         <button className="btn btn-link dropdown-toggle text-white" type="button" id="dropdown-sort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Create</button>
//         <div className="dropdown-menu py-0 my-0" aria-label="dropdown-menu">
//             <div className="card">
//                 <div className="card-body bg-light px-3">
//                     <form method="POST" action="/items/new">
//                         <input type="text" className="card-input form-control" name="name" placeholder="Input name of item"/>
//                         <input type="text" className="card-input form-control" name="amount" placeholder="Input amount in dollars, eg. 1.23"/>
//                         <input type="text" className="card-input form-control" name="creditor" placeholder="Input name of creditor"/>
//                         <div className="checkbox">
//                           <label>
//                             <input type="checkbox" name="recurring" data-toggle="toggle"/>
//                             Check this box for monthly payments
//                           </label>
//                         </div>
//                         <label className="font-weight-light ml-2" htmlFor="due_date-input">Due Date:</label>
//                         <input type="date" className="card-input form-control" name="due_date" defaultValue={currentDate}/>
//                         <button className="btn btn-primary my-2" type="submit">Create</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <a className="navbar-brand col offset-2" href="/items/">
//         <img src="/dollar.png" width="40" height="40" className="mr-3" alt=""/>Vaults</a>
//     <a href={"/"+cookies.userid+"/stats"} className="btn btn-link text-white" id="acc-btn">Account</a>
//     <a href="/logout" className="btn btn-link text-white">Log out</a>
// </nav>