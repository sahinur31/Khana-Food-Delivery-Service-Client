import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleMenu from '../SingleMenu/SingleMenu';
import './FoodItems.css';

const FoodItems = () => {
    const [menus, setMenues] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setMenues(data));
    }, [])
// 51 4
    return (
        <div className="add-food py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h2>Our Food Menu</h2>
                        </div>
                    </div>
                </div>
                {
                    menus.length === 0 ?
                    <Spinner animation="border" />
                    :
                    <div className="row">
                    {
                        menus.map(menu => <SingleMenu
                        key={menu._id}
                        menu={menu}
                        ></SingleMenu>)
                    }
                </div>
                }
            </div>
        </div>
    );
};

export default FoodItems;