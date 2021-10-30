import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddFood.css';

const AddFood = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-food py-5 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title mb-4">
                            <h2>Add A Food Menu</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="single-add-food">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control mb-3" {...register("key")} placeholder="Key" />
                            <input className="form-control mb-3" {...register("name")} placeholder="Name" />
                            <input className="form-control mb-3" type="number" {...register("price")} placeholder="price" />
                            <input className="form-control mb-3" type="text" {...register("restaurantName")} placeholder="restaurant name" />
                            <textarea className="form-control mb-3" {...register("description")} placeholder="Description" />
                            
                            <input className="form-control mb-3" {...register("img")} placeholder="image url" />
                            <input type="submit" />
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFood;