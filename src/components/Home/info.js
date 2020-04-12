import React from 'react';
import {Link} from 'gatsby';
import Title from '../Globals/Title';

export default function info() {
    return (
        <section className="py-5"> 
           <div className="container">
               <Title title="our story"/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
Sint consectetur ipsum excepteur enim consectetur magna.
Duis exercitation velit esse ut est anim laboris irure excepteur ea aliquip nulla ad. Labore pariatur ullamco cillum cillum sit non veniam do esse cupidatat elit est cupidatat. Commodo quis in labore et non minim quis ipsum sit eiusmod proident. Dolor reprehenderit duis officia id consequat irure anim pariatur non mollit enim ad proident. Amet aliquip nisi ut laborum pariatur.
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">about page</button>
                        </Link>
                    </div>
                </div>
           </div>
        </section>
    )
}



