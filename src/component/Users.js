import React from 'react';
import image from './photo-1623393937972-4b3102ba8c23.jpg'

const Users = ({user}) => {
    return (
        <div>
            <div className="row">
        <div className="col s12 m7">
          <div className="card small">
            <div className="card-image">
              <img src={image} alt="" height="300" width="300" />
            </div>
            <div className="card-content">
            <div>
                    <h2>Name: </h2>
                    <h4>{user.name}</h4>
                </div>
                <div>
                    <h2>Company: </h2>
                    <h4>{user.company.name}</h4>
                </div>
                <div>
                    <h2>Email: </h2>
                    <h4>{user.email}</h4>
                </div>
                <div>
                    <h2>Adress: </h2>
                    <h4>{user.address.street}, {user.address.suite}, {user.address.city},{' '}
            {user.address.zipcode}</h4>
                </div>
                <div>
                    <h2>Phone Number: </h2>
                    <h4>{user.phone}</h4>
                </div>
            </div>
            <div className="card-action">
              
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Users
