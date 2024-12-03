import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddEquipment = () => {
    const { user } = useContext(AuthContext)
    console.log(user)

    const handleAddEquipment = (e) => {
        e.preventDefault()

        const form = e.target
        const itemName=form.itemName.value
        const categoryName=form.categoryName.value
        const price=form.price.value
        const rating=form.rating.value
        const customization=form.customization.value
        const processingTime=form.processingTime.value
        const stockStatus=form.stockStatus.value
        const photoUrl=form.photoUrl.value
        const userEmail=form.userEmail.value
        const userName=form.userName.value
        const description=form.description.value

        const sportsEquipment = {
            itemName,
            categoryName,
            price,
            rating,
            customization,
            processingTime,
            stockStatus,
            photoUrl,
            userEmail,
            userName,
            description,
        }
            // console.log(items)

        fetch("http://localhost:4000/allEquipment", {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(sportsEquipment)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'successful!',
                    text: 'Added Coffee Successfully',
                    icon: 'success',
                    confirmButtonText: 'close'
                  })
                }
        })


    }


    return (
        <div className="flex justify-center items-center py-10 bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
                <h1 className="text-2xl font-bold text-center mb-2">Add New Item</h1>
                <p className="text-center text-gray-600 mb-6">
                    Fill out the details below to add a new item. Make sure to provide accurate information.
                </p>
                <form onSubmit={handleAddEquipment} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Item Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Item Name</label>
                        <input
                            type="text"
                            placeholder="Enter item name"
                            className="input input-bordered w-full"
                            name="itemName"
                        />
                    </div>

                    {/* Category Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Category Name</label>
                        <input
                            type="text"
                            placeholder="Enter category name"
                            className="input input-bordered w-full"
                            name="categoryName"
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Price</label>
                        <input
                            type="number"
                            placeholder="Enter price"
                            className="input input-bordered w-full"
                            name="price"
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Rating</label>
                        <input
                            type="number"
                            step="0.1"
                            max="5"
                            placeholder="Enter rating (out of 5)"
                            className="input input-bordered w-full"
                            name="rating"
                        />
                    </div>

                    {/* Customization */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Customization</label>
                        <input
                            type="text"
                            placeholder="Enter customization details"
                            className="input input-bordered w-full"
                            name="customization"
                        />
                    </div>

                    {/* Processing Time */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Processing Time</label>
                        <input
                            type="text"
                            placeholder="Enter processing/delivery time"
                            className="input input-bordered w-full"
                            name="processingTime"
                        />
                    </div>

                    {/* Stock Status */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Stock Status</label>
                        <input
                            type="number"
                            placeholder="Enter available quantity"
                            className="input input-bordered w-full"
                            name="stockStatus"
                        />
                    </div>

                    {/* Image Input */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Photo URL</label>
                        <input
                            type="text"
                            placeholder="Enter Photo URL"
                            className="input input-bordered w-full"
                            name="photoUrl"
                        />
                    </div>

                    {/* User Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">User Email</label>
                        <input
                            type="email"
                            defaultValue={`${user?.email}`}
                            placeholder="Enter user email"
                            className="input input-bordered w-full"
                            name="userEmail"
                        />
                    </div>

                    {/* User Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">User Name</label>
                        <input
                            type="text"
                            defaultValue={`${user?.displayName}`}
                            placeholder="Enter user name"
                            className="input input-bordered w-full"
                            name="userName"
                        />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            placeholder="Enter item description"
                            className="textarea textarea-bordered w-full"
                            name="description"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 text-center">
                        <button type="submit" className="btn btn-primary w-full">
                            Add Item
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}


export default AddEquipment;