import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader.react';



class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: {
                id: 0,
                name: '',
                rating: 0,
            }
        }
    }
    adminData = {
        adminName: 'Sures',
        altText: 'Admin',
        logo: '/admin.jpg',
        subhead: 'Admin Managment'

    }
    handleInput = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        this.setState(prevState => ({
            admin:
                { ...prevState.admin, [name]: value }

        }

        ));
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit fired");
        console.log(this.state.admin)
        fetch("http://localhost:4040/drivers", {
            'method': 'POST',
            'body': JSON.stringify(this.state.admin),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => console.log(res.json()))
    }
    render() {
        return (
            <div >
                <DashboardHeader data={this.adminData} />
                <form onSubmit={this.handleSubmit} className='col-md-6'>
                    <div class='form-group'><label htmlFor="">Id</label>
                        <input type="text" name='id' defaultValue={this.state.admin.id} onChange={this.handleInput} class='form-control' />
                    </div>
                    <div class='form-group'>
                        <label htmlFor="">Driver Name</label>
                        <input type="text" name='name' defaultValue={this.state.admin.name} onChange={this.handleInput} class='form-control' />
                    </div>
                    <div class='form-group'>
                        <label htmlFor="">Rating</label>
                        <input type="text" name='rating' defaultValue={this.state.admin.rating} onChange={this.handleInput} class='form-control' />
                    </div>
                    <input type="submit" value='Add' class="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default AdminDashboard;