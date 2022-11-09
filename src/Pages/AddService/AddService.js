import React from 'react';

const AddService = () => {
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const flavours = form.flavours.value;
        const weight = form.weight.value;
        const design = form.design.value;
        const img = form.img.value;
        
        const service = {

            name,
                price,
            rating,
                description,
            flavours,
                weight,
            design,
                img,
        }


        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>
            <form onSubmit={handleAddService}>
                <input type="text" name="name" id="" placeholder='name'/>
                <input type="text" name="price" id=""  placeholder='price'/>
                <input type="text" name="rating" id=""  placeholder='rating'/>
                <input type="text" name="description" id=""  placeholder='description'/>
                <input type="text" name="flavours" id=""  placeholder='flavours'/>
                <input type="text" name="weight" id="" placeholder='weight' />
                <input type="text" name="design" id=""  placeholder='design'/>
                <input type="text" name="img" id=""  placeholder='img'/>
                <input className='btn' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default AddService;