import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Service() {
  return (
    <>
        <Header title="Manage services"/>
            < div className="container-fluid py-5" >
                <div className="container py-5">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Categorie</th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table-danger'>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>250rs</td>
                                <td>@mdo</td>
                                <td className='d-flex justify-content-around border-0'>
                                    <button type="button" class="btn btn-secondary">Add</button>
                                    <button type="button" class="btn btn-success">Update</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr >
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>250rs</td>
                                <td>@fat</td>
                                <td className='d-flex justify-content-around border-0'>
                                    <button type="button" class="btn btn-secondary">Add</button>
                                    <button type="button" class="btn btn-success">Update</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            <tr className='table-danger'>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>250rs</td>
                                <td>@twitter</td>
                                <td className='d-flex justify-content-around border-0'>
                                    <button type="button" class="btn btn-secondary">Add</button>
                                    <button type="button" class="btn btn-success">Update</button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
  )
}

export default Service