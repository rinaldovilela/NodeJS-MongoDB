const mongoose = require('mongoose');
const Schema = mongoose.Schema



const contactSchema = new Schema({
    number: {type: String, required: true} ,  
    email: {type: String, required: true }
});


const orderSchema = new Schema ({
    repair: { type: Boolean, required: true},
    exchange: {type: Boolean, required: true},
    extendWarranty: {type: Boolean, required: true},
    purchaseDate: { type: Date, required: true },
    productType: { type: String, required: true },
    invoiceNumber: { type: String, required: true},
    purchaseValue: { type: Number, required: true},
})

const customerSchema = new Schema ({
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: contactSchema, required: true},
    order: { type: orderSchema, required: true}

});

const orders = [
    {
        customer: {
            name: "Customer Name",
            cpf: "000.000.000-00",
            contact: {
                number: "00 00000-0000",
                email: "afd@gmail.com",
            },
            address: "Street AAA",
            order: {
                repair: true,
                exchange: false,
                extendWarranty: false,
                purchaseDate: new Date("2024-01-01"),
                productType: "Product A",
                invoiceNumber: "12345",
                purchaseValue: 100,
            },
        },
    },
];

const OrderModel = mongoose.model('Order', customerSchema)


module.exports = { OrderModel };
