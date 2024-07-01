import "./Dashboard.css"
import Card from '../../components/Card/Card'
const Dashboard = () => {
  return (
    <div className="dashboard mb-5">
      <h1 className="text-success text-center" >Servie Center</h1>
      <p className="">Located in the heart of Asansol, Service Center is your one-stop solution for a wide range of services.
         We pride ourselves on offering a diverse array of services to meet all your needs, including: Automotive Repair,
         Mobile Repair, Property Dealing, Property Registery and Mutation, Food Delivery, Grocery Delivery, Car Rental and Computer Repair Services 
         at the best price and on gives time and trusted employee</p>
   <div className="card-container d-flex flex-wrap align-items-center justify-content-center gap-2">
   <Card/>
   <Card/> <Card/> <Card/> <Card/> <Card/>
   </div>
  
    </div>
  )
}

export default Dashboard
