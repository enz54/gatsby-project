import React from 'react'
import Title from '../Globals/Title'

export default function Contact() {
    return (
        <section className="contact py-5">
           <Title title="contact us" />
           <div class="row">
               <div class="col-10 col-sm-8 col-md-6 mx-auto ">
                   <form action="https://formspree.io/mrgajdyr" method="POST">
                       {/* name */}
                       <div class="form-group">
                         <label htmlFor="name">Name</label>
                         <input name="name" className="form-control" type="text" id="name" placeholder="john smith"/>
                       </div>
                       {/* email */}
                       <div class="form-group">

                         <label htmlFor="name">Email</label>
                         <input name="email" className="form-control" type="text" id="email  " placeholder="email@email.com"/>
                       </div>
                       {/* description */}
                       <div class="form-group">
                         <label htmlFor="description">Description</label>
                         <textarea name="description" id="description" rows="5" className="form-control" placeholder="your description here ..." />
                       </div>
                       {/* submit */}
                       <button type="submit" className="btn btn-yellow btn-block text-capitalize">
                           submit
                       </button>
                   </form>
               </div>
           </div>
        </section>
    )
}
