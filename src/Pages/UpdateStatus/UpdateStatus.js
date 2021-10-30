import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const UpdateStatus = () => {
    const [order, setOrder] = useState({});
    const [isUpdate, setIsUpdated] = useState(null);
    const {id} = useParams();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    useEffect(() => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [id, isUpdate]);
    // console.log(product)

    
    const onSubmit = (data) => {
        fetch(`http://localhost:5000/update/${id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.modifiedCount) {
                alert("Modified successfully");
                setIsUpdated(true);
                reset();
            } else {
              setIsUpdated(false);
            }
          });
        console.log(data);
      };
    return (
        <div className="mx-auto my-5 w-50 text-center">
            <h2 className="mb-3">Update Order Status</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                className="form-control mb-3"
                defaultValue={order?.status}
                {...register("status")}
                required
                />
                
                <input className="btn btn-success w-25" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateStatus;